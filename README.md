# ¿Dónde estás políticamente?

Aplicación web (España) para descubrir posiciones políticas propias respondiendo
a **propuestas políticas concretas sin ver nunca qué partido las propone**.
Después proyecta las respuestas sobre siete ejes ideológicos con incertidumbre
y, solo si el usuario lo pide, compara con posiciones públicas documentadas de
partidos.

Diseño completo: [docs/ARQUITECTURA.md](docs/ARQUITECTURA.md).
Metodología para el usuario final: página `/metodologia` de la propia app.

## Estado actual

**Fases 1 y 2 completadas**: arquitectura, motor de scoring testado, UI
completa y **dataset verificado activo** (90 preguntas, ~200 posiciones de
partido con fuente primaria).

Corpus verificado (2026-08-09): los cuatro programas electorales oficiales del
23J-2023 (PP 112 pp., PSOE 272 pp., VOX 178 pp., Sumar 182 pp.), descargados
de las webs oficiales (PSOE/VOX/Sumar vía snapshots de Wayback Machine de la
URL oficial por bloqueos anti-bots), **votaciones oficiales del Congreso**
(open data `congreso.es/webpublica/opendata/votaciones` y Diario de Sesiones:
amnistía DSCD-15-PL-45 30/05/2024 votación por llamamiento 177-172; Ley 4/2023
trans-LGTBI sesión 229 votación 371 22/12/2022; RDL 7/2018 sanidad universal
sesión 137 votación 3 06/09/2018) y **BOE** (STC 169/2021, recurso PSOE contra
la prisión permanente). Cada posición cita documento, página o registro de
votación y fragmento literal, con `verifiedAt`; la ausencia de posición se
registra como `insufficient_evidence` y no puntúa en la comparación. Posiciones
anteriores al ciclo 2023-2026 lo indican en su explicación. Regla dura del
proyecto: **nunca** inventar URLs, páginas, citas ni posiciones.

El dataset demo original se conserva en `src/data/questions/demo/` como
fixture de desarrollo; ya no alimenta la aplicación.

## Comandos

```bash
npm run dev       # desarrollo (http://localhost:3000)
npm run build     # build de producción
npm start         # servir el build
npm test          # unit tests del motor de scoring (vitest)
npm run balance   # informe de balance/sesgo del dataset
npm run lint      # eslint
```

## Estructura

```
src/lib/types.ts          modelo de datos completo (Question, PartyPosition, Source…)
src/lib/scoring/          motor puro y testado: ejes, L-R, incertidumbre,
                          consistencia, similitud, selección, discriminación
src/data/questions/       dataset: demo/ (sin verificar) y verified/ (Fase 2)
src/data/parties.ts       partidos configurables (añadir/quitar aquí)
src/data/balance.ts       comprobaciones automáticas de sesgo
src/app/                  páginas: /, /test, /resultados, /resultados/partidos,
                          /metodologia, /fuentes, /acerca-de, /privacidad,
                          /admin/questions (solo desarrollo)
tests/scoring/            unit tests (38, incluye casos límite)
scripts/balance-report.ts informe de balance por consola
```

## Principios innegociables

1. Durante el test, cero pistas de procedencia (partido, color, documento, fecha).
2. El scoring ideológico se calcula solo con el **contenido** de las propuestas;
   la comparación con partidos es una capa independiente (sin circularidad).
3. «No tengo suficiente información» excluye la pregunta; no es un 0.
4. Toda puntuación lleva incertidumbre visible; la inconsistencia la amplía,
   nunca penaliza.
5. Un partido sin posición documentada en una pregunta no compite en ella.
6. Privacidad por diseño: cálculo local, sin registro, sin rastreadores.
7. Datasets demo y verificado estrictamente separados; el build falla si se
   mezclan (validaciones en `src/data/questions/index.ts`).

## Añadir un partido

1. Entrada en `src/data/parties.ts` (+ variable de color `--party-<id>` en
   `globals.css`, validada en claro y oscuro con el validador de dataviz).
2. Posiciones con fuente primaria en las preguntas donde exista evidencia
   (`partyPositions`), con `validFrom`, `confidence` y `verifiedAt`.
3. `npm run balance` para comprobar que no desequilibra el dataset.

## Fases siguientes

- **Ampliación del corpus** — votaciones del Congreso, BOE e iniciativas
  parlamentarias para las preguntas que hoy puntúan solo en ejes (13) y para
  contrastar programa vs. voto real.
- **Fase 3** — más partidos (Podemos, ERC, Junts, EH Bildu, PNV, BNG, CC, UPN…).
- **Fase 4** — estadísticas agregadas opt-in («entre los participantes de esta
  web», nunca «los españoles»).
- **Fase 5** — calibración empírica de pesos (PCA / factor analysis / IRT).
