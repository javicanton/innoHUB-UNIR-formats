window.INNOHUB_DATA = {
  project: {
    title: "Biblia de formatos audiovisuales para innovación en divulgación científica",
    subtitle: "Repositorio web operativo del proyecto innoHUB UNIR",
    summary:
      "Esta versión digital traduce la investigación de innoHUB a un sistema acciónable para diseñar, prototipar y validar formatos de comunicación científica. Combina criterio académico y viabilidad de producción.",
    goals: [
      "Sistematizar formatos con una ficha estándar: objetivo, técnica, coste-tiempo, riesgos y medición.",
      "Fácilitar decisiones editoriales según impacto buscado: conocimiento, confianza, habilidades o acción.",
      "Servir como memoria metodológica abierta y base para transferir el servicio a terceros."
    ],
    scope: [
      "Ámbito: universidades, medios, instituciones culturales, EdTech y equipos de divulgación.",
      "Fase: repositorio inicial basado en Proyecto innoHUB UNIR.docx + Biblia formatos audiovisuales.pdf."
    ],
    status:
      "Versión 0.1 web. Contenido inicial normalizado desde la investigación. Requiere validación editorial continua."
  },
  pillars: [
    "Aprendizaje multimedia: reducir carga cognitiva, señalizar lo relevante y coordinar audio-imagen.",
    "Narrativa y persuasión: usar storytelling para conectar sin sacrificar rigor científico.",
    "Evaluación con teoría del cambio: medir resultados más allá de views (comprensión, confianza, acción)."
  ],
  taxonomy: [
    "Linealidad: lineal vs no lineal (ramificado, explorable).",
    "Interactividad: nula, ligera o fuerte.",
    "Inmersión: pantalla plana, 360, VR HMD, AR/WebXR.",
    "Serialidad: pieza única, serie o universo transmedia.",
    "IA generativa: asistida, híbrida o generada.",
    "Distribución: redes, web propia, LMS, OTT, apps y museos."
  ],
  decisionTree: [
    {
      objective: "Conocimiento y comprensión",
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
        "Video ramificado, simulaciones interactivas, VR con HMD para práctica guiada."
    },
    {
      objective: "Acción y participación",
      recommendation:
        "Universo transmedia, social AR con UGC, retos comunitarios con mapa interactivo."
    }
  ],
  governance: [
    "Transparencia: disclosure de contenido alterado o sintético y etiquetado coherente en plataforma.",
    "Cumplimiento UE: alinear flujos de IA con AI Act, privacidad y protección de datos.",
    "Gestión de riesgos: controlar sesgos, alucinaciones y sobre-simplificación en formatos virales.",
    "Proveniencia y trazabilidad: usar estándares tipo C2PA/Content Credentials cuando aplique.",
    "Definition of Done por ficha: rigor científico, claridad narrativa, accesibilidad y medición instrumentada."
  ],
  templateFields: [
    "Definición breve del formato (1-2 líneas).",
    "Objetivo principal de divulgación.",
    "Duración típica y extremos.",
    "Mecánicas de interacción.",
    "Requisitos técnicos y de distribución.",
    "Pipeline: pre, producción, post, publicación, mantenimiento.",
    "Equipo mínimo (roles y perfiles).",
    "Coste y tiempo orientativo.",
    "Métricas nativas de plataforma.",
    "Métricas de impacto científico (comprensión, confianza, acción).",
    "Riesgos cognitivos, reputacionales y legales.",
    "Checklist de calidad científica.",
    "Ejemplos reales.",
    "Referencias y evidencia de soporte."
  ],
  formats: [
    {
      id: "short-vertical",
      name: "Píldora vertical short-form science",
      category: "social",
      type: "Video corto",
      audience: "General y joven",
      objective: "Alfabetización científica rápida y puerta de entrada a contenidos largos.",
      definition:
        "Video vertical breve para explicar conceptos, desmontar mitos o lanzar mini historias científicas en scroll.",
      technical: [
        "Formato 9:16 full-screen.",
        "Ritmo rápido y subtítulos de facto obligatorios.",
        "Publicación multicanal: TikTok, Reels, Shorts."
      ],
      production:
        "Equipo mínimo: 1 creador/a + revisión experta puntual. Herramientas: móvil, micro de solapa y editor rápido.",
      costLabel: "0-2k EUR por pieza",
      timeLabel: "Horas a 2 días",
      interactivityLevel: 1,
      scalabilityLevel: 5,
      costIndex: 2,
      timeIndex: 2,
      pros: [
        "Gran alcance y descubrimiento.",
        "Muy util para desmentidos rápidos.",
        "Permite iterar guion y estilo a alta velocidad."
      ],
      risks: [
        "Simplificación excesiva.",
        "Mayor exposición a desinformación si no hay framing claro."
      ],
      metrics: [
        "Retención y completion.",
        "Tiempo medio visto y replays.",
        "Compartidos/guardados y CTR hacia pieza larga."
      ],
      examples: [
        { name: "Feed STEM en TikTok Europa", url: "https://newsroom.tiktok.com/es-es/tiktok-lanza-un-feed-dedicado-a-contenidos-stem-en-toda-europa" },
        { name: "Programa #LearnOnTikTok", url: "https://www.tiktok.com/tag/LearnOnTikTok" }
      ],
      references: [
        "Evidencia de microlearning y video corto en aprendizaje/retención.",
        "Analisis comparados de engagement científico por plataforma."
      ]
    },
    {
      id: "science-live",
      name: "Directo interactivo Science Live",
      category: "social",
      type: "Live streaming",
      audience: "General y comunidad",
      objective: "Aumentar cercanía, confianza y resolución de dudas en tiempo real.",
      definition:
        "Emisión en directo con chat, preguntas, encuestas e invitados para AMAs, demos o eventos científicos.",
      technical: [
        "Stack típico: OBS + plataforma live.",
        "Necesidad de codificación estable y moderación activa.",
        "Reciclable en clips verticales post-evento."
      ],
      production:
        "Equipo mínimo: host científico + moderación + técnico (puede comprimirse en setups pequeños).",
      costLabel: "0-6k EUR por evento",
      timeLabel: "1-5 días + directo",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 3,
      timeIndex: 3,
      pros: [
        "Humaniza la ciencia.",
        "Resuelve dudas al instante.",
        "Fuerte construcción de comunidad."
      ],
      risks: ["Riesgo reputacional por errores en vivo.", "Dependencia de moderación para controlar ruido y trolls."],
      metrics: [
        "Concurrencia media y pico.",
        "Watch time total.",
        "Mensajes/minuto y ratio de chatters.",
        "Retención hasta tramo Q&A."
      ],
      examples: [
        { name: "NASA en Twitch", url: "https://www.twitch.tv/nasa" },
        { name: "CdeCiencia en Twitch", url: "https://www.twitch.tv/cdeciencia" }
      ],
      references: ["Revisiones sobre Twitch para comunicación científica y educativa."]
    },
    {
      id: "videopodcast",
      name: "Videopodcast + clip factory",
      category: "hibrido",
      type: "Conversacional multiformato",
      audience: "General y profesional",
      objective: "Combinar profundidad y eficiencia de reutilización en un solo flujo.",
      definition:
        "Formato grabado (o falso directo) que sale como episodio largo y se atomiza en clips para redes.",
      technical: [
        "Grabación multicámara o cámara única + apoyo.",
        "Version audio para feed podcast.",
        "Derivación sistemática de clips verticales."
      ],
      production:
        "Equipo mínimo: host + invitado/a + editor/a. Requiere estructura de guion para evitar dispersión.",
      costLabel: "0.3-4k EUR por episodio",
      timeLabel: "1-3 días",
      interactivityLevel: 1,
      scalabilityLevel: 4,
      costIndex: 3,
      timeIndex: 3,
      pros: [
        "Construye autoridad de marca científica.",
        "Muy buen ratio contenido/tiempo.",
        "Compatible con OTT, web y social."
      ],
      risks: ["Conversación sin foco narrativo.", "Clips sin contexto pueden perder rigor."],
      metrics: [
        "Retención por minuto en episodio largo.",
        "Completitud en audio.",
        "Crecimiento de suscriptores y conversiones."
      ],
      examples: [
        { name: "Modelo de universo Hope (podcast + mapa + documental)", url: "https://www.rtve.es/rtve/20250425/mapa-interactivo-hope-otra-forma-conocer-acciones-para-mitigar-cambio-climatico/16552704.shtml" }
      ],
      references: ["Principios de narrativa multimedia y evaluación de contenido científico en social."]
    },
    {
      id: "transmedia-universe",
      name: "Universo transmedia",
      category: "transmedia",
      type: "Multiplataforma coordinada",
      audience: "General y subpúblicos",
      objective: "Escalar alcance sin perder profundidad mediante múltiples puntos de entrada.",
      definition:
        "Diseño coordinado de una historia científica en serie, mapa, web, podcast, redes y activaciones.",
      technical: [
        "Arquitectura hub + satélites.",
        "Gobernanza editorial fuerte y control de versiones.",
        "Dependencia alta de coordinación y analítica."
      ],
      production:
        "Equipo mínimo: dirección editorial, productor/a transmedia, community, analítica y soporte técnico.",
      costLabel: "25k-250k+ EUR (MVP a escala)",
      timeLabel: "6-20 semanas + mantenimiento",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 8,
      timeIndex: 7,
      pros: [
        "Multiplica puntos de contacto con audiencia.",
        "Favorece repetición contextual del aprendizaje.",
        "Permite capas de participación progresiva."
      ],
      risks: ["Complejidad operativa elevada.", "Incoherencia si no hay dirección unificada."],
      metrics: [
        "Alcance deduplicado total.",
        "Recorridos cross-plataforma.",
        "Participación UGC y calidad de comentarios.",
        "Outcomes pre/post."
      ],
      examples: [
        { name: "Universo Atapuerca", url: "https://www.atapuerca.org/" },
        { name: "Universo Hope", url: "https://www.rtve.es/rtve/20250425/mapa-interactivo-hope-otra-forma-conocer-acciones-para-mitigar-cambio-climatico/16552704.shtml" }
      ],
      references: ["Literatura sobre transmedia en comunicación científica."]
    },
    {
      id: "webdoc",
      name: "Webdoc / documental interactivo",
      category: "interactivo",
      type: "Web interactiva no lineal",
      audience: "Público motivado",
      objective: "Explicar sistemas complejos por capas y rutas de exploración.",
      definition:
        "Obra documental no lineal o semi-lineal donde la persona usuaria navega módulos, extras y decisiones.",
      technical: [
        "Front-end web + UX + video por capas.",
        "Analítica de navegación por rutas.",
        "Hosting y mantenimiento continuado."
      ],
      production:
        "Equipo mínimo: dirección, guion, realización, UX/UI, front-end, QA y analítica.",
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
      risks: ["Mayor fricción de entrada que video simple.", "Coste técnico y QA alto."],
      metrics: [
        "Tiempo en experiencia.",
        "Rutas más frecuentes.",
        "Finalización de módulos.",
        "Retorno de usuarios."
      ],
      examples: [
        { name: "Sin huella (Lab RTVE)", url: "https://lab.rtve.es/huella-ecologica/es/proyecto/" }
      ],
      references: ["Investigación sobre webdoc participativo y test de usuario."]
    },
    {
      id: "data-storytelling",
      name: "Mapa interactivo y data-storytelling",
      category: "interactivo",
      type: "Visualización guíada por datos",
      audience: "General y decisores",
      objective: "Anclar evidencia y contexto sin saturar el relato principal.",
      definition:
        "Historia basada en mapas, series y comparadores con navegación por scroll, fichas y filtros.",
      technical: [
        "Visualización web y cartografía.",
        "Base de datos y accesibilidad.",
        "Instrumentación de eventos analíticos."
      ],
      production:
        "Equipo mínimo: periodista/científico de datos, diseño info, front-end y edición científica.",
      costLabel: "10k-120k EUR",
      timeLabel: "4-16 semanas",
      interactivityLevel: 3,
      scalabilityLevel: 4,
      costIndex: 5,
      timeIndex: 6,
      pros: [
        "Excelente para problemas sistemicos (clima, salud, energia).",
        "Favorece transparencia metodológica."
      ],
      risks: ["Dependencia de actualización de datos y APIs.", "Coste superior al video lineal."],
      metrics: [
        "Profundidad de scroll.",
        "Clicks por capa y rutas.",
        "Conversión a recursos o acción local."
      ],
      examples: [
        { name: "Mapa interactivo del universo Hope", url: "https://www.rtve.es/rtve/20250425/mapa-interactivo-hope-otra-forma-conocer-acciones-para-mitigar-cambio-climatico/16552704.shtml" }
      ],
      references: ["Principios de aprendizaje multimedia y comunicación científica basada en evidencia."]
    },
    {
      id: "interactive-video",
      name: "Video interactivo con quizzes (H5P/LMS)",
      category: "interactivo",
      type: "Video lineal con capas activas",
      audience: "Estudiantes y publico general",
      objective: "Mejorar comprensión comprobada y evaluación formativa.",
      definition:
        "Video lineal con preguntas, hotspots, enlaces y microtareas para active learning.",
      technical: [
        "H5P y herramientas equivalentes en navegador.",
        "Integrable en LMS, web propia y landing de curso."
      ],
      production:
        "Equipo mínimo: guion instruccional, edición, diseño de preguntas e integración LMS.",
      costLabel: "0.5-8k EUR",
      timeLabel: "1-10 días",
      interactivityLevel: 3,
      scalabilityLevel: 5,
      costIndex: 4,
      timeIndex: 3,
      pros: [
        "Alinea video y aprendizaje activo.",
        "Genera datos granulares de comprensión."
      ],
      risks: ["Interacción limitada en redes abiertas.", "Puede sentirse escolar si no se diseña bien."],
      metrics: [
        "Tasa de respuesta y acierto por pregunta.",
        "Abandono por minuto.",
        "Reintentos y mejora post-test."
      ],
      examples: [
        { name: "H5P Interactive Video", url: "https://h5p.org/interactive-video" },
        { name: "Tutorial Interactive Video H5P", url: "https://h5p.org/tutorial-interactive-video" }
      ],
      references: ["Estudios sobre recursos H5P y outcomes de aprendizaje."]
    },
    {
      id: "branching-video",
      name: "Video ramificado (branching)",
      category: "interactivo",
      type: "Simulación de decisión audiovisual",
      audience: "Formación y publico general",
      objective: "Entrenar razonamiento y transferencia en escenarios con consecuencias.",
      definition:
        "Experiencia audiovisual donde la audiencia elige rutas y obtiene resultados distintos.",
      technical: [
        "Lógica de nodos y trazabilidad de decisiones.",
        "Posible integración en LMS o plataformas compatibles."
      ],
      production:
        "Equipo mínimo: guion de experiencia, tablas de decisión, rodaje modular y QA.",
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
      risks: ["Explosion combinatoria de guion/rodaje.", "Coste sube rápido si crecen ramas."],
      metrics: [
        "Rutas mas elegidas.",
        "Tasa de finalización por finales.",
        "Mejora en test de decisión."
      ],
      examples: [
        { name: "Bandersnatch (Black Mirror, Netflix)", url: "https://www.theverge.com/news/663933/netflix-black-mirror-bandersnatch-kimmy-schmidt-removal" }
      ],
      references: ["Estudios de engagement/aprendizaje en videos ramificados."]
    },
    {
      id: "explorable-sim",
      name: "Explorable explanations y simulaciones",
      category: "interactivo",
      type: "Modelo manipulable",
      audience: "Estudiantes y publico curioso",
      objective: "Construir intuición científica mediante experimentación guíada.",
      definition:
        "La persona aprende manipulando variables y observando cambios de sistema en tiempo real.",
      technical: [
        "HTML5/WebGL o motor 3D según complejidad.",
        "Necesita arquitectura didáctica para no quedarse en juego."
      ],
      production:
        "Equipo mínimo: experto/a científico, diseño instruccional y desarrollo.",
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
      risks: ["Sin guía pedagógica pierde valor de aprendizaje.", "Desarrollo técnico exigente."],
      metrics: [
        "Interacciónes por sesion.",
        "Tiempo explorando.",
        "Patrones de error y logro de objetivos."
      ],
      examples: [
        { name: "PhET (simulaciones interactivas)", url: "https://phet.colorado.edu/en/about" },
        { name: "NASA Eyes on the Solar System", url: "https://eyes.nasa.gov/apps/solar-system" }
      ],
      references: ["Meta-análisis sobre simulaciones interactivas en educación STEM."]
    },
    {
      id: "immersive-360",
      name: "Experiencia inmersiva 360",
      category: "inmersivo",
      type: "Tour/visita 360",
      audience: "General y museos",
      objective: "Aumentar presencia y comprensión espacial de contextos científicos.",
      definition:
        "Video o entorno 360 consumible en móvil, PC o visor, lineal o con hotspots.",
      technical: [
        "Captura 360 + stitching + audio espacial.",
        "WebXR opcional para acceso desde navegador."
      ],
      production:
        "Equipo mínimo: operador 360, post 360 y guion de visita.",
      costLabel: "3k-60k EUR",
      timeLabel: "2-10 semanas",
      interactivityLevel: 2,
      scalabilityLevel: 3,
      costIndex: 5,
      timeIndex: 5,
      pros: [
        "Fuerte potencial en patrimonio científico y expediciónes.",
        "Puede mejorar empatia y orientación espacial."
      ],
      risks: ["Mareo y fatiga en algunos perfiles.", "Puede quedar en solo efecto wow."],
      metrics: [
        "Tiempo en escena.",
        "Clicks en hotspots.",
        "Finalización y mapas de mirada (si disponibles)."
      ],
      examples: [
        { name: "Visitas virtuales MNCN", url: "https://www.mncn.csic.es/es/visita-el-mncn/exposiciones/visitas-virtuales" },
        { name: "O mar en 360º (exploración marina)", url: "https://cadenaser.com/galicia/2025/07/06/explora-el-fondo-marino-de-las-illas-atlanticas-gracias-a-la-realidad-virtual-radio-vigo/" }
      ],
      references: ["Revisiones sobre video 360 en aprendizaje y comunicación."]
    },
    {
      id: "vr-hmd",
      name: "VR con HMD",
      category: "inmersivo",
      type: "Simulación inmersiva alta",
      audience: "Formación y museos",
      objective: "Practica procedimental y visualización de escenarios imposibles.",
      definition:
        "Experiencia con visor y controladores para simular laboratorio, procesos o escalas complejas.",
      technical: [
        "Motores 3D de tiempo real (Unity/Unreal).",
        "Logística de visores, higiene y soporte.",
        "QA intenso en rendimiento y confort."
      ],
      production:
        "Equipo mínimo: productor VR, diseño de interacción, modelado 3D, programación y QA.",
      costLabel: "30k-500k+ EUR",
      timeLabel: "10-40 semanas",
      interactivityLevel: 5,
      scalabilityLevel: 3,
      costIndex: 9,
      timeIndex: 9,
      pros: [
        "Alto potencial para habilidades y presencia.",
        "Puede mejorar retención en escenarios concretos."
      ],
      risks: ["Coste alto y mantenimiento continuo.", "Riesgo de cybersickness."],
      metrics: [
        "Tiempo de tarea y errores.",
        "Repeticion de práctica.",
        "Aprendizaje retenido y percepción de presencia."
      ],
      examples: [
        { name: "Cajal VR (Museo de Ciencias Naturales)", url: "https://santiagoramonycajal.org/2024/03/14/cajal-vr-en-el-museo-de-ciencias-naturales-de-madrid/" },
        { name: "Atapuerca VR (residencias)", url: "https://cadenaser.com/castillayleon/2025/06/05/atapuerca-un-paseo-por-la-evolucion-desde-residencias-de-mayores-de-burgos-con-visores-de-realidad-virtual-radio-castilla/" }
      ],
      references: ["Meta-análisis sobre VR inmersiva y rendimiento de aprendizaje."]
    },
    {
      id: "ar-webxr",
      name: "AR educativa (móvil/WebXR)",
      category: "inmersivo",
      type: "Capa digital sobre entorno fisico",
      audience: "General y educación",
      objective: "Aprendizaje situado y visualización de fenómenos invisibles.",
      definition:
        "Capas AR para modelos 3D, recorridos geolocalizados o experiencias contextuales en campo/museo.",
      technical: [
        "AR nativa (ARKit/ARCore) o web (WebXR).",
        "Pruebas en múltiples dispositivos.",
        "Atención a obsolescencia de plataformas."
      ],
      production:
        "Equipo mínimo: modelado 3D, interacción y QA multiplataforma.",
      costLabel: "5k-200k EUR",
      timeLabel: "4-20 semanas",
      interactivityLevel: 4,
      scalabilityLevel: 3,
      costIndex: 7,
      timeIndex: 7,
      pros: [
        "Muy buena conexion entre contenido y territorio.",
        "Alta recordación en experiencias guíadas."
      ],
      risks: ["Fragmentación tecnológica.", "Dependencia del parque de dispositivos."],
      metrics: [
        "Activaciones y tiempo de uso.",
        "Microquizzes en contexto.",
        "Tasa de finalización de recorrido."
      ],
      examples: [
        { name: "WebXR Device API (estándar W3C)", url: "https://www.w3.org/TR/webxr/" }
      ],
      references: ["Revisiones de AR en STEM con mejoras de learning gains."]
    },
    {
      id: "social-ar",
      name: "Social AR (filtros y minijuegos)",
      category: "inmersivo",
      type: "AR participativa en redes",
      audience: "General",
      objective: "Activar participación, UGC y alcance social alrededor de ciencia.",
      definition:
        "Efectos AR en plataforma social para convertir conceptos científicos en experiencias compartibles.",
      technical: [
        "Toolchains de creación de efectos por plataforma.",
        "Necesita pruebas de usabilidad y claridad del reto."
      ],
      production:
        "Equipo mínimo: diseño de efecto + producción 3D ligera + QA.",
      costLabel: "3k-80k EUR",
      timeLabel: "3-12 semanas",
      interactivityLevel: 5,
      scalabilityLevel: 5,
      costIndex: 4,
      timeIndex: 4,
      pros: [
        "Participación alta con baja fricción.",
        "Fácil conversión a dinámicas de reto y comunidad."
      ],
      risks: ["Vida util corta por dinamica de plataforma.", "Dependencia de cambios de politica/API."],
      metrics: ["Activaciones.", "UGC generado.", "Compartidos.", "Tiempo medio de uso."],
      examples: [
        { name: "TikTok Effect House (filtros y efectos AR)", url: "https://effecthouse.tiktok.com/" }
      ],
      references: ["Prácticas de social AR en comunicación y educación digital."]
    },
    {
      id: "ai-avatar",
      name: "IA avatar-presentador",
      category: "ia",
      type: "Video sintético",
      audience: "General e internacional",
      objective: "Escalar versiónado rápido con control editorial.",
      definition:
        "Pieza donde un avatar sintético presenta contenido científico con guion supervisado.",
      technical: [
        "Pipeline de guion -> síntesis -> revisión experta.",
        "Requiere disclosure explícito y trazabilidad."
      ],
      production:
        "Equipo mínimo: editor científico, guionista, operador IA y QA.",
      costLabel: "0.3-10k EUR",
      timeLabel: "Horas a días + QA",
      interactivityLevel: 2,
      scalabilityLevel: 5,
      costIndex: 2,
      timeIndex: 1,
      pros: [
        "Escalabilidad alta para multiversión.",
        "Buena velocidad de actualización."
      ],
      risks: ["Riesgo de pérdida de confianza si hay opacidad.", "Errores factuales si no hay control experto."],
      metrics: [
        "Comprension y confianza percibida.",
        "Detección de errores y tasa de corrección."
      ],
      examples: [
        { name: "Experimentos de avatares IA en comunicación científica", url: "https://jcom.sissa.it/article/pubid/JCOM_2402_2025_A03/" }
      ],
      references: ["Estudios IA vs humano en video docente (aprendizaje equivalente en algunos contextos)."]
    },
    {
      id: "ai-dubbing",
      name: "IA doblaje y traducción",
      category: "ia",
      type: "Localización automatizada",
      audience: "Global",
      objective: "Expandir cobertura idiomatica y accesibilidad con coste marginal bajo.",
      definition:
        "Uso de TTS y traducción IA para publicar variantes de una pieza manteniendo base editorial.",
      technical: [
        "Control de terminología científica.",
        "Revisión de sincronización y calidad de voz.",
        "Versionado por idioma con metadatos claros."
      ],
      production:
        "Equipo mínimo: editor científico + operador de localización + QA lingüístico.",
      costLabel: "0.2-5k EUR",
      timeLabel: "Horas a días",
      interactivityLevel: 1,
      scalabilityLevel: 5,
      costIndex: 1,
      timeIndex: 1,
      pros: [
        "Alta eficiencia para internacionalización.",
        "Mejora accesibilidad del archivo existente."
      ],
      risks: ["Errores semánticos en términos técnicos.", "Percepción de artificialidad de voz."],
      metrics: ["Cobertura por idioma.", "Retención comparada por versión.", "Feedback cualitativo de comprensión."],
      examples: [
        { name: "Meta: traducción y doblaje de Reels con IA", url: "https://www.theverge.com/news/761665/meta-ai-translation-facebook-instagram-reels" }
      ],
      references: ["Prácticas recientes de localización automatizada en plataformas sociales."]
    },
    {
      id: "ott-docuserie",
      name: "OTT científico (docuserie/factual)",
      category: "ott",
      type: "Largo recorrido",
      audience: "General",
      objective: "Profundidad narrativa y archivo evergreen en distribución de calidad.",
      definition:
        "Distribución en plataformas OTT VOD/AVOD/FAST con series documentales y factual de ciencia.",
      technical: [
        "Flujos de entrega broadcast/OTT (HLS, DASH, metadata).",
        "Ventanas, rights y estándares de calidad estrictos."
      ],
      production:
        "Equipo completo de producción audiovisual + desarrollo editorial largo.",
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
      risks: ["Ciclo largo y poca iteración.", "Barreras de adquisición y negociación de ventanas."],
      metrics: [
        "Minutos vistos y completion por episodio.",
        "Retención de serie y binge rate.",
        "Churn/retención según modelo de negocio."
      ],
      examples: [
        { name: "Documentales de ciencia y naturaleza en Netflix", url: "https://www.netflix.com/us-es/browse/genre/2595" }
      ],
      references: ["Medición convergente de audiencias y marcos de evaluación OTT."]
    }
  ]
};
