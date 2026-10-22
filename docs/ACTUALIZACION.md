# Protocolo de actualización de fuentes

Este documento es el procedimiento que sigue **cualquier actualización del
dataset**, la haga una persona o la revisión periódica automatizada. Si una
regla de aquí choca con la comodidad, gana la regla.

Reglas duras del proyecto (ver también `CLAUDE.md`):

- **Nunca** inventar URLs, páginas, citas ni posiciones.
- El scoring ideológico **nunca** usa posiciones de partidos.
- Los datasets demo y verificado nunca se mezclan.
- Nada entra en `main` sin pull request revisado.

## 1. Qué se vigila

| Prioridad | Qué | Dónde |
|---|---|---|
| 1 | **Programas electorales** de las candidaturas de `src/data/elections.ts` | Web oficial de cada partido (o captura de Wayback Machine de esa URL oficial) |
| 2 | Documentos programáticos oficiales parciales (avances, contratos, decálogos) | Web oficial del partido |
| 3 | Votaciones nominales del Congreso que afecten a propuestas del test | `congreso.es` (open data de votaciones, Diario de Sesiones) |
| 4 | Normas publicadas que cambien el contexto de una propuesta | `boe.es` |
| 5 | Nuevas candidaturas o coaliciones | Proclamación de candidaturas en el BOE, Junta Electoral Central |

Los medios de comunicación **solo sirven para detectar** que algo se ha
publicado. Una noticia nunca es fuente de una posición. Para dar por buena una
detección hay que contrastarla en **al menos dos medios de líneas editoriales
distintas** (por ejemplo, uno de cada lado entre El País / elDiario.es /
Público y El Mundo / ABC / El Confidencial / El Debate, o agencias como EFE y
Europa Press), y después localizar el documento original en la web oficial.

## 2. Registro de seguimiento (`src/data/elections.ts`)

En cada revisión:

1. Actualiza `lastChecked` de cada candidatura comprobada.
2. Si hay documento oficial nuevo: añádelo a `documents` (título, URL oficial
   `https://`, fecha) y cambia `programStatus`:
   - `partial`: documentos programáticos oficiales pero no el programa completo.
   - `published`: programa completo publicado, aún sin incorporar.
   - `incorporated`: posiciones verificadas e incorporadas (paso 4).
3. Candidaturas nuevas: solo si cumplen el criterio de la página `/elecciones`
   (representación en el Congreso saliente, presencia relevante en el ciclo o
   nueva formación estatal) y su existencia consta en fuente oficial o en dos
   medios. Orden alfabético dentro de cada ámbito.
4. `notes` y `composition` solo con hechos verificables y neutros.

## 3. Extraer posiciones de un programa

Para cada pregunta de `src/data/questions/verified/*.ts`:

1. Busca en el programa el texto que aborda **la misma medida**. No vale una
   frase genérica sobre el tema.
2. Copia el **fragmento literal** (`originalText`), sin parafrasear, y anota la
   página del PDF (`source.page`).
3. Asigna `status` con la escala de 8 niveles (`src/lib/types.ts`). Si el
   programa no aborda la medida: `insufficient_evidence`. Si es ambiguo:
   `neutral_or_unclear`. En la duda, el estado más prudente.
4. `confidence`: 0.9 cita directa e inequívoca; 0.7 cita clara pero con
   matices; 0.5 posición derivada (explicar en `explanation`).
5. `source`: `type: "electoral_program"`, `document` con el título oficial,
   `url` oficial, `date` de publicación, `verifiedAt` con la fecha de hoy.
6. `validFrom`: fecha de publicación del programa.

**Qué se cierra y qué no:** con un programa nuevo se cierran las posiciones
que procedían del programa anterior, aunque el nuevo no aborde la medida (en
ese caso, la nueva es `insufficient_evidence`). Las posiciones basadas en
votaciones del Congreso o en el BOE siguen vigentes salvo que el programa
nuevo las contradiga expresamente.

**Versionado, nunca sobrescritura:** la posición anterior del mismo partido se
conserva y recibe `validUntil` igual al `validFrom` de la nueva. El motor
(`currentPosition` en `src/lib/scoring/positions.ts`) usa siempre la vigente.

**Mismo rasero para todos:** se revisan todas las preguntas para cada partido
incorporado, no solo las que convienen. Un partido nuevo se activa en
`src/data/parties.ts` cuando tiene posiciones en una parte sustancial del
cuestionario (orientativo: al menos 20 preguntas comparables), con su color
`--party-<id>` validado en claro y oscuro.

**Coaliciones que sustituyen a un partido** (p. ej. Frente Amplio respecto de
Sumar): se crea el partido nuevo con sus posiciones del programa nuevo; el
anterior pasa a `active: false` cuando el nuevo esté incorporado, con una nota.

## 4. Preguntas nuevas

Si un programa trae una medida relevante que el test no cubre:

1. Redacción neutral, con el trade-off explícito y sin vocabulario de ningún
   partido. Explicación ⓘ con las dos caras.
2. Pesos ideológicos con la rúbrica (§3.8 de `ARQUITECTURA.md`), asignados
   **solo por el contenido** de la propuesta, antes de mirar qué partidos la
   apoyan.
3. Posiciones de **todos** los partidos activos (con `insufficient_evidence`
   donde no haya evidencia).
4. `npm run balance` no debe introducir avisos nuevos.

Lo que **no** se hace: reajustar pesos ideológicos «según la actualidad» o el
contexto político. Los pesos describen qué significa una propuesta, no cuánto
se habla de ella. La actualidad entra eligiendo qué propuestas se incluyen,
nunca cambiando su significado.

## 5. Comprobaciones antes del pull request

```bash
npm test          # motor de scoring
npm run lint
npm run build     # incluye las validaciones del dataset
npm run balance   # sin avisos nuevos
```

Añade una entrada en `src/data/changelog.ts` (se publica en `/novedades`).

## 6. Formato del pull request

- Título: `datos: <partido> — <documento>` o `seguimiento: revisión <fecha>`.
- Cuerpo: tabla `pregunta | partido | estado anterior → nuevo | página | cita`,
  enlaces a las fuentes, medios usados para la detección y cualquier duda.
- Un PR por documento fuente cuando sea posible, para revisarlo bien.
- Si no hay nada nuevo, no se abre PR.
