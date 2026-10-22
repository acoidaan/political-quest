@AGENTS.md

# Proyecto

Lee README.md y docs/ARQUITECTURA.md antes de tocar nada. Reglas duras: datasets demo/verificado nunca se mezclan; nunca inventar fuentes ni posiciones de partidos; el scoring ideológico jamás usa posiciones de partidos (capa independiente). Motor de scoring = funciones puras en src/lib/scoring con tests en tests/scoring (npm test). Tras tocar el dataset: npm run balance.
