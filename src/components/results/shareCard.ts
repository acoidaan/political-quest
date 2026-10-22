import type { QuizResult } from "@/lib/types";
import { AXIS_BY_ID } from "@/data/axes";

/**
 * Tarjeta compartible (§36): imagen 1200×630 con el resultado global y los
 * ejes. Sin partidos, sin datos personales. Se genera íntegramente en el
 * dispositivo del usuario.
 */
export function downloadShareCard(result: QuizResult): void {
  const W = 1200;
  const H = 630;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const paper = "#faf8f5";
  const ink = "#211d18";
  const ink2 = "#5b554c";
  const muted = "#8a847a";
  const track = "#eee8dc";
  const accent = "#a16207";
  const serif = 'Georgia, "Times New Roman", serif';
  const sans = 'system-ui, -apple-system, "Segoe UI", sans-serif';

  ctx.fillStyle = paper;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = muted;
  ctx.font = `600 22px ${sans}`;
  ctx.fillText("MI MAPA POLÍTICO", 70, 80);

  ctx.fillStyle = ink;
  ctx.font = `72px ${serif}`;
  ctx.fillText(`${Math.round(result.leftRight.display)} / 100`, 70, 170);
  ctx.fillStyle = ink2;
  ctx.font = `28px ${serif}`;
  ctx.fillText(
    `${result.leftRight.band} · ± ${Math.round(result.leftRight.uncertainty)}`,
    70,
    212
  );

  const axes = result.axes.filter((a) => a.answered > 0);
  const barX = 70;
  const barW = 640;
  let y = 280;
  for (const axis of axes) {
    ctx.fillStyle = ink;
    ctx.font = `600 19px ${sans}`;
    ctx.fillText(AXIS_BY_ID[axis.axis].label, barX, y);
    ctx.fillStyle = ink2;
    ctx.font = `19px ${sans}`;
    const v = `${Math.round(axis.display)}`;
    ctx.fillText(v, barX + barW + 18, y);

    ctx.fillStyle = track;
    roundRect(ctx, barX, y + 10, barW, 8, 4);
    // banda de incertidumbre
    const lo = Math.max(0, axis.display - axis.uncertainty) / 100;
    const hi = Math.min(100, axis.display + axis.uncertainty) / 100;
    ctx.fillStyle = "rgba(161, 98, 7, 0.25)";
    roundRect(ctx, barX + lo * barW, y + 8, Math.max(4, (hi - lo) * barW), 12, 6);
    // marcador
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.arc(barX + (axis.display / 100) * barW, y + 14, 8, 0, Math.PI * 2);
    ctx.fill();

    y += 48;
  }

  // leyenda derecha
  ctx.fillStyle = muted;
  ctx.font = `17px ${sans}`;
  const lines = [
    "Respuestas a propuestas políticas",
    "concretas, sin ver qué partido",
    "propone cada una.",
    "",
    `${result.answeredCount} preguntas respondidas`,
  ];
  let ly = 300;
  for (const line of lines) {
    ctx.fillText(line, 830, ly);
    ly += 26;
  }

  ctx.fillStyle = muted;
  ctx.font = `16px ${sans}`;
  ctx.fillText("¿Dónde estás políticamente? · resultado orientativo, no una etiqueta", 70, H - 40);

  const a = document.createElement("a");
  a.download = "mi-mapa-politico.png";
  a.href = canvas.toDataURL("image/png");
  a.click();
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fill();
}
