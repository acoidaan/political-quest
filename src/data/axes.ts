import type { AxisDefinition, AxisId } from "@/lib/types";

export const AXES: AxisDefinition[] = [
  {
    id: "economic",
    label: "Economía",
    negativePole: "Intervención / redistribución",
    positivePole: "Mercado / menor intervención",
    description:
      "Grado de intervención pública en la economía: redistribución, regulación y provisión pública frente a mercado y menor intervención.",
    inLeftRight: true,
  },
  {
    id: "social",
    label: "Sociedad",
    negativePole: "Progresismo",
    positivePole: "Conservadurismo",
    description:
      "Valores sociales: cambio en derechos civiles, familia, género y costumbres frente a preferencia por marcos tradicionales.",
    inLeftRight: true,
  },
  {
    id: "authority",
    label: "Autoridad",
    negativePole: "Libertario",
    positivePole: "Orden / autoridad",
    description:
      "Equilibrio entre libertades individuales y garantías frente a seguridad, orden público y capacidad sancionadora del Estado.",
    inLeftRight: true,
  },
  {
    id: "territorial",
    label: "Territorio",
    negativePole: "Descentralización",
    positivePole: "Centralización",
    description:
      "Distribución territorial del poder: más autogobierno autonómico frente a más competencias para el Estado central.",
    inLeftRight: false,
  },
  {
    id: "europe",
    label: "Europa",
    negativePole: "Más integración europea",
    positivePole: "Soberanismo",
    description:
      "Cesión de competencias a instituciones europeas frente a recuperación de soberanía nacional.",
    inLeftRight: false,
  },
  {
    id: "immigration",
    label: "Inmigración",
    negativePole: "Mayor apertura",
    positivePole: "Mayor restricción",
    description:
      "Política migratoria: vías de entrada, regularización e integración frente a control y restricción.",
    inLeftRight: true,
  },
  {
    id: "environment",
    label: "Medioambiente",
    negativePole: "Mayor intervención ambiental",
    positivePole: "Menor regulación",
    description:
      "Intensidad de la política climática y ambiental frente a prioridad de coste económico y menor regulación.",
    inLeftRight: true,
  },
];

export const AXIS_BY_ID: Record<AxisId, AxisDefinition> = Object.fromEntries(
  AXES.map((a) => [a.id, a])
) as Record<AxisId, AxisDefinition>;

export const AXIS_IDS: AxisId[] = AXES.map((a) => a.id);
