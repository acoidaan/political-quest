import type { Category, CategoryId } from "@/lib/types";

export const CATEGORIES: Category[] = [
  { id: "economia", label: "Economía", group: "Economía" },
  { id: "impuestos", label: "Impuestos", group: "Economía" },
  { id: "bienestar", label: "Estado del bienestar", group: "Economía" },
  { id: "pensiones", label: "Pensiones", group: "Economía" },
  { id: "trabajo", label: "Trabajo", group: "Economía" },
  { id: "salario_minimo", label: "Salario mínimo", group: "Economía" },
  { id: "vivienda", label: "Vivienda", group: "Economía" },
  { id: "regulacion", label: "Regulación empresarial", group: "Economía" },
  { id: "empleo_publico", label: "Empleo público", group: "Economía" },
  { id: "sanidad", label: "Sanidad", group: "Servicios públicos" },
  { id: "educacion", label: "Educación", group: "Servicios públicos" },
  { id: "universidades", label: "Universidades", group: "Servicios públicos" },
  { id: "igualdad", label: "Igualdad", group: "Derechos y sociedad" },
  { id: "genero", label: "Feminismo y legislación de género", group: "Derechos y sociedad" },
  { id: "lgbt", label: "Derechos LGBT", group: "Derechos y sociedad" },
  { id: "familia", label: "Familia", group: "Derechos y sociedad" },
  { id: "aborto", label: "Aborto", group: "Derechos y sociedad" },
  { id: "eutanasia", label: "Eutanasia", group: "Derechos y sociedad" },
  { id: "religion", label: "Religión", group: "Derechos y sociedad" },
  { id: "cultura", label: "Cultura", group: "Derechos y sociedad" },
  { id: "inmigracion", label: "Inmigración", group: "Inmigración" },
  { id: "nacionalidad", label: "Nacionalidad", group: "Inmigración" },
  { id: "seguridad", label: "Seguridad", group: "Seguridad y justicia" },
  { id: "policia", label: "Policía", group: "Seguridad y justicia" },
  { id: "justicia", label: "Justicia", group: "Seguridad y justicia" },
  { id: "prisiones", label: "Prisiones", group: "Seguridad y justicia" },
  { id: "libertad_expresion", label: "Libertad de expresión", group: "Libertades" },
  { id: "privacidad", label: "Privacidad", group: "Libertades" },
  { id: "territorio", label: "Territorio", group: "Territorio" },
  { id: "autonomias", label: "Autonomías", group: "Territorio" },
  { id: "cataluna", label: "Cataluña", group: "Territorio" },
  { id: "pais_vasco", label: "País Vasco", group: "Territorio" },
  { id: "monarquia", label: "Monarquía / modelo de Estado", group: "Modelo de Estado" },
  { id: "constitucion", label: "Constitución", group: "Modelo de Estado" },
  { id: "medios_publicos", label: "Medios públicos", group: "Modelo de Estado" },
  { id: "ue", label: "Unión Europea", group: "Exterior" },
  { id: "otan", label: "OTAN", group: "Exterior" },
  { id: "defensa", label: "Defensa", group: "Exterior" },
  { id: "exterior", label: "Política exterior", group: "Exterior" },
  { id: "energia", label: "Energía", group: "Energía y medioambiente" },
  { id: "nuclear", label: "Energía nuclear", group: "Energía y medioambiente" },
  { id: "clima", label: "Cambio climático", group: "Energía y medioambiente" },
  { id: "agricultura", label: "Agricultura", group: "Energía y medioambiente" },
  { id: "medioambiente", label: "Medioambiente", group: "Energía y medioambiente" },
  { id: "transporte", label: "Transporte", group: "Energía y medioambiente" },
  { id: "fiscalidad_verde", label: "Fiscalidad verde", group: "Energía y medioambiente" },
  { id: "digitalizacion", label: "Digitalización", group: "Tecnología" },
  { id: "ia", label: "Inteligencia artificial", group: "Tecnología" },
];

export const CATEGORY_BY_ID: Record<CategoryId, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c])
);

export function categoryLabel(id: CategoryId): string {
  return CATEGORY_BY_ID[id]?.label ?? id;
}
