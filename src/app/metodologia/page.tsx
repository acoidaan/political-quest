import type { Metadata } from "next";
import Link from "next/link";
import { AXES } from "@/data/axes";
import { USING_DEMO_DATA, activeQuestions } from "@/data/questions";
import { DemoBanner } from "@/components/ui/DemoBanner";

export const metadata: Metadata = {
  title: "Metodología",
  description:
    "Cómo se construyen las preguntas, cómo se puntúan los ejes y cómo se compara con partidos. Transparencia completa.",
};

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-display text-2xl mt-12 mb-3 scroll-mt-20">
      {children}
    </h2>
  );
}

export default function MetodologiaPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 leading-relaxed text-ink-2 [&_strong]:text-ink">
      <h1 className="font-display text-4xl text-ink">Metodología</h1>
      <p className="mt-4 text-lg">
        Esta aplicación existe para responder una pregunta:{" "}
        <strong>
          ¿qué posiciones políticas expresas cuando quitamos nombres, logos y
          siglas de la ecuación?
        </strong>{" "}
        Aquí está, completo, cómo funciona.
      </p>

      {USING_DEMO_DATA && (
        <div className="mt-6">
          <DemoBanner />
        </div>
      )}

      <H2 id="preguntas">1. De dónde salen las preguntas</H2>
      <p>
        Las afirmaciones del test no son frases ideológicas inventadas («el
        Estado debería intervenir más»), sino <strong>propuestas políticas
        concretas</strong> derivadas de programas electorales, iniciativas
        parlamentarias, votaciones y documentos oficiales. Orden de preferencia
        de fuentes: programa electoral oficial → Congreso de los Diputados →
        Senado → BOE → web y documentos oficiales del partido → declaraciones
        institucionales explícitas. No usamos Wikipedia ni artículos de prensa
        para fijar la posición de un partido; la prensa solo sirve para
        localizar la fuente primaria.
      </p>
      <p className="mt-3">
        Cada propuesta se <strong>reescribe en lenguaje neutral</strong>:
        eliminamos nombres de partidos y políticos, eslóganes, ataques y
        adjetivos propagandísticos, conservando fielmente la sustancia política
        (nunca la moderamos ni la exageramos). Ejemplo: «Derogaremos la nefasta
        Ley X impuesta por el Gobierno» se convierte en «Se debería derogar la
        Ley X». Y evitamos preguntas trampa sin coste («¿quieres mejor
        sanidad?»): cada afirmación incorpora su <strong>trade-off</strong>{" "}
        («…aunque fuera necesario subir determinados impuestos»).
      </p>
      <p className="mt-3">
        Cada pregunta incluye además una <strong>explicación en lenguaje
        cotidiano</strong> (el botón ⓘ del test) que define los términos, da
        contexto y describe qué implica estar a favor y en contra. Estas
        explicaciones siguen las mismas reglas de neutralidad que las
        preguntas: presentan las dos caras del trade-off con marcos simétricos
        y nunca insinúan qué partido propone la medida ni sugieren una
        respuesta.
      </p>

      <H2 id="ejes">2. Los siete ejes</H2>
      <p>
        Cada pregunta lleva pesos entre −1 y +1 en uno o varios de estos ejes
        (la mayoría toca uno principal y a veces otro secundario):
      </p>
      <ul className="mt-3 space-y-2">
        {AXES.map((axis) => (
          <li key={axis.id} className="border-l-2 border-line pl-3">
            <strong>{axis.label}</strong>: {axis.negativePole} (0) ↔{" "}
            {axis.positivePole} (100). {axis.description}
          </li>
        ))}
      </ul>
      <p className="mt-3">
        Los pesos se asignan con una rúbrica documentada (bandas 0.2 / 0.5 /
        0.8 según lo central que sea el eje para la propuesta), con doble
        clasificación independiente y revisión de discrepancias. Cada pregunta
        guarda una nota metodológica con el criterio aplicado, visible en{" "}
        <Link href="/fuentes" className="underline hover:text-accent">
          fuentes
        </Link>
        . Cuando haya suficientes respuestas anónimas (con consentimiento), la
        estructura de datos permite validar los pesos empíricamente con PCA,
        análisis factorial e IRT.
      </p>

      <H2 id="puntuacion">3. Cómo se puntúa</H2>
      <p>
        Tu respuesta (−3 a +3) se normaliza y se combina con los pesos: la
        puntuación de un eje es la <strong>media ponderada</strong> de tus
        respuestas, ponderada por |peso| × importancia editorial de la pregunta
        (1-3) × tu importancia personal declarada (×0.75 / ×1 / ×1.3 — acotada
        para que no domine). «No tengo suficiente información»{" "}
        <strong>no es un cero</strong>: excluye la pregunta del numerador y del
        denominador.
      </p>
      <p className="mt-3">
        <strong>Incertidumbre.</strong> Cada puntuación lleva un intervalo
        (~95%) calculado con el error estándar ponderado de tus contribuciones
        (tamaño muestral efectivo de Kish), con un suelo que depende del número
        de respuestas: responder 2 preguntas jamás produce una puntuación
        «segura». Las respuestas contradictorias en pares de preguntas
        relacionadas (algunas están formuladas en sentido inverso, también para
        detectar sesgo de aquiescencia) <strong>amplían el intervalo</strong>,
        nunca penalizan tu puntuación.
      </p>
      <p className="mt-3">
        <strong>Izquierda-derecha global.</strong> Es una combinación
        documentada de ejes de contenido: economía 40%, sociedad 25%, autoridad
        15%, inmigración 10%, medioambiente 10%. Los ejes territorial y europeo
        quedan fuera deliberadamente: en España hay descentralistas y
        centralistas en ambos lados del espectro, e incluirlos contaminaría la
        medida. Se presenta como descripción de tus respuestas con su
        incertidumbre, nunca como identidad.
      </p>

      <H2 id="seleccion">4. Cómo se eligen las preguntas de cada test</H2>
      <p>
        De la base ({activeQuestions.length} propuestas actualmente), un
        algoritmo determinista selecciona 25/75/150 maximizando cobertura de los
        siete ejes, diversidad temática, relevancia y capacidad discriminativa
        (cuánto separa la pregunta a los partidos entre sí), y penalizando
        redundancia: si dos afirmaciones miden casi lo mismo, no se muestran
        ambas. El orden alterna categorías (nunca 8 preguntas seguidas de
        inmigración) y alterna la polaridad de formulación. Durante el test no
        se muestra ninguna puntuación provisional ni pista de procedencia, para
        que no puedas (ni sin querer) adaptar tus respuestas.
      </p>

      <H2 id="partidos">5. La comparación con partidos es otra capa</H2>
      <p>
        Regla estructural del proyecto:{" "}
        <strong>
          qué significa ideológicamente una propuesta y qué partidos la apoyan
          son clasificaciones independientes
        </strong>
        . Tu resultado izquierda-derecha se calcula solo con el contenido de las
        propuestas; jamás con «coincides con el partido X, luego eres Y». Eso
        evita el razonamiento circular.
      </p>
      <p className="mt-3">
        Si tras ver tus resultados pulsas «Comparar con programas políticos»,
        calculamos para cada partido la <strong>coincidencia media
        ponderada</strong> sobre las cuestiones comparables: acuerdo por
        pregunta = 1 − |tu posición − posición del partido| / 2, ponderado por
        importancia y confianza de la fuente. Elegimos esta métrica frente a la
        similitud coseno (ignora el desplazamiento absoluto: un tibio y un
        extremo del mismo signo parecerían idénticos) y frente a la distancia
        euclídea global (dominada por los ejes con más preguntas); además es
        directamente interpretable y agregable por categoría, que es lo que
        permite explicarte <em>por qué</em> coincides o difieres.
      </p>
      <p className="mt-3">
        Solo cuentan las preguntas donde el partido tiene posición documentada y
        clara. <strong>Un partido sin posición en una pregunta no queda
        penalizado</strong>; por eso mostramos siempre «X de Y cuestiones
        comparables» junto al porcentaje, y un margen de incertidumbre.
        Estados posibles de una posición: desde «muy a favor» hasta «muy en
        contra», pasando por apoyos y oposiciones condicionales, «sin posición
        clara» y «evidencia insuficiente» (estos dos últimos excluyen la
        pregunta de la comparación).
      </p>

      <H2 id="temporalidad">6. Las posiciones caducan</H2>
      <p>
        Cada posición lleva fecha de fuente y ventana de validez
        (validFrom/validUntil). Las posiciones actuales corresponden
        principalmente al ciclo electoral 2023-2026. Cuando un partido cambia de
        posición, se versiona: nunca se sobrescribe la historia en silencio.
      </p>

      <H2 id="sesgo">7. Control de sesgo</H2>
      <p>
        Un informe automático de balance comprueba: número de propuestas con
        posición por partido, distribución de polaridad de formulación,
        cobertura de categorías y ejes, balance de polo de formulación por eje,
        y capacidad discriminativa. El objetivo es que ningún partido ni polo
        domine artificialmente el cuestionario. El informe se ejecuta sobre cada
        versión del dataset y sus avisos bloquean la publicación hasta
        resolverse.
      </p>

      <H2 id="estado">8. Estado actual de los datos</H2>
      <p>
        {USING_DEMO_DATA ? (
          <>
            Esta versión funciona con un <strong>dataset de demostración</strong>:
            las preguntas siguen la metodología descrita, pero las posiciones de
            partidos son provisionales y <strong>no están verificadas</strong>{" "}
            con fuentes primarias. Están marcadas así en la base de datos
            (needsVerification) y ninguna pasará a producción sin fuente
            primaria fechada y verificada por un humano. La regla es dura: si
            una posición no puede demostrarse con una fuente fiable, se marca
            «evidencia insuficiente» y no se usa para calcular similitud.
          </>
        ) : (
          <>
            Esta versión funciona con el <strong>dataset verificado</strong>. El
            corpus actual lo forman los cuatro programas electorales oficiales
            de las elecciones generales del 23 de julio de 2023 (PP, PSOE, VOX
            y Sumar), descargados de las webs oficiales de los partidos (en
            tres casos a través de capturas de Wayback Machine de la URL
            oficial, por bloqueos anti-robots o disponibilidad), más{" "}
            <strong>votaciones del Congreso de los Diputados</strong> (registros
            oficiales de votaciones y Diario de Sesiones: ley de amnistía
            30/05/2024, Ley 4/2023 trans-LGTBI 22/12/2022, RDL 7/2018 de acceso
            universal al SNS 06/09/2018) y <strong>documentos del BOE</strong>{" "}
            (STC 169/2021 sobre la prisión permanente revisable). Cada posición
            cita documento, página o registro de la votación y un fragmento
            literal, con fecha de verificación. Las posiciones tomadas de actos
            anteriores al ciclo 2023-2026 lo indican expresamente en su
            explicación. Cuando un programa no aborda una propuesta, se
            registra explícitamente «evidencia insuficiente» y esa pregunta{" "}
            <strong>no puntúa</strong> en la comparación con ese partido: por
            eso verás «X de Y cuestiones comparables». Las posiciones derivadas
            (p. ej., la inversa de una derogación) se marcan con explicación y
            confianza reducida. Posiciones correspondientes principalmente al
            ciclo electoral 2023-2026; votaciones parlamentarias y documentos
            posteriores se incorporarán versionando, nunca sobrescribiendo.
          </>
        )}
      </p>

      <H2 id="limites">9. Límites honestos</H2>
      <ul className="mt-2 space-y-1.5 list-disc pl-5">
        <li>Este resultado describe similitud entre respuestas, no tu identidad política.</li>
        <li>Los ejes políticos son simplificaciones útiles, no verdades.</li>
        <li>Coincidencia programática no significa intención de voto.</li>
        <li>Los partidos cambian de posición; las fuentes están fechadas.</li>
        <li>
          Quienes usan esta web no son una muestra representativa de España;
          cualquier estadística agregada futura dirá «entre los participantes de
          esta web», nunca «los españoles piensan».
        </li>
      </ul>

      <p className="mt-10 text-sm">
        ¿Dudas sobre una pregunta concreta? Cada propuesta es auditable en{" "}
        <Link href="/fuentes" className="underline hover:text-accent">
          /fuentes
        </Link>
        .
      </p>
    </article>
  );
}
