# Cómo contribuir

Gracias por querer mejorar el proyecto. Hay tres formas de ayudar, de menos a
más trabajo:

1. **Señalar un error de datos** con la plantilla
   [«Posición de partido incorrecta»](../../issues/new?template=posicion.yml).
   Necesita fuente primaria y cita literal.
2. **Proponer una fuente o candidatura** con la plantilla
   [«Proponer una fuente»](../../issues/new?template=fuente.yml).
3. **Abrir un pull request** siguiendo [docs/ACTUALIZACION.md](docs/ACTUALIZACION.md).

## Reglas que no se negocian

- Nunca inventar URLs, páginas, citas ni posiciones. Si no hay evidencia, se
  registra `insufficient_evidence`.
- Las noticias sirven para detectar novedades, no como fuente de posiciones.
- Los pesos ideológicos se asignan por el contenido de la propuesta, antes de
  mirar qué partidos la apoyan, y no se reajustan según la actualidad.
- Durante el test no puede haber ninguna pista de procedencia (partido, color,
  documento, fecha).
- Las posiciones se versionan (`validFrom` / `validUntil`), nunca se
  sobrescriben.
- Mismo rasero para todos los partidos: si se revisa una pregunta para uno, se
  revisa para todos.

## Entorno

```bash
npm ci
npm run dev        # http://localhost:3000
npm run check      # lint + tipos + tests + balance + build (lo mismo que CI)
```

El motor de puntuación (`src/lib/scoring`) son funciones puras: cualquier
cambio va con su test en `tests/scoring`.

## Pull requests

- Un PR por documento fuente cuando sea posible.
- Rellena la tabla de fuentes de la plantilla de PR.
- Añade una entrada en `src/data/changelog.ts` (se publica en `/novedades`).
- La CI debe pasar: lint, tipos, tests, balance sin avisos y build.
