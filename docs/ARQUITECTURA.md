# ¿Dónde estás políticamente? — Arquitectura y diseño

Documento de diseño previo a la implementación. Versión 1.0 — 2026-08-09.

---

## 1. Arquitectura general

**Principio rector:** el motor de puntuación, los datos y la interfaz son tres capas
estrictamente separadas. La comparación con partidos es una capa independiente del
scoring ideológico (ver §67-68 del briefing: nunca se deriva una de la otra).

```
┌─────────────────────────────────────────────────────┐
│  UI (Next.js App Router, React, Tailwind)           │
│  landing · test · resultados · partidos · admin     │
└──────────────────────┬──────────────────────────────┘
                       │ importa funciones puras
┌──────────────────────▼──────────────────────────────┐
│  Motor de scoring (src/lib/scoring/*)               │
│  Funciones puras, sin React, con unit tests         │
└──────────────────────┬──────────────────────────────┘
                       │ opera sobre tipos de
┌──────────────────────▼──────────────────────────────┐
│  Datos (src/data/*)                                 │
│  preguntas · partidos · ejes · categorías           │
│  demoData ≠ verifiedData (flag estricto)            │
└─────────────────────────────────────────────────────┘
```

**Decisiones clave:**

- **Sin backend en el MVP.** Todo el cálculo se hace en el cliente. Las respuestas
  viven en `localStorage` bajo un identificador aleatorio. Esto es privacidad por
  diseño: ninguna opinión política sale del dispositivo. La Fase 4 (estadísticas
  agregadas) añadirá un endpoint opt-in con consentimiento explícito.
- **Datos como módulos TypeScript tipados**, no base de datos, en el MVP. Un dataset
  de 200-300 preguntas cabe holgadamente en memoria, se versiona con git (auditoría
  gratis) y el tipado detecta errores de esquema en compilación. La estructura es
  serializable a JSON tal cual, de modo que migrar a SQLite/Postgres/Supabase en
  Fase 4 es trivial.
- **Gráficos en SVG propio** (radar, mapa 2D, barras). Sin dependencia de librería:
  control total del diseño, cero peso extra, accesibilidad controlada.
- **Tests con Vitest** sobre el motor de scoring.

## 2. Modelo de datos

Tipos completos en `src/lib/types.ts`. Resumen:

- `Question` — id, categoría, subcategoría, texto neutral mostrado, texto(s)
  original(es), pesos ideológicos multieje, importancia, polaridad (para controlar
  acquiescence bias), pares de consistencia (`relatedTo`), estado editorial
  (`draft → needs_source → needs_neutrality_review → verified → published → archived`),
  flag `demo`, flag `needsVerification`, notas metodológicas.
- `PartyPosition` — posición de un partido sobre una pregunta: estado de 8 niveles
  (`strongly_support … strongly_oppose`, `insufficient_evidence`), valor numérico
  [-1, +1], fuente (`Source`), confianza [0, 1], `validFrom`/`validUntil`,
  explicación. Una pregunta lleva 0..n posiciones (varios partidos pueden defender
  la misma medida, §19/§66).
- `Source` — tipo (programa electoral, Congreso, Senado, BOE, web oficial del
  partido, documento oficial, declaración institucional, demo), documento, URL,
  fecha, página/sección, fecha de verificación.
- `Party` — id, nombre, color (solo para uso post-revelación), activo/inactivo.
  Añadir un partido = añadir una entrada aquí + posiciones donde haya evidencia.
- `UserAnswer` — valor -3..+3 o `skipped` ("no tengo suficiente información",
  excluye la pregunta del cálculo, NO es 0), importancia personal opcional.
- `QuizSession`, `QuizResult`, `AxisScore` (valor + incertidumbre + nº efectivo de
  preguntas), `PartySimilarity` (% coincidencia, nº comparables, incertidumbre,
  desglose por categoría y por pregunta).

**Separación crítica (§67):** `Question.weights` (qué significa ideológicamente) y
`Question.partyPositions` (quién la apoya) son campos independientes que se rellenan
por procesos independientes. Ninguna herramienta del proyecto deriva uno del otro.

## 3. Metodología de scoring

Detallada para el usuario final en `/metodologia`. Resumen técnico:

### 3.1 Ejes

Siete ejes, escala interna [-1, +1], presentación 0-100:

| Eje | -1 / 0 | +1 / 100 |
|---|---|---|
| economic | intervención / redistribución | mercado / menor intervención |
| social | progresismo | conservadurismo |
| authority | libertario | orden / autoridad |
| territorial | descentralización | centralización |
| europe | más integración europea | soberanismo |
| immigration | mayor apertura | mayor restricción |
| environment | más intervención ambiental | menor regulación |

### 3.2 Puntuación de eje

Para cada eje *a*:

```
score_a = Σᵢ (rᵢ/3 · wᵢₐ · impᵢ) / Σᵢ (|wᵢₐ| · impᵢ)
```

donde `rᵢ` es la respuesta (-3..+3), `wᵢₐ` el peso de la pregunta en el eje
([-1, +1]), `impᵢ` = importancia editorial de la pregunta × multiplicador de
importancia personal (0.75 / 1.0 / 1.3 — acotado para que no domine, §7).
Las preguntas omitidas o respondidas "no tengo suficiente información" no entran
ni en numerador ni en denominador.

### 3.3 Incertidumbre

Por eje: error estándar ponderado de las contribuciones individuales
(desviación típica ponderada / √n_eff, con n_eff = tamaño muestral efectivo de
Kish (Σw)²/Σw²), multiplicado por el factor de inconsistencia (§3.5), con un
suelo dependiente de n_eff para que 2 respuestas nunca produzcan certeza
artificial (§44). Se presenta como ±X en escala 0-100 (IC ≈ 95%).

### 3.4 Izquierda-derecha global

Combinación documentada de ejes **de contenido**, nunca de partidos (§68):

```
L-R = 0.40·economic + 0.25·social + 0.15·authority + 0.10·immigration + 0.10·environment
```

`territorial` y `europe` quedan **fuera** del cálculo izquierda-derecha porque en
España atraviesan el eje: existen descentralistas de izquierda (ERC, Bildu) y de
derecha (Junts, PNV), centralistas de izquierda y de derecha. Incluirlos
contaminaría la medida. Los pesos se renormalizan sobre los ejes con datos.
La incertidumbre se propaga: √(Σ wₐ²·seₐ²) con suelo.
Presentación siempre descriptiva: "Tus respuestas se sitúan…", nunca "Eres…".

### 3.5 Consistencia

Pares de preguntas relacionadas (formulación directa/inversa, `relatedTo` con
`expected: "inverse" | "aligned"`). Índice de inconsistencia ∈ [0, 1] = media de
|r_A/3 + r_B/3|/2 en pares inversos (análogo con resta en alineados). Amplía la
incertidumbre (multiplicador 1 + inconsistencia); **nunca** penaliza la puntuación.

### 3.6 Similitud con partidos

Método elegido: **coincidencia media ponderada por pregunta**, no cosine ni
euclídea global. Justificación documentada en `/metodologia`:

- Cosine similarity ignora el desplazamiento absoluto (un usuario tibio y un
  partido extremo con el mismo signo darían similitud 1.0) — engañoso aquí.
- La distancia euclídea global es dominada por los ejes con más preguntas.
- La coincidencia por pregunta es directamente interpretable ("en esta cuestión
  estáis a X de distancia") y agregable por categoría, que es exactamente lo que
  la pantalla "por qué" necesita (§17).

Para cada pregunta comparable (usuario respondió con la escala Y el partido tiene
posición verificada distinta de `insufficient_evidence` y `neutral_or_unclear`):

```
agreement_q = 1 − |r/3 − p| / 2          ∈ [0, 1]
weight_q    = importancia · confianza_fuente
similarity  = Σ agreement·weight / Σ weight
```

Se reporta: % de coincidencia, nº de posiciones comparables sobre el total,
incertidumbre (EE de los agreements, con suelo dependiente de n), desglose por
categoría (para "coincidís / diferís especialmente en") y detalle por pregunta
con fuente. Un partido sin posición en una pregunta simplemente no compite en
ella (§15): no se le penaliza.

### 3.7 Selección de preguntas

`selectQuestions(pool, mode, seed)` — determinista con semilla:

1. Filtra `published` (o `demo` en modo demo).
2. Puntuación de selección = relevancia editorial + discriminationScore
   (varianza de posiciones de partidos donde existan; neutral si no) + necesidad
   de cobertura del eje/categoría aún descubierta − penalización por redundancia
   (misma subcategoría o `relatedTo` ya seleccionada).
3. Greedy con cobertura garantizada de los 7 ejes incluso en el test de 25.
4. En 75/150 se incluyen deliberadamente 3-6 pares de consistencia, separados.
5. Orden final: barajado con restricción de no repetir categoría en preguntas
   adyacentes (round-robin aleatorizado) y alternancia de polaridad para mitigar
   acquiescence bias.

### 3.8 Pesos ideológicos de las preguntas

Protocolo reproducible (documentado en `/metodologia`):
1. Clasificación humana inicial con rúbrica escrita (qué eje toca, dirección, magnitud
   en banda 0.2/0.5/0.8 ±0.1).
2. Segunda clasificación independiente (o semántica automatizada) a ciegas.
3. Discrepancias > 0.3 → revisión conjunta y nota metodológica.
4. Con datos reales (Fase 5): PCA / análisis factorial / IRT para validar
   empíricamente qué preguntas cargan en qué dimensiones. La estructura de datos
   (respuestas item-level anónimas, opt-in) lo permite desde el día 1.

## 4. Estrategia de verificación de fuentes

Orden de preferencia (§50): programa electoral oficial → Congreso → Senado → BOE →
web oficial del partido → documentos oficiales → declaraciones institucionales.

Flujo por propuesta (§49): localizar documento → comprobar fecha → extraer texto
original literal → guardar URL + página → clasificar → reescribir neutralmente →
verificación de fidelidad (¿la versión neutral conserva la sustancia?) → asignar
pesos con la rúbrica → buscar posiciones equivalentes de otros partidos → registrar
confianza y notas.

**Regla dura:** ninguna posición sin fuente primaria entra en producción. El campo
`needsVerification: true` bloquea el paso a `published`. El dataset inicial de esta
versión es **íntegramente demo** (`demo: true`): la estructura es real, las
posiciones de partidos NO están verificadas y la UI lo indica en todas las
superficies donde aparecen partidos o fuentes.

## 5. Estructura de páginas

```
/                    landing (sin partidos en el hero)
/test                cuestionario (25/75/150)
/resultados          resultado personal: L-R, ejes, radar, mapa 2D,
                     convicciones, zonas centristas, contradicciones,
                     autopercepción vs resultado, perfil generado
/resultados/partidos comparación opcional, solo tras click explícito
/metodologia         metodología completa
/fuentes             base de fuentes consultable
/acerca-de           objetivo del proyecto
/privacidad          política de privacidad
/admin/questions     panel interno (solo desarrollo)
```

## 6. Componentes

- `quiz/`: `QuizRunner` (estado, navegación ←, persistencia), `QuestionCard`
  (categoría + afirmación + escala 7 + "no tengo suficiente información" +
  control secundario de importancia), `ProgressBar`, `SelfPlacement` (autopercepción
  previa al resultado), `ModePicker`.
- `charts/`: `RadarChart`, `Compass2D` (mapa económico × autoridad), `AxisBar`
  (barra de eje con marcador e intervalo), `DumbbellCompare` (autopercepción vs
  resultado), todos SVG accesible con `role="img"` + descripciones.
- `results/`: `ScoreHero`, `AxisPanel`, `ConvictionsList`, `CentristList`,
  `ContradictionsPanel`, `ProfileSummary`, `PartyRevealGate`, `PartyCard`
  (desglose por categoría y pregunta con fuente), `ShareCard`.
- `ui/`: primitivas mínimas accesibles (botón, chip, disclosure).

## 7. Propuesta visual

Editorial-minimalista: fondo papel cálido (`#faf8f5`), tinta casi negra, un solo
acento ocre/ámbar (`#b45309` aprox.) que no pertenece a ningún partido español.
Tipografía display serif (stack del sistema: Iowan Old Style / Palatino / Georgia)
para titulares y datos grandes; sans del sistema para UI. Mucho blanco, reglas
horizontales finas estilo periódico, animaciones discretas con
`prefers-reduced-motion` respetado. Dark mode con papel oscuro cálido. Durante el
test: paleta 100% neutral; colores de partido solo tras la revelación y como
elemento secundario (un punto, no un fondo).

## 8. Riesgos metodológicos (y mitigación)

1. **Sesgo de selección de propuestas** → informe de balance automático
   (`npm run balance`): nº de propuestas por partido origen, distribución de
   polaridad, cobertura de categorías, discriminación media.
2. **Razonamiento circular partidos↔ideología** → separación estricta de campos y
   procesos (§67-68); el L-R nunca toca posiciones de partidos.
3. **Acquiescence bias** → campo `polarity`, alternancia en la selección, pares
   invertidos de consistencia.
4. **Falsa precisión** → incertidumbre siempre visible, suelos de incertidumbre,
   lenguaje descriptivo ("tus respuestas se sitúan…").
5. **Muestra no representativa** → toda estadística agregada futura se etiquetará
   "entre los participantes de esta web" (§34).
6. **Posiciones desactualizadas** → `validFrom/validUntil`, etiqueta de ciclo
   electoral visible, versionado de posiciones (nunca sobrescribir).
7. **Atribución incorrecta** → `confidence` por posición, `insufficient_evidence`
   excluye del cálculo, panel de auditoría con estados editoriales.
8. **Datos demo confundidos con reales** → flag `demo` estructural + banner
   permanente en toda superficie que muestre partidos o fuentes.

## 9. Estructura de archivos

```
src/
  app/                        páginas (App Router)
  components/
    quiz/  charts/  results/  ui/
  lib/
    types.ts                  modelo de datos completo
    rng.ts                    PRNG con semilla (selección determinista)
    store.ts                  persistencia local (localStorage, id aleatorio)
    profile.ts                generador del perfil descriptivo
    scoring/
      constants.ts            escalas, pesos L-R, umbrales (documentados)
      axes.ts                 calculateAxisScores
      leftRight.ts            calculateLeftRightScore
      uncertainty.ts          calculateUncertainty (compartido)
      consistency.ts          calculateConsistency
      similarity.ts           calculatePartySimilarity
      selectQuestions.ts      selección + ordenación
      discrimination.ts       discriminationScore
      index.ts
  data/
    axes.ts  categories.ts  parties.ts
    questions/
      demo/                   dataset demo (demo: true en todo)
      verified/               vacío hasta Fase 2 (solo fuentes primarias)
      index.ts                unión tipada, nunca mezcla flags
    balance.ts                generador del informe de balance
scripts/
  balance-report.ts           npm run balance
tests/
  scoring/*.test.ts           unit tests (límites incluidos)
docs/
  ARQUITECTURA.md             este documento
```

## Fases

- **Fase 1 (esta entrega):** arquitectura, diseño, motor de scoring testado,
  dataset demo estructuralmente completo, todas las páginas del MVP.
- **Fase 2:** investigación y verificación de 60-100 propuestas reales con
  fuentes primarias (programas 2023-2026, Congreso, BOE). Flujo definido en §4.
- **Fase 3:** ampliación de partidos (Podemos, ERC, Junts, Bildu, PNV, BNG…).
- **Fase 4:** estadísticas agregadas opt-in con backend mínimo.
- **Fase 5:** calibración estadística (PCA / factor analysis / IRT) con
  respuestas reales.
