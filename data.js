window.INNOHUB_DATA = {
  project: {
    title: "Biblia de formatos audiovisuales para innovacion en divulgacion cientifica",
    subtitle: "Repositorio web operativo del proyecto innoHUB UNIR",
    summary:
      "Esta version digital traduce la investigacion de innoHUB a un sistema accionable para disenar, prototipar y validar formatos de comunicacion cientifica. Combina criterio academico y viabilidad de produccion.",
    goals: [
      "Sistematizar formatos con una ficha estandar: objetivo, tecnica, coste-tiempo, riesgos y medicion.",
      "Facilitar decisiones editoriales segun impacto buscado: conocimiento, confianza, habilidades o accion.",
      "Servir como memoria metodologica abierta y base para transferir el servicio a terceros."
    ],
    scope: [
      "Ambito: universidades, medios, instituciones culturales, EdTech y equipos de divulgacion.",
      "Fase: repositorio inicial basado en Proyecto innoHUB UNIR.docx + Biblia formatos audiovisuales.pdf."
    ],
    status:
      "Version 0.1 web. Contenido inicial normalizado desde la investigacion. Requiere validacion editorial continua."
  },
  pillars: [
    "Aprendizaje multimedia: reducir carga cognitiva, senalizar lo relevante y coordinar audio-imagen.",
    "Narrativa y persuasion: usar storytelling para conectar sin sacrificar rigor cientifico.",
    "Evaluacion con teoria del cambio: medir resultados mas alla de views (comprension, confianza, accion)."
  ],
  taxonomy: [
    "Linealidad: lineal vs no lineal (ramificado, explorable).",
    "Interactividad: nula, ligera o fuerte.",
    "Inmersion: pantalla plana, 360, VR HMD, AR/WebXR.",
    "Serialidad: pieza unica, serie o universo transmedia.",
    "IA generativa: asistida, hibrida o generada.",
    "Distribucion: redes, web propia, LMS, OTT, apps y museos."
  ],
  decisionTree: [
    {
      objective: "Conocimiento y comprension",
      recommendation:
        "Short vertical + recursos, video interactivo con quizzes, explorable simulations, mapa data-storytelling."
    },
    {
      objective: "Actitudes y confianza",
      recommendation:
        "Directo Science Live, videopodcast con clipping, docuserie/OTT, narrativas de personaje."
    },
    {
      objective: "Habilidades y transferencia",
      recommendation:
        "Video ramificado, simulaciones interactivas, VR con HMD para practica guiada."
    },
    {
      objective: "Accion y participacion",
      recommendation:
        "Universo transmedia, social AR con UGC, retos comunitarios con mapa interactivo."
    }
  ],
  governance: [
    "Transparencia: disclosure de contenido alterado o sintetico y etiquetado coherente en plataforma.",
    "Cumplimiento UE: alinear flujos de IA con AI Act, privacidad y proteccion de datos.",
    "Gestion de riesgos: controlar sesgos, alucinaciones y sobre-simplificacion en formatos virales.",
    "Proveniencia y trazabilidad: usar estandares tipo C2PA/Content Credentials cuando aplique.",
    "Definition of Done por ficha: rigor cientifico, claridad narrativa, accesibilidad y medicion instrumentada."
  ],
  templateFields: [
    "Definicion breve del formato (1-2 lineas).",
    "Objetivo principal de divulgacion.",
    "Duracion tipica y extremos.",
    "Mecanicas de interaccion.",
    "Requisitos tecnicos y de distribucion.",
    "Pipeline: pre, produccion, post, publicacion, mantenimiento.",
    "Equipo minimo (roles y perfiles).",
    "Coste y tiempo orientativo.",
    "Metricas nativas de plataforma.",
    "Metricas de impacto cientifico (comprension, confianza, accion).",
    "Riesgos cognitivos, reputacionales y legales.",
    "Checklist de calidad cientifica.",
    "Ejemplos reales.",
    "Referencias y evidencia de soporte."
  ],
  formats: [
    {
      id: "short-vertical",
      name: "Pildora vertical short-form science",
      category: "social",
      type: "Video corto",
      audience: "General y joven",
      objective: "Alfabetizacion cientifica rapida y puerta de entrada a contenidos largos.",
      definition:
        "Video vertical breve para explicar conceptos, desmontar mitos o lanzar mini historias cientificas en scroll.",
      technical: [
        "Formato 9:16 full-screen.",
        "Ritmo rapido y subtitulos de facto obligatorios.",
        "Publicacion multicanal: TikTok, Reels, Shorts."
      ],
      production:
        "Equipo minimo: 1 creador/a + revision experta puntual. Herramientas: movil, micro de solapa y editor rapido.",
      costLabel: "0-2k EUR por pieza",
      timeLabel: "Horas a 2 dias",
      interactivityLevel: 1,
      scalabilityLevel: 5,
      costIndex: 2,
      timeIndex: 2,
      pros: [
        "Gran alcance y descubrimiento.",
        "Muy util para desmentidos rapidos.",
        "Permite iterar guion y estilo a alta velocidad."
      ],
      risks: [
        "Simplificacion excesiva.",
        "Mayor exposicion a desinformacion si no hay framing claro."
      ],
      metrics: [
        "Retencion y completion.",
        "Tiempo medio visto y replays.",
        "Compartidos/guardados y CTR hacia pieza larga."
      ],
      examples: ["Feed STEM en TikTok Europa", "Programa #LearnOnTikTok"],
      references: [
        "Evidencia de microlearning y video corto en aprendizaje/retencion.",
        "Analisis comparados de engagement cientifico por plataforma."
      ]
    },
    {
      id: "science-live",
      name: "Directo interactivo Science Live",
      category: "social",
      type: "Live streaming",
      audience: "General y comunidad",
      objective: "Aumentar cercania, confianza y resolucion de dudas en tiempo real.",
      definition:
        "Emision en directo con chat, preguntas, encuestas e invitados para AMAs, demos o eventos cientificos.",
      technical: [
        "Stack tipico: OBS + plataforma live.",
        "Necesidad de codificacion estable y moderacion activa.",
        "Reciclable en clips verticales post-evento."
      ],
      production:
        "Equipo minimo: host cientifico + moderacion + tecnico (puede comprimirse en setups pequenos).",
      costLabel: "0-6k EUR por evento",
      timeLabel: "1-5 dias + directo",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 3,
      timeIndex: 3,
      pros: [
        "Humaniza la ciencia.",
        "Resuelve dudas al instante.",
        "Fuerte construccion de comunidad."
      ],
      risks: ["Riesgo reputacional por errores en vivo.", "Dependencia de moderacion para controlar ruido y trolls."],
      metrics: [
        "Concurrencia media y pico.",
        "Watch time total.",
        "Mensajes/minuto y ratio de chatters.",
        "Retencion hasta tramo Q&A."
      ],
      examples: ["NASA en Twitch", "CdeCiencia en Twitch"],
      references: ["Revisiones sobre Twitch para comunicacion cientifica y educativa."]
    },
    {
      id: "videopodcast",
      name: "Videopodcast + clip factory",
      category: "hibrido",
      type: "Conversacional multiformato",
      audience: "General y profesional",
      objective: "Combinar profundidad y eficiencia de reutilizacion en un solo flujo.",
      definition:
        "Formato grabado (o falso directo) que sale como episodio largo y se atomiza en clips para redes.",
      technical: [
        "Grabacion multicamara o camara unica + apoyo.",
        "Version audio para feed podcast.",
        "Derivacion sistematica de clips verticales."
      ],
      production:
        "Equipo minimo: host + invitado/a + editor/a. Requiere estructura de guion para evitar dispersion.",
      costLabel: "0.3-4k EUR por episodio",
      timeLabel: "1-3 dias",
      interactivityLevel: 1,
      scalabilityLevel: 4,
      costIndex: 3,
      timeIndex: 3,
      pros: [
        "Construye autoridad de marca cientifica.",
        "Muy buen ratio contenido/tiempo.",
        "Compatible con OTT, web y social."
      ],
      risks: ["Conversacion sin foco narrativo.", "Clips sin contexto pueden perder rigor."],
      metrics: [
        "Retencion por minuto en episodio largo.",
        "Completitud en audio.",
        "Crecimiento de suscriptores y conversiones."
      ],
      examples: ["Modelo de universo Hope (podcast + mapa + documental)"],
      references: ["Principios de narrativa multimedia y evaluacion de contenido cientifico en social."]
    },
    {
      id: "transmedia-universe",
      name: "Universo transmedia",
      category: "transmedia",
      type: "Multiplataforma coordinada",
      audience: "General y subpublicos",
      objective: "Escalar alcance sin perder profundidad mediante multiples puntos de entrada.",
      definition:
        "Diseno coordinado de una historia cientifica en serie, mapa, web, podcast, redes y activaciones.",
      technical: [
        "Arquitectura hub + satelites.",
        "Gobernanza editorial fuerte y control de versiones.",
        "Dependencia alta de coordinacion y analitica."
      ],
      production:
        "Equipo minimo: direccion editorial, productor/a transmedia, community, analitica y soporte tecnico.",
      costLabel: "25k-250k+ EUR (MVP a escala)",
      timeLabel: "6-20 semanas + mantenimiento",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 8,
      timeIndex: 7,
      pros: [
        "Multiplica puntos de contacto con audiencia.",
        "Favorece repeticion contextual del aprendizaje.",
        "Permite capas de participacion progresiva."
      ],
      risks: ["Complejidad operativa elevada.", "Incoherencia si no hay direccion unificada."],
      metrics: [
        "Alcance deduplicado total.",
        "Recorridos cross-plataforma.",
        "Participacion UGC y calidad de comentarios.",
        "Outcomes pre/post."
      ],
      examples: ["Universo Atapuerca", "Universo Hope"],
      references: ["Literatura sobre transmedia en comunicacion cientifica."]
    },
    {
      id: "webdoc",
      name: "Webdoc / documental interactivo",
      category: "interactivo",
      type: "Web interactiva no lineal",
      audience: "Publico motivado",
      objective: "Explicar sistemas complejos por capas y rutas de exploracion.",
      definition:
        "Obra documental no lineal o semi-lineal donde la persona usuaria navega modulos, extras y decisiones.",
      technical: [
        "Front-end web + UX + video por capas.",
        "Analitica de navegacion por rutas.",
        "Hosting y mantenimiento continuado."
      ],
      production:
        "Equipo minimo: direccion, guion, realizacion, UX/UI, front-end, QA y analitica.",
      costLabel: "15k-200k EUR",
      timeLabel: "8-24 semanas",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 7,
      timeIndex: 8,
      pros: [
        "Muy fuerte para causalidad y contexto.",
        "Permite profundidad a demanda."
      ],
      risks: ["Mayor friccion de entrada que video simple.", "Coste tecnico y QA alto."],
      metrics: [
        "Tiempo en experiencia.",
        "Rutas mas frecuentes.",
        "Finalizacion de modulos.",
        "Retorno de usuarios."
      ],
      examples: ["Sin huella (Lab RTVE)"],
      references: ["Investigacion sobre webdoc participativo y test de usuario."]
    },
    {
      id: "data-storytelling",
      name: "Mapa interactivo y data-storytelling",
      category: "interactivo",
      type: "Visualizacion guiada por datos",
      audience: "General y decisores",
      objective: "Anclar evidencia y contexto sin saturar el relato principal.",
      definition:
        "Historia basada en mapas, series y comparadores con navegacion por scroll, fichas y filtros.",
      technical: [
        "Visualizacion web y cartografia.",
        "Base de datos y accesibilidad.",
        "Instrumentacion de eventos analiticos."
      ],
      production:
        "Equipo minimo: periodista/cientifico de datos, diseno info, front-end y edicion cientifica.",
      costLabel: "10k-120k EUR",
      timeLabel: "4-16 semanas",
      interactivityLevel: 3,
      scalabilityLevel: 4,
      costIndex: 5,
      timeIndex: 6,
      pros: [
        "Excelente para problemas sistemicos (clima, salud, energia).",
        "Favorece transparencia metodologica."
      ],
      risks: ["Dependencia de actualizacion de datos y APIs.", "Coste superior al video lineal."],
      metrics: [
        "Profundidad de scroll.",
        "Clicks por capa y rutas.",
        "Conversion a recursos o accion local."
      ],
      examples: ["Mapa interactivo del universo Hope"],
      references: ["Principios de aprendizaje multimedia y comunicacion cientifica basada en evidencia."]
    },
    {
      id: "interactive-video",
      name: "Video interactivo con quizzes (H5P/LMS)",
      category: "interactivo",
      type: "Video lineal con capas activas",
      audience: "Estudiantes y publico general",
      objective: "Mejorar comprension comprobada y evaluacion formativa.",
      definition:
        "Video lineal con preguntas, hotspots, enlaces y microtareas para active learning.",
      technical: [
        "H5P y herramientas equivalentes en navegador.",
        "Integrable en LMS, web propia y landing de curso."
      ],
      production:
        "Equipo minimo: guion instruccional, edicion, diseno de preguntas e integracion LMS.",
      costLabel: "0.5-8k EUR",
      timeLabel: "1-10 dias",
      interactivityLevel: 3,
      scalabilityLevel: 5,
      costIndex: 4,
      timeIndex: 3,
      pros: [
        "Alinea video y aprendizaje activo.",
        "Genera datos granulares de comprension."
      ],
      risks: ["Interaccion limitada en redes abiertas.", "Puede sentirse escolar si no se disena bien."],
      metrics: [
        "Tasa de respuesta y acierto por pregunta.",
        "Abandono por minuto.",
        "Reintentos y mejora post-test."
      ],
      examples: ["H5P Interactive Video"],
      references: ["Estudios sobre recursos H5P y outcomes de aprendizaje."]
    },
    {
      id: "branching-video",
      name: "Video ramificado (branching)",
      category: "interactivo",
      type: "Simulacion de decision audiovisual",
      audience: "Formacion y publico general",
      objective: "Entrenar razonamiento y transferencia en escenarios con consecuencias.",
      definition:
        "Experiencia audiovisual donde la audiencia elige rutas y obtiene resultados distintos.",
      technical: [
        "Logica de nodos y trazabilidad de decisiones.",
        "Posible integracion en LMS o plataformas compatibles."
      ],
      production:
        "Equipo minimo: guion de experiencia, tablas de decision, rodaje modular y QA.",
      costLabel: "5k-150k EUR",
      timeLabel: "3-20 semanas",
      interactivityLevel: 5,
      scalabilityLevel: 3,
      costIndex: 6,
      timeIndex: 7,
      pros: [
        "Alta capacidad para practicar dilemas y decisiones.",
        "Favorece aprendizaje por escenarios."
      ],
      risks: ["Explosion combinatoria de guion/rodaje.", "Coste sube rapido si crecen ramas."],
      metrics: [
        "Rutas mas elegidas.",
        "Tasa de finalizacion por finales.",
        "Mejora en test de decision."
      ],
      examples: ["Bandersnatch como referencia de formato"],
      references: ["Estudios de engagement/aprendizaje en videos ramificados."]
    },
    {
      id: "explorable-sim",
      name: "Explorable explanations y simulaciones",
      category: "interactivo",
      type: "Modelo manipulable",
      audience: "Estudiantes y publico curioso",
      objective: "Construir intuicion cientifica mediante experimentacion guiada.",
      definition:
        "La persona aprende manipulando variables y observando cambios de sistema en tiempo real.",
      technical: [
        "HTML5/WebGL o motor 3D segun complejidad.",
        "Necesita arquitectura didactica para no quedarse en juego."
      ],
      production:
        "Equipo minimo: experto/a cientifico, diseno instruccional y desarrollo.",
      costLabel: "5k-200k EUR",
      timeLabel: "4-26 semanas",
      interactivityLevel: 5,
      scalabilityLevel: 5,
      costIndex: 8,
      timeIndex: 8,
      pros: [
        "Muy potente para conceptos abstractos.",
        "Reduce misconceptions con feedback inmediato."
      ],
      risks: ["Sin guia pedagogica pierde valor de aprendizaje.", "Desarrollo tecnico exigente."],
      metrics: [
        "Interacciones por sesion.",
        "Tiempo explorando.",
        "Patrones de error y logro de objetivos."
      ],
      examples: ["PhET", "NASA Eyes"],
      references: ["Meta-analisis sobre simulaciones interactivas en educacion STEM."]
    },
    {
      id: "immersive-360",
      name: "Experiencia inmersiva 360",
      category: "inmersivo",
      type: "Tour/visita 360",
      audience: "General y museos",
      objective: "Aumentar presencia y comprension espacial de contextos cientificos.",
      definition:
        "Video o entorno 360 consumible en movil, PC o visor, lineal o con hotspots.",
      technical: [
        "Captura 360 + stitching + audio espacial.",
        "WebXR opcional para acceso desde navegador."
      ],
      production:
        "Equipo minimo: operador 360, post 360 y guion de visita.",
      costLabel: "3k-60k EUR",
      timeLabel: "2-10 semanas",
      interactivityLevel: 2,
      scalabilityLevel: 3,
      costIndex: 5,
      timeIndex: 5,
      pros: [
        "Fuerte potencial en patrimonio cientifico y expediciones.",
        "Puede mejorar empatia y orientacion espacial."
      ],
      risks: ["Mareo y fatiga en algunos perfiles.", "Puede quedar en solo efecto wow."],
      metrics: [
        "Tiempo en escena.",
        "Clicks en hotspots.",
        "Finalizacion y mapas de mirada (si disponibles)."
      ],
      examples: ["Visitas virtuales MNCN", "Exploraciones marinas 360"],
      references: ["Revisiones sobre video 360 en aprendizaje y comunicacion."]
    },
    {
      id: "vr-hmd",
      name: "VR con HMD",
      category: "inmersivo",
      type: "Simulacion inmersiva alta",
      audience: "Formacion y museos",
      objective: "Practica procedimental y visualizacion de escenarios imposibles.",
      definition:
        "Experiencia con visor y controladores para simular laboratorio, procesos o escalas complejas.",
      technical: [
        "Motores 3D de tiempo real (Unity/Unreal).",
        "Logistica de visores, higiene y soporte.",
        "QA intenso en rendimiento y confort."
      ],
      production:
        "Equipo minimo: productor VR, diseno de interaccion, modelado 3D, programacion y QA.",
      costLabel: "30k-500k+ EUR",
      timeLabel: "10-40 semanas",
      interactivityLevel: 5,
      scalabilityLevel: 3,
      costIndex: 9,
      timeIndex: 9,
      pros: [
        "Alto potencial para habilidades y presencia.",
        "Puede mejorar retencion en escenarios concretos."
      ],
      risks: ["Coste alto y mantenimiento continuo.", "Riesgo de cybersickness."],
      metrics: [
        "Tiempo de tarea y errores.",
        "Repeticion de practica.",
        "Aprendizaje retenido y percepcion de presencia."
      ],
      examples: ["Cajal VR", "Atapuerca VR"],
      references: ["Meta-analisis sobre VR inmersiva y rendimiento de aprendizaje."]
    },
    {
      id: "ar-webxr",
      name: "AR educativa (movil/WebXR)",
      category: "inmersivo",
      type: "Capa digital sobre entorno fisico",
      audience: "General y educacion",
      objective: "Aprendizaje situado y visualizacion de fenomenos invisibles.",
      definition:
        "Capas AR para modelos 3D, recorridos geolocalizados o experiencias contextuales en campo/museo.",
      technical: [
        "AR nativa (ARKit/ARCore) o web (WebXR).",
        "Pruebas en multiples dispositivos.",
        "Atencion a obsolescencia de plataformas."
      ],
      production:
        "Equipo minimo: modelado 3D, interaccion y QA multiplataforma.",
      costLabel: "5k-200k EUR",
      timeLabel: "4-20 semanas",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 7,
      timeIndex: 7,
      pros: [
        "Muy buena conexion entre contenido y territorio.",
        "Alta recordacion en experiencias guiadas."
      ],
      risks: ["Fragmentacion tecnologica.", "Dependencia del parque de dispositivos."],
      metrics: [
        "Activaciones y tiempo de uso.",
        "Microquizzes en contexto.",
        "Tasa de finalizacion de recorrido."
      ],
      examples: ["Recorridos AR educativos", "WebXR para visualizacion cientifica"],
      references: ["Revisiones de AR en STEM con mejoras de learning gains."]
    },
    {
      id: "social-ar",
      name: "Social AR (filtros y minijuegos)",
      category: "inmersivo",
      type: "AR participativa en redes",
      audience: "General",
      objective: "Activar participacion, UGC y alcance social alrededor de ciencia.",
      definition:
        "Efectos AR en plataforma social para convertir conceptos cientificos en experiencias compartibles.",
      technical: [
        "Toolchains de creacion de efectos por plataforma.",
        "Necesita pruebas de usabilidad y claridad del reto."
      ],
      production:
        "Equipo minimo: diseno de efecto + produccion 3D ligera + QA.",
      costLabel: "3k-80k EUR",
      timeLabel: "3-12 semanas",
      interactivityLevel: 5,
      scalabilityLevel: 5,
      costIndex: 4,
      timeIndex: 4,
      pros: [
        "Participacion alta con baja friccion.",
        "Facil conversion a dinamicas de reto y comunidad."
      ],
      risks: ["Vida util corta por dinamica de plataforma.", "Dependencia de cambios de politica/API."],
      metrics: ["Activaciones.", "UGC generado.", "Compartidos.", "Tiempo medio de uso."],
      examples: ["TikTok Effect House para filtros interactivos"],
      references: ["Practicas de social AR en comunicacion y educacion digital."]
    },
    {
      id: "ai-avatar",
      name: "IA avatar-presentador",
      category: "ia",
      type: "Video sintetico",
      audience: "General e internacional",
      objective: "Escalar versionado rapido con control editorial.",
      definition:
        "Pieza donde un avatar sintetico presenta contenido cientifico con guion supervisado.",
      technical: [
        "Pipeline de guion -> sintesis -> revision experta.",
        "Requiere disclosure explicito y trazabilidad."
      ],
      production:
        "Equipo minimo: editor cientifico, guionista, operador IA y QA.",
      costLabel: "0.3-10k EUR",
      timeLabel: "Horas a dias + QA",
      interactivityLevel: 2,
      scalabilityLevel: 5,
      costIndex: 2,
      timeIndex: 1,
      pros: [
        "Escalabilidad alta para multiversion.",
        "Buena velocidad de actualizacion."
      ],
      risks: ["Riesgo de perdida de confianza si hay opacidad.", "Errores factuales si no hay control experto."],
      metrics: [
        "Comprension y confianza percibida.",
        "Deteccion de errores y tasa de correccion."
      ],
      examples: ["Experimentos de avatares IA en comunicacion cientifica"],
      references: ["Estudios IA vs humano en video docente (aprendizaje equivalente en algunos contextos)."]
    },
    {
      id: "ai-dubbing",
      name: "IA doblaje y traduccion",
      category: "ia",
      type: "Localizacion automatizada",
      audience: "Global",
      objective: "Expandir cobertura idiomatica y accesibilidad con coste marginal bajo.",
      definition:
        "Uso de TTS y traduccion IA para publicar variantes de una pieza manteniendo base editorial.",
      technical: [
        "Control de terminologia cientifica.",
        "Revision de sincronizacion y calidad de voz.",
        "Versionado por idioma con metadatos claros."
      ],
      production:
        "Equipo minimo: editor cientifico + operador de localizacion + QA linguistico.",
      costLabel: "0.2-5k EUR",
      timeLabel: "Horas a dias",
      interactivityLevel: 1,
      scalabilityLevel: 5,
      costIndex: 1,
      timeIndex: 1,
      pros: [
        "Alta eficiencia para internacionalizacion.",
        "Mejora accesibilidad del archivo existente."
      ],
      risks: ["Errores semanticos en terminos tecnicos.", "Percepcion de artificialidad de voz."],
      metrics: ["Cobertura por idioma.", "Retencion comparada por version.", "Feedback cualitativo de comprension."],
      examples: ["Doblaje/translation assistida por IA en video corto"],
      references: ["Practicas recientes de localizacion automatizada en plataformas sociales."]
    },
    {
      id: "ott-docuserie",
      name: "OTT cientifico (docuserie/factual)",
      category: "ott",
      type: "Largo recorrido",
      audience: "General",
      objective: "Profundidad narrativa y archivo evergreen en distribucion de calidad.",
      definition:
        "Distribucion en plataformas OTT VOD/AVOD/FAST con series documentales y factual de ciencia.",
      technical: [
        "Flujos de entrega broadcast/OTT (HLS, DASH, metadata).",
        "Ventanas, rights y estandares de calidad estrictos."
      ],
      production:
        "Equipo completo de produccion audiovisual + desarrollo editorial largo.",
      costLabel: "60k EUR a millones",
      timeLabel: "Meses",
      interactivityLevel: 1,
      scalabilityLevel: 3,
      costIndex: 10,
      timeIndex: 10,
      pros: [
        "Alta legitimidad de marca y profundidad.",
        "Mayor tolerancia a complejidad narrativa."
      ],
      risks: ["Ciclo largo y poca iteracion.", "Barreras de adquisicion y negociacion de ventanas."],
      metrics: [
        "Minutos vistos y completion por episodio.",
        "Retencion de serie y binge rate.",
        "Churn/retencion segun modelo de negocio."
      ],
      examples: ["Catalogos de ciencia/naturaleza en OTT global"],
      references: ["Medicion convergente de audiencias y marcos de evaluacion OTT."]
    }
  ]
};
