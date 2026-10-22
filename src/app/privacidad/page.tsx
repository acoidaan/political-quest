import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Privacidad por diseño: qué guardamos (casi nada) y dónde (tu dispositivo).",
};

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 leading-relaxed text-ink-2 [&_strong]:text-ink">
      <h1 className="font-display text-4xl text-ink">Privacidad</h1>
      <p className="mt-4 text-lg">
        Las opiniones políticas son datos especialmente sensibles. Esta
        aplicación está construida para <strong>no saber quién eres</strong>.
      </p>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">Lo que NO hacemos</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>No hay registro, ni nombre, ni correo, ni DNI, ni teléfono.</li>
        <li>No hay Google Analytics, Meta Pixel, TikTok Pixel ni ningún rastreador publicitario.</li>
        <li>No enviamos tus respuestas a ningún servidor.</li>
        <li>No hay cookies de seguimiento.</li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">Cómo funciona</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Tus respuestas y resultados se calculan{" "}
          <strong>íntegramente en tu dispositivo</strong> y se guardan solo en
          el almacenamiento local de tu navegador, bajo un identificador
          aleatorio sin relación con tu identidad.
        </li>
        <li>
          Borrar los datos del sitio en tu navegador elimina todo. No existe
          copia en ningún otro lugar.
        </li>
        <li>
          La tarjeta compartible se genera también en tu dispositivo y solo
          contiene tus puntuaciones por eje; compartirla es decisión tuya.
        </li>
      </ul>

      <h2 className="font-display text-2xl text-ink mt-10 mb-3">Estadísticas futuras</h2>
      <p>
        Si algún día ofrecemos estadísticas agregadas («cómo responden los
        participantes de esta web»), serán <strong>estrictamente opt-in</strong>:
        podrás hacer el test completo sin contribuir datos; se explicará
        exactamente qué se envía (respuestas item-level anónimas, sin
        identificador persistente); la analítica estará separada del perfil
        político; y solo se mostrarán agregados con muestra suficiente. Nunca
        presentaremos a los usuarios de esta web como «los españoles»: no son
        una muestra representativa.
      </p>
    </article>
  );
}
