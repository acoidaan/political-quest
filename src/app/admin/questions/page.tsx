import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdminQuestions } from "@/components/admin/AdminQuestions";

export const metadata: Metadata = {
  title: "Admin · Preguntas",
  robots: { index: false, follow: false },
};

/**
 * Panel interno de auditoría (§23, §52).
 *
 * Solo desarrollo: en producción devuelve 404 salvo que se active
 * explícitamente con ENABLE_ADMIN=true (p. ej. en un despliegue interno).
 * No hay sistema de usuarios, así que no debe quedar accesible en público.
 */
const ADMIN_ENABLED =
  process.env.NODE_ENV !== "production" || process.env.ENABLE_ADMIN === "true";

export default function AdminQuestionsPage() {
  if (!ADMIN_ENABLED) notFound();
  return <AdminQuestions />;
}
