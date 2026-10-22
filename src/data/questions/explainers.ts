/**
 * Explicaciones cotidianas de cada pregunta (botón ⓘ del test).
 *
 * Reglas editoriales (las mismas que para los statements):
 * - Lenguaje llano: definir términos, dar contexto práctico.
 * - Neutralidad estricta: explicar qué implica estar a favor Y en contra,
 *   con marcos simétricos; jamás inclinar ni insinuar qué partido lo propone.
 * - Datos de contexto solo cuando son seguros y verificables; ante la duda,
 *   se explica el concepto sin afirmar el estado actual de la ley.
 *
 * El índice del dataset valida que TODA pregunta demo tenga explicación:
 * añadir una pregunta sin su entrada aquí rompe el build.
 */
export const DEMO_EXPLAINERS: Record<string, string> = {
  // ------------------------------------------------------------ economía
  eco_001:
    "Servicios básicos como la luz o las telecomunicaciones los prestan hoy sobre todo empresas privadas. La cuestión es si el Estado debería ser dueño, total o parcialmente, de empresas en esos sectores para influir en precios y decisiones estratégicas. Estar de acuerdo implica más presencia empresarial pública; estar en desacuerdo, dejar esos sectores en manos privadas y de la competencia.",
  eco_002:
    "Las cotizaciones sociales son lo que las empresas pagan a la Seguridad Social por cada trabajador; con ellas se financian pensiones, paro o bajas. Bajarlas hace más barato contratar, pero mete menos dinero en la caja común. De acuerdo = abaratar la contratación aunque entren menos ingresos; en desacuerdo = proteger esos ingresos aunque contratar cueste más.",
  eco_003:
    "Cuando bancos y grandes energéticas ganan mucho más de lo habitual (por ejemplo con subidas de tipos de interés o del precio de la luz), se debate si deben pagar un impuesto extra sobre esas ganancias extraordinarias. A favor: que aporten más cuando ganan inusualmente. En contra: penaliza a sectores concretos y el coste puede acabar trasladándose al cliente.",
  eco_004:
    "Propone vender las participaciones del Estado en empresas que operan en mercados donde ya hay suficiente oferta privada, ingresando dinero público y dejando el negocio al sector privado. En contra: se pierde influencia pública y los dividendos futuros de esas empresas.",
  imp_001:
    "Se trata de subir impuestos solo a quienes más ganan. Lo recaudado financiaría servicios públicos, pero algunos afectados podrían mudar su residencia fiscal o invertir menos. De acuerdo = más progresividad asumiendo ese riesgo; en desacuerdo = evitar ese riesgo aunque las rentas altas aporten menos.",
  imp_002:
    "El IRPF es el impuesto que pagas por tu sueldo o tus ingresos. Bajarlo a todo el mundo deja más dinero en el bolsillo cada mes, pero el Estado recauda menos y tiene que gastar menos (o endeudarse) en cosas como sanidad, educación o pensiones. La pregunta es si aceptas ese intercambio.",
  imp_003:
    "El impuesto de sucesiones se paga al recibir una herencia, y hoy varía mucho según la comunidad autónoma. Suprimirlo o dejarlo simbólico alivia a quien hereda (especialmente patrimonios grandes); mantenerlo aporta recaudación y, según sus defensores, corrige ventajas de nacimiento.",
  imp_004:
    "Es un impuesto estatal anual para patrimonios muy grandes (varios millones de euros), que se solapa con el impuesto de patrimonio que gestionan (y a veces bonifican) las comunidades autónomas. A favor: que las mayores fortunas aporten un mínimo en toda España. En contra: duplica impuestos, desincentiva el ahorro y pisa la autonomía fiscal de las comunidades.",
  bie_001:
    "Existe una prestación estatal para hogares con muy pocos ingresos (el ingreso mínimo). La propuesta es ampliarla: que llegue a más gente o con cuantías mayores, a cambio de más gasto público todos los años. De acuerdo = ampliar la red de protección; en desacuerdo = contener ese gasto o priorizar otras vías, como el empleo.",
  bie_002:
    "La cuestión es si cobrar ciertas ayudas debería exigir contrapartidas más estrictas: demostrar búsqueda de empleo, aceptar cursos de formación, etc. A favor: incentiva volver a trabajar y evita abusos. En contra: añade burocracia y puede dejar fuera justo a quien más lo necesita.",
  pen_001:
    "Revalorizar por IPC significa que las pensiones suben automáticamente lo mismo que suben los precios, por ley. Eso garantiza que los pensionistas no pierdan poder adquisitivo, pero en años de inflación alta cuesta mucho dinero, que sale de las cotizaciones e impuestos de quienes están trabajando.",
  pen_002:
    "Además de la pensión pública, cada cual puede ahorrar por su cuenta para la jubilación (planes de pensiones). La pregunta es si el Estado debe premiar fiscalmente ese ahorro privado, es decir, pagar menos impuestos por él. A favor: fomenta la previsión y complementa el sistema. En contra: beneficia sobre todo a quien puede permitirse ahorrar y resta recaudación.",
  tra_001:
    "Cuando un juez declara un despido improcedente (sin causa válida), la empresa paga una indemnización al trabajador. Subirla protege más a quien ya tiene empleo, pero puede hacer que las empresas se lo piensen más antes de ofrecer contratos indefinidos.",
  tra_002:
    "La propuesta es rebajar por ley el máximo de horas de trabajo semanales (por ejemplo a 37,5) cobrando lo mismo: trabajar menos por el mismo sueldo. Facilita conciliar y repartir empleo; para las empresas supone un coste mayor por hora trabajada, que puede trasladarse a precios o a menos contratación.",
  smi_001:
    "El salario mínimo (SMI) es lo mínimo que se puede pagar legalmente por una jornada completa. Subirlo por encima de lo que suben los precios mejora los sueldos más bajos; el riesgo que se debate es que, en sectores o zonas con márgenes pequeños, algunas empresas contraten menos.",
  viv_001:
    "En zonas donde el alquiler ha subido mucho más que los sueldos, la ley puede poner un tope a cuánto puede cobrar el propietario. Protege a los inquilinos actuales frente a subidas; los críticos señalan que puede reducir la oferta (propietarios que retiran pisos del alquiler).",
  viv_002:
    "Es la posición contraria a limitar los alquileres: que cada propietario pida el precio que considere, sin topes de la administración, y sea el mercado quien lo ajuste. A favor: respeta la propiedad y anima a poner más pisos en alquiler. En contra: en zonas con escasez deja el precio solo en manos de la demanda.",
  viv_003:
    "Se refiere a acelerar los procesos legales para recuperar una vivienda ocupada sin permiso: pasar de meses a pocos días. A favor: protege la propiedad y desincentiva la ocupación. Los matices aparecen con hogares vulnerables sin alternativa y con las garantías judiciales del proceso.",
  viv_004:
    "Cuando una administración tiene suelo disponible puede venderlo a promotoras privadas (ingreso inmediato, vivienda a precio de mercado) o reservarlo para construir vivienda pública de alquiler (un parque estable, pero pagando la construcción con dinero público). La pregunta es qué opción priorizar.",
  reg_001:
    "Abrir o ampliar un negocio exige licencias y permisos previos. La propuesta es sustituir parte de ese control previo por declaraciones responsables y comprobaciones posteriores. A favor: menos burocracia y más actividad económica. En contra: menos filtro antes de que algo funcione mal (seguridad, urbanismo, etc.).",
  emp_001:
    "Se trata de contratar de forma estable a más personal público (sanitarios, docentes, jueces, funcionarios) en lugar de cubrir huecos con temporales o no cubrirlos. Mejora la capacidad de los servicios públicos, pero es un gasto fijo que se paga cada año, haya crisis o no.",

  // ------------------------------------------------------------ sociedad
  san_001:
    "La sanidad pública se paga con impuestos. Esta pregunta no plantea si quieres buena sanidad (casi todo el mundo quiere), sino el intercambio completo: ¿aceptarías pagar algo más de impuestos a cambio de más medios — personal, equipamiento, menos listas de espera?",
  san_002:
    "Un concierto sanitario es un acuerdo por el que la sanidad pública paga a clínicas privadas para hacer operaciones o pruebas y así acortar las esperas. A favor: aprovecha la capacidad privada para aliviar al sistema. En contra: es dinero público que va a empresas privadas en lugar de reforzar la red pública.",
  san_003:
    "Propone incorporar más psicólogos y psiquiatras a la sanidad pública, donde las esperas para salud mental son largas y mucha gente acaba pagando consulta privada o quedándose sin atención. El matiz está en el coste: subir algún impuesto o quitar recursos de otra partida.",
  san_004:
    "Propone que quien paga un seguro médico privado pueda descontárselo en la declaración de la renta. A favor: quien usa la privada descarga a la pública, y se premia ese gasto. En contra: es una rebaja fiscal para quien puede pagarse un seguro, con menos recaudación para la sanidad de todos.",
  edu_001:
    "La escuela concertada son colegios de titularidad privada (muchos religiosos, no todos) financiados con dinero público, de modo que la plaza sale gratis o casi gratis. La cuestión es si mantener o ampliar esa financiación. A favor: garantiza que las familias elijan tipo de educación. En contra: el dinero público debería concentrarse en la red pública.",
  edu_002:
    "Se debate si la religión debe seguir siendo una asignatura con nota dentro del horario escolar de la escuela pública, o quedar fuera del horario evaluable. A favor de sacarla: la escuela pública debe ser neutral en materia religiosa. En contra: las familias tienen derecho a que sus hijos reciban formación religiosa en la escuela.",
  edu_003:
    "En comunidades con lengua propia, la escuela pública enseña principalmente en esa lengua (inmersión lingüística). La propuesta es que las familias puedan elegir el castellano como lengua principal de escolarización. A favor: derecho a estudiar en castellano en cualquier parte de España. En contra: la inmersión protege la lengua propia y evita separar alumnos.",
  edu_004:
    "El llamado «pin parental» permite a los padres autorizar previamente que sus hijos asistan a charlas o talleres escolares complementarios sobre temas morales o afectivo-sexuales. A favor: los padres deciden sobre la educación moral de sus hijos. En contra: supone vetar contenidos aprobados por el centro y puede limitar el acceso de los menores a información.",
  uni_001:
    "Las tasas son lo que se paga por matricularse en la universidad pública; las becas compensan según la renta familiar. Bajar tasas y ampliar becas facilita estudiar a quien tiene menos recursos, pero exige más financiación pública para las universidades.",
  igu_001:
    "Una auditoría salarial obliga a la empresa a comparar qué cobran hombres y mujeres en puestos equivalentes y a justificar o corregir las diferencias. La propuesta añade sanciones si no se cumple. A favor: hace visible y corrige la brecha salarial. En contra: más carga burocrática y sancionadora sobre las empresas.",
  gen_001:
    "La ley española da un tratamiento penal específico a la violencia del hombre sobre su pareja o expareja mujer (violencia de género), con juzgados especializados y penas particulares, distinto del de la violencia doméstica general (violencia dentro de la familia, en cualquier dirección). La pregunta es si mantener esa distinción o unificar ambos tratamientos.",
  gen_002:
    "Se refiere a la autodeterminación de género: poder cambiar el sexo que figura en el DNI y el Registro Civil con la sola declaración de la persona, sin informes médicos ni autorización judicial. A favor: la identidad de cada cual no debe requerir tutela externa. En contra: un cambio con efectos jurídicos debería exigir alguna verificación o requisitos.",
  lgb_001:
    "El matrimonio entre personas del mismo sexo es legal en España desde 2005, con los mismos derechos, incluida la adopción. La pregunta mide si crees que ese marco debe seguir plenamente garantizado tal como está, o si aceptarías modificarlo o recortarlo.",
  lgb_002:
    "Las llamadas «terapias de conversión» son prácticas que pretenden cambiar la orientación sexual o la identidad de género de una persona. La propuesta es prohibirlas por ley y sancionar a quien las ofrezca. A favor: protege frente a prácticas consideradas dañinas. En contra: dudas sobre prohibir prácticas a las que alguien acude voluntariamente o sobre el alcance exacto de la prohibición.",
  fam_001:
    "Se trata de dar dinero directo a las familias por cada hijo a cargo (una ayuda mensual o anual), como existe en varios países europeos. Facilita la crianza y puede ayudar a la natalidad; el debate está en su coste público permanente y en si debería ser para todas las familias o solo según renta.",
  abo_001:
    "En España el aborto es legal a petición de la mujer dentro de las primeras semanas de embarazo y puede realizarse en la sanidad pública. La pregunta mide si crees que ese acceso debe seguir garantizado como derecho dentro de la red pública, o no.",
  abo_002:
    "La cuestión es si las jóvenes de 16 y 17 años deberían necesitar el permiso de sus padres o tutores para interrumpir un embarazo, o poder decidirlo por sí mismas. A favor del permiso: una decisión así de una menor debería contar con sus padres. En contra: puede poner en riesgo a jóvenes que no pueden contárselo a su familia.",
  eut_001:
    "La eutanasia — la ayuda médica a morir para personas con enfermedades graves e incurables que la piden de forma libre y reiterada — es legal en España desde 2021 y se presta en la sanidad pública con varios controles. La pregunta es si debe seguir siendo así.",
  rel_001:
    "España mantiene acuerdos con la Santa Sede (de 1979) que dan a la Iglesia católica presencia en la escuela, ventajas fiscales y papel en actos oficiales. Revisarlos reduciría esa presencia institucional. A favor: un Estado más neutral en materia religiosa. En contra: los acuerdos y la tradición que reflejan tienen valor y arraigo social.",
  rel_002:
    "Se refiere a belenes en ayuntamientos, crucifijos en centros públicos o actos oficiales con ceremonia religiosa: ¿deben poder mantenerse como parte de la tradición, o retirarse en nombre de la neutralidad religiosa de las instituciones?",
  cul_001:
    "La tauromaquia recibe distintos apoyos públicos según el territorio (subvenciones, premios, escuelas taurinas, emisiones en medios públicos). La propuesta no es prohibirla, sino que no reciba dinero ni promoción pública. En contra: es un patrimonio cultural que merece apoyo como otras expresiones artísticas.",
  cul_002:
    "Va un paso más allá de no prohibir: propone que las administraciones promuevan activamente tradiciones como los toros o la caza — con financiación, escuelas y difusión — igual que se hace con otras expresiones culturales. En contra: el dinero público no debería fomentar actividades que implican sufrimiento animal.",
  mpu_001:
    "RTVE (Televisión Española y Radio Nacional) se financia con dinero público y cuesta cientos de millones al año. La cuestión es si mantener una radiotelevisión pública fuerte — informativos y contenidos sin depender de la publicidad ni de audiencias — o reducirla por su coste y su competencia con los medios privados.",

  // ------------------------------------------------- inmigración y libertades
  inm_001:
    "Regularizar es dar papeles (permiso de residencia y trabajo) a personas extranjeras que ya viven en España sin ellos, normalmente si demuestran arraigo: años aquí, trabajo, familia. A favor: ya forman parte de la sociedad y pasarían a cotizar. En contra: puede animar a más entradas irregulares y premiar a quien no siguió las vías legales.",
  inm_002:
    "Se refiere a poner condiciones más duras (ingresos, tiempo, requisitos) para conseguir o renovar los permisos de residencia y trabajo. A favor: más control sobre quién se establece. En contra: puede empujar a la irregularidad a personas ya asentadas que no logren renovar.",
  inm_003:
    "Hoy la expulsión de un extranjero que comete un delito depende de la gravedad y de lo que decida el juez. La propuesta es que la expulsión sea la norma general para quien esté en situación irregular y delinca, incluso en delitos de gravedad media. A favor: quien llega y delinque no debería quedarse. En contra: puede producir castigos desproporcionados según las circunstancias personales.",
  inm_004:
    "Cuando llegan muchos solicitantes de asilo a los países de entrada a Europa (España, Italia, Grecia), la UE debate repartirlos entre todos los Estados con cuotas obligatorias. Aceptarlas es apostar por la solidaridad europea y compartir la carga; rechazarlas, defender que cada país decida a quién acoge.",
  inm_005:
    "La cuestión es si una persona en situación irregular debe poder usar la sanidad pública igual que cualquier residente (médico de cabecera, especialistas, tarjeta sanitaria), o solo urgencias y casos especiales. A favor: la salud es un derecho básico y tratar a tiempo evita problemas mayores de salud pública. En contra: supone un coste y podría hacer más atractiva la inmigración irregular.",
  inm_006:
    "Ceuta y Melilla tienen las únicas fronteras terrestres entre Europa y África, con vallas y entradas irregulares periódicas. Reforzarlas significa más medios, tecnología y contención física para frenar los cruces. En contra: el coste humano y económico de blindar la frontera en lugar de priorizar vías legales ordenadas.",
  nac_001:
    "Para pedir la nacionalidad española se exige un periodo de residencia legal — como norma general largo, con plazos reducidos para algunos orígenes — además de otros requisitos. La propuesta es acortar esos plazos. A favor: acelera la integración plena de quien ya vive aquí. En contra: la nacionalidad debería reservar un vínculo largo y probado con el país.",
  seg_001:
    "Un reincidente es quien vuelve a delinquir tras haber sido ya condenado. La reincidencia ya agrava las penas; la propuesta es endurecerlas considerablemente más (por ejemplo, que muchos delitos leves repetidos acaben en penas serias). A favor: frenar la multirreincidencia que sufren comercios y barrios. En contra: llena las cárceles de perfiles marginales sin atacar las causas.",
  seg_002:
    "La prisión permanente revisable es la pena máxima en España desde 2015: prisión indefinida que un tribunal revisa pasados como mínimo 25 años, y de la que solo se sale acreditando reinserción. Se aplica a crímenes muy graves. La propuesta es mantenerla y extenderla a más delitos; sus críticos la consideran una cadena perpetua encubierta de dudosa constitucionalidad.",
  pol_001:
    "La ley de seguridad ciudadana de 2015 (llamada «ley mordaza» por sus críticos) sanciona, entre otras cosas, manifestaciones no comunicadas o el uso no autorizado de imágenes de policías. La propuesta es suavizar esas sanciones. A favor: protege el derecho a protestar y a informar. En contra: esas reglas protegen el trabajo policial y el orden público.",
  jus_001:
    "El CGPJ es el órgano que gobierna a los jueces: decide ascensos, destinos y sanciones. Sus vocales los eligen hoy las Cortes (Congreso y Senado). La propuesta es que a los vocales de origen judicial los elijan los propios jueces votando entre ellos. A favor: reduce la influencia de los partidos sobre la justicia. En contra: el gobierno de los jueces debe tener legitimidad parlamentaria, no ser un cuerpo que se autoelige.",
  jus_002:
    "Es la filosofía de fondo del sistema penal: ¿para qué sirve el castigo? Priorizar la reinserción significa más penas alternativas a la cárcel (trabajos comunitarios, libertad vigilada), formación y salidas graduales. Priorizar el endurecimiento significa penas más largas como disuasión y como respuesta a las víctimas.",
  pri_001:
    "El tercer grado es el régimen de semilibertad (salir a trabajar y dormir en el centro); los beneficios penitenciarios acortan o suavizan la condena por buena conducta o trabajo. La propuesta es restringirlos en delitos graves, de modo que se pase más tiempo efectivo en prisión. El debate: seguridad y ejemplaridad frente a reinserción gradual.",
  lib_001:
    "El código penal castiga hoy la ofensa a los sentimientos religiosos y las injurias graves a la Corona. La propuesta es despenalizarlas: que esas expresiones puedan ser de mal gusto, pero no un delito. A favor: la libertad de expresión ampara también lo ofensivo. En contra: ciertas instituciones y creencias merecen protección penal frente al escarnio.",
  prv_001:
    "El reconocimiento facial masivo consiste en cámaras que identifican automáticamente los rostros de la gente en calles o estaciones y los cotejan con bases de datos policiales. Ayudaría a localizar a delincuentes buscados, pero implica vigilar también a millones de personas inocentes, con riesgo de errores y de usos abusivos.",

  // ------------------------------------- territorio, Estado, exterior, energía
  ter_001:
    "Hoy las comunidades autónomas gestionan una parte de los impuestos, pero la mayoría los recauda el Estado y luego los reparte. La propuesta es darles más capacidad propia de recaudar y decidir sobre sus impuestos. A favor: más autogobierno y responsabilidad fiscal de cada territorio. En contra: más desigualdad entre comunidades ricas y pobres y menos caja común.",
  ter_002:
    "La educación o la sanidad las gestionan las comunidades autónomas desde hace décadas. La propuesta es devolver competencias como esas al Estado central. A favor: mismas condiciones y derechos en toda España. En contra: desmonta el Estado autonómico y aleja la gestión de cada territorio.",
  ter_003:
    "Las diputaciones son administraciones provinciales intermedias, y en España hay miles de municipios muy pequeños con pocos recursos. Fusionar o suprimir estructuras reduciría duplicidades y coste administrativo. En contra: alejaría los servicios y la representación del mundo rural.",
  cat_001:
    "Tras el proceso independentista catalán y sus condenas judiciales se han usado medidas de gracia — indultos en 2021 y una ley de amnistía en 2024 — con sus responsables. La pregunta es de principio: ¿son aceptables estas herramientas para desactivar un conflicto político? A favor: pacificar y pasar página. En contra: premian a quien vulneró la ley y erosionan la igualdad ante ella.",
  cat_002:
    "Un referéndum pactado sería una votación en Cataluña sobre su relación con España, acordada con el Estado (como el de Escocia en 2014). La Constitución atribuye la soberanía al conjunto de los españoles, así que exigiría reformarla o reinterpretarla. A favor: dejar votar resuelve democráticamente el conflicto. En contra: la decisión sobre el país corresponde a todos los españoles, no a una parte.",
  pv_001:
    "Por el concierto económico, el País Vasco y Navarra recaudan casi todos sus impuestos y pagan al Estado un «cupo» por los servicios comunes. Es un sistema histórico reconocido en la Constitución. Mantenerlo = respetar los derechos forales; cuestionarlo = considerarlo un privilegio de financiación que el resto de comunidades no tiene.",
  mon_001:
    "España es una monarquía parlamentaria: el Rey es jefe del Estado, con funciones sobre todo representativas. Pasar a una república significaría elegir al jefe del Estado, y someterlo a consulta exigiría una reforma constitucional compleja. La pregunta mide tu preferencia sobre el modelo, no tu opinión sobre personas concretas.",
  mon_002:
    "Es la posición contraria a abrir un proceso hacia la república: mantener la monarquía parlamentaria tal como la fija la Constitución, sin consultas ni reformas sobre la jefatura del Estado.",
  con_001:
    "La Constitución trata la vivienda o la protección de la salud como «principios rectores», no como derechos que puedas exigir directamente ante un juez (como sí ocurre con la educación o la libertad de expresión). «Blindarlos» significaría poder reclamarlos judicialmente, obligando a las administraciones a garantizarlos con recursos concretos.",
  ue_001:
    "Integración fiscal europea significa que la UE tenga impuestos propios y pueda emitir deuda conjunta — como se hizo puntualmente con los fondos de recuperación tras la pandemia — y decidir más gasto en común. A favor: una Europa más fuerte y solidaria ante crisis. En contra: se pierde control sobre el presupuesto propio y se pueden acabar pagando deudas de otros.",
  ue_002:
    "Es la dirección de fondo de la relación con la UE: ¿debería España recuperar poderes que hoy se ejercen desde las instituciones europeas (normas de mercado, comercio, moneda…)? A favor: soberanía nacional y decisiones más cercanas. En contra: a un país mediano le va mejor decidiendo en bloque con sus socios.",
  ue_003:
    "Hoy buena parte de la política migratoria (asilo, fronteras exteriores, visados) se decide a escala europea. La pregunta es si lo esencial de esa política debería decidirlo cada país por su cuenta, o seguir decidiéndose en común en la UE.",
  ue_004:
    "En política exterior la UE decide por unanimidad: cualquier país puede vetar sanciones o posiciones comunes. Pasar a decidir por mayoría haría a Europa más ágil y con más peso en el mundo, pero España podría verse obligada a asumir decisiones tomadas en contra de su voto.",
  ue_005:
    "Propone avanzar hacia estructuras militares europeas comunes — mandos, compras conjuntas, unidades compartidas; lo que se suele llamar «ejército europeo». A favor: Europa podría defenderse sola y gastar mejor. En contra: se pierde autonomía sobre las propias fuerzas armadas y puede duplicar o tensionar la OTAN.",
  ota_001:
    "La OTAN es la alianza militar occidental: si atacan a un miembro, los demás acuden en su defensa. España pertenece a ella desde 1982, lo que implica participar en misiones y asumir compromisos de gasto militar. La pregunta mide tu apoyo a esa pertenencia y a cumplir lo que conlleva.",
  def_001:
    "Los aliados de la OTAN han acordado acercar su gasto militar al entorno del 2% del PIB, lo que para España supone varios miles de millones más al año — dinero que no va a otras partidas. A favor: seguridad en un mundo más inestable y cumplir con los aliados. En contra: hay prioridades sociales más urgentes que el gasto militar.",
  def_002:
    "España es un exportador relevante de armamento. La propuesta es vetar esas ventas cuando el país comprador esté en guerra o viole derechos humanos, aunque la industria de defensa española (astilleros, munición, aeronáutica) pierda contratos y empleo. Es el choque entre coherencia ética exterior e interés económico.",
  ext_001:
    "El Sáhara Occidental fue colonia española hasta 1975 y su estatus sigue pendiente ante la ONU: Marruecos lo administra de hecho y el Frente Polisario reclama un referéndum de autodeterminación. Apoyarlo activamente significaría alinearse con esa vía aunque se tense la relación con Marruecos, socio clave en migración y comercio.",
  ene_001:
    "La propuesta es que exista una empresa eléctrica pública — creada de cero o comprando participaciones — que compita vendiendo electricidad, con la idea de presionar los precios a la baja y dar al Estado herramientas en un mercado esencial. En contra: el mercado ya está regulado y una empresa pública puede resultar ineficiente y cara para el contribuyente.",
  ene_002:
    "España tiene recursos energéticos y minerales poco o nada explotados (gas, litio, tierras raras…) cuya extracción está limitada por normativa ambiental. Facilitarla reduciría la dependencia del exterior y crearía empleo local, a cambio de un impacto ambiental real en las zonas de extracción.",
  nuc_001:
    "España tiene centrales nucleares en funcionamiento con un calendario pactado de cierre progresivo. Prolongar su vida — y plantear nuevas — daría electricidad estable y sin emisiones de CO2, a cambio de gestionar residuos radiactivos durante siglos y asumir los costes y riesgos de la tecnología.",
  nuc_002:
    "Es la posición contraria a prolongar la energía nuclear: cumplir el calendario de cierre acordado y sustituir esas centrales por renovables, respaldo y almacenamiento. A favor: los residuos y riesgos no compensan. En contra: se renuncia a una fuente de electricidad firme y baja en carbono.",
  cli_001:
    "España tiene objetivos legales de recorte de emisiones (propios y europeos). Endurecerlos significa acelerar la transición — abandonar antes los combustibles fósiles — con beneficios a largo plazo, pero con costes visibles a corto: energía, transporte o ciertos productos algo más caros mientras dura el cambio.",
  cli_002:
    "Las zonas de bajas emisiones (ZBE) restringen la circulación de los coches más contaminantes por el centro de las ciudades; la ley obliga a las ciudades grandes a tenerlas. A favor: aire más limpio y menos ruido. En contra: perjudica a quien no puede pagarse un coche más nuevo y complica los desplazamientos diarios.",
  agr_001:
    "La política agraria y las normas ambientales imponen a agricultores y ganaderos requisitos sobre suelos, fitosanitarios o agua. Flexibilizarlos abarataría costes y papeleo al campo, a cambio de rebajar la ambición ecológica de esas normas. Es el equilibrio entre renta agraria hoy y sostenibilidad del propio campo mañana.",
  med_001:
    "En zonas como el entorno de Doñana hay más superficie de regadío que agua disponible, y los acuíferos descienden. Restringir regadíos protege el humedal y el agua a largo plazo, pero recorta la actividad de agricultores que hoy viven de esas explotaciones.",
  tpt_001:
    "En los últimos años se han subvencionado con fuerza los abonos de tren y transporte urbano (gratuitos o muy baratos). Mantenerlo cuesta dinero público cada año; a cambio, abarata la vida de quien lo usa a diario y anima a dejar el coche, con beneficios de tráfico y contaminación.",
  fis_001:
    "Subir los impuestos a gasolina, diésel o gas encarece contaminar y recauda para la transición energética, pero golpea más a quien depende del coche o de calefacciones antiguas — por eso la propuesta incluye compensar a las rentas bajas. La pregunta mide si aceptas esa herramienta con esa compensación.",
  dig_001:
    "Con la digitalización, muchos trámites de bancos y administraciones se hacen ya casi solo por internet, y hay personas — mayores, zonas rurales, rentas bajas — que se quedan atrás. La propuesta obliga a mantener ventanilla y teléfono con atención humana completa, aunque exija más personal y coste.",
  ia_001:
    "Las administraciones usan cada vez más algoritmos para decidir o priorizar: ayudas, inspecciones, valoraciones de riesgo. Auditarlos públicamente significa que expertos independientes puedan examinar cómo deciden y detectar errores o sesgos — igual que se auditan las cuentas públicas. En contra: coste y posible freno a la adopción de estas herramientas.",
  ia_002:
    "Europa ha aprobado una regulación estricta de la inteligencia artificial (usos prohibidos, obligaciones según el riesgo). Aplicarla con rigor da garantías a los ciudadanos frente a abusos; las empresas advierten de que puede frenar la adopción de la tecnología frente a Estados Unidos o China. La pregunta mide tu equilibrio entre garantías e innovación.",
};
