import { ImageResponse } from "next/og";

/**
 * Imagen de previsualización al compartir el enlace (WhatsApp, Telegram, X…).
 * Estética editorial de la app; sin partidos ni datos personales (§61).
 */
export const alt =
  "¿Dónde estás políticamente? Responde a propuestas políticas sin saber quién las propone.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf8f5",
          color: "#211d18",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            color: "#8a847a",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          UN TEST SOBRE IDEAS, NO SOBRE SIGLAS
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 1.05 }}>
            <span style={{ marginRight: 26 }}>{"¿Qué piensas "}</span>
            <span style={{ color: "#a16207" }}>realmente?</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#5b554c",
              maxWidth: 900,
              lineHeight: 1.35,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Responde a propuestas políticas reales sin saber quién las propone y
            descubre dónde se sitúan tus respuestas.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "2px solid #e6e0d5",
            paddingTop: 28,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ display: "flex", gap: 40, fontSize: 24, color: "#5b554c" }}>
            <span>Economía</span>
            <span>Sociedad</span>
            <span>Autoridad</span>
            <span>Territorio</span>
            <span>Europa</span>
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#8a847a" }}>
            Fuentes verificadas · sin registro
          </div>
        </div>
      </div>
    ),
    size
  );
}
