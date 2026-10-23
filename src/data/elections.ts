/**
 * Seguimiento de programas electorales (docs/ACTUALIZACION.md).
 *
 * Registro público y fechado de qué candidaturas se siguen y en qué estado
 * está su programa. Lo actualiza la revisión periódica mediante pull request;
 * solo admite hechos verificables (fechas, URLs oficiales), nunca opiniones.
 *
 * Esta lista NO alimenta el test ni la comparación: un partido entra en la
 * comparación cuando sus posiciones están verificadas y se activa en
 * src/data/parties.ts. Orden: ámbito estatal primero y luego alfabético, para
 * no sugerir ninguna jerarquía.
 */

export type ProgramStatus =
  /** Aún no hay programa publicado. */
  | "pending"
  /** Hay documentos programáticos oficiales parciales (avances, decálogos…). */
  | "partial"
  /** Programa completo publicado; pendiente de incorporar al dataset. */
  | "published"
  /** Posiciones extraídas, verificadas e incorporadas a la comparación. */
  | "incorporated";

export interface ProgramDocument {
  title: string;
  /** URL oficial (web del partido o copia archivada de esa URL). */
  url: string;
  /** Fecha de publicación (ISO). */
  date: string;
}

export interface TrackedCandidacy {
  /** Coincide con el id de src/data/parties.ts si el partido existe allí. */
  id: string;
  name: string;
  /** "Estatal" o la comunidad/territorio donde concurre. */
  scope: string;
  /** Partidos que integran la candidatura, si es una coalición. */
  composition?: string;
  officialWebsite?: string;
  programStatus: ProgramStatus;
  documents: ProgramDocument[];
  /** Última comprobación (ISO). */
  lastChecked: string;
  notes?: string;
}

export interface Election {
  id: string;
  name: string;
  /** Día de la votación (ISO). */
  date: string;
  convocation: { description: string; date: string };
  campaign: { from: string; to: string };
}

export const CURRENT_ELECTION: Election = {
  id: "generales-2026",
  name: "Elecciones generales del 29 de noviembre de 2026",
  date: "2026-11-29",
  convocation: {
    description:
      "Real Decreto de disolución de las Cortes Generales y de convocatoria de elecciones, publicado en el BOE",
    date: "2026-10-06",
  },
  campaign: { from: "2026-11-13", to: "2026-11-27" },
};

const CHECKED = "2026-10-23";
/** Candidaturas cuya fuente no se pudo leer en la última revisión. */
const PREVIOUS_CHECK = "2026-10-22";

export const TRACKED_CANDIDACIES: TrackedCandidacy[] = [
  // ---------------------------------------------------------------- estatales
  {
    id: "democracia21",
    name: "Democracia 21",
    scope: "Estatal (Madrid y Barcelona)",
    composition:
      "Registrada en coalición con Ciudadanos y UCIN como «Democracia para el Siglo 21» (pendiente de proclamación)",
    programStatus: "pending",
    documents: [],
    lastChecked: PREVIOUS_CHECK,
  },
  {
    id: "frente-amplio",
    name: "Frente Amplio",
    scope: "Estatal",
    composition: "Movimiento Sumar, Izquierda Unida, Más Madrid y Comuns",
    programStatus: "pending",
    documents: [],
    lastChecked: PREVIOUS_CHECK,
  },
  {
    id: "podemos",
    name: "Podemos",
    scope: "Estatal",
    officialWebsite: "https://podemos.info",
    programStatus: "pending",
    documents: [],
    lastChecked: PREVIOUS_CHECK,
  },
  {
    id: "pp",
    name: "PP",
    scope: "Estatal",
    officialWebsite: "https://www.pp.es",
    programStatus: "partial",
    documents: [
      {
        title: "Contrato con España",
        url: "https://www.pp.es/wp-content/uploads/2026/10/CONTRATO-CON-ESPANA-.pdf",
        date: "2026-10-19",
      },
    ],
    lastChecked: CHECKED,
  },
  {
    id: "psoe",
    name: "PSOE",
    scope: "Estatal",
    officialWebsite: "https://www.psoe.es",
    programStatus: "pending",
    documents: [],
    lastChecked: CHECKED,
  },
  {
    id: "vox",
    name: "VOX",
    scope: "Estatal",
    officialWebsite: "https://www.voxespana.es",
    programStatus: "pending",
    documents: [],
    lastChecked: PREVIOUS_CHECK,
  },
  // ------------------------------------------------------------- territoriales
  {
    id: "adelante-andalucia",
    name: "Adelante Andalucía",
    scope: "Andalucía",
    programStatus: "pending",
    documents: [],
    lastChecked: PREVIOUS_CHECK,
  },
  {
    id: "bng",
    name: "BNG",
    scope: "Galicia",
    officialWebsite: "https://www.bng.gal",
    programStatus: "pending",
    documents: [],
    lastChecked: CHECKED,
  },
  {
    id: "cc",
    name: "Coalición Canaria",
    scope: "Canarias",
    programStatus: "pending",
    documents: [],
    lastChecked: PREVIOUS_CHECK,
  },
  {
    id: "compromis",
    name: "Compromís",
    scope: "Comunitat Valenciana",
    programStatus: "pending",
    documents: [],
    lastChecked: PREVIOUS_CHECK,
  },
  {
    id: "ehbildu",
    name: "EH Bildu",
    scope: "País Vasco y Navarra",
    officialWebsite: "https://ehbildu.eus",
    programStatus: "pending",
    documents: [],
    lastChecked: CHECKED,
  },
  {
    id: "erc",
    name: "ERC",
    scope: "Cataluña",
    officialWebsite: "https://www.esquerra.cat",
    programStatus: "pending",
    documents: [],
    lastChecked: PREVIOUS_CHECK,
  },
  {
    id: "junts",
    name: "Junts",
    scope: "Cataluña",
    officialWebsite: "https://junts.cat",
    programStatus: "pending",
    documents: [],
    lastChecked: CHECKED,
  },
  {
    id: "pnv",
    name: "PNV",
    scope: "País Vasco",
    officialWebsite: "https://www.eaj-pnv.eus",
    programStatus: "pending",
    documents: [],
    lastChecked: CHECKED,
  },
];

export const PROGRAM_STATUS_LABELS: Record<ProgramStatus, string> = {
  pending: "Programa pendiente",
  partial: "Documentos parciales",
  published: "Programa publicado · en verificación",
  incorporated: "Incorporado a la comparación",
};

// Validación en tiempo de carga: ids únicos, fechas ISO y URLs https.
{
  const ids = new Set<string>();
  const iso = /^\d{4}-\d{2}-\d{2}$/;
  for (const c of TRACKED_CANDIDACIES) {
    if (ids.has(c.id)) throw new Error(`Candidatura duplicada: ${c.id}`);
    ids.add(c.id);
    if (!iso.test(c.lastChecked)) throw new Error(`lastChecked no ISO: ${c.id}`);
    if (c.programStatus !== "pending" && c.documents.length === 0)
      throw new Error(`Estado ${c.programStatus} sin documento: ${c.id}`);
    for (const d of c.documents) {
      if (!d.url.startsWith("https://")) throw new Error(`URL no https: ${c.id}`);
      if (!iso.test(d.date)) throw new Error(`Fecha no ISO: ${c.id}/${d.title}`);
    }
  }
}
