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
  successCases: [
    {
      id: "prado-digital-social",
      title: "Museo del Prado: estrategia short-form en TikTok",
      organization: "Museo Nacional del Prado",
      format: "Píldora vertical short-form + live cultural",
      relatedFormats: ["short-vertical", "science-live"],
      challenge:
        "Acercar contenidos de arte e historia a audiencias jóvenes sin perder rigor curatorial.",
      approach:
        "El museo abrió y profesionalizó su canal de TikTok con piezas cortas explicativas, tono divulgativo y participación de especialistas del propio museo.",
      outcome:
        "Reconocimiento internacional como iniciativa destacada en arte y cultura digital, con gran tracción en público joven y crecimiento de comunidad.",
      transferableLearnings: [
        "Convertir conocimiento experto en piezas breves y serializadas mejora alcance.",
        "La presencia de perfiles técnicos/curatoriales refuerza credibilidad.",
        "El formato corto funciona como puerta de entrada a contenidos más profundos."
      ],
      sources: [
        {
          name: "Museo del Prado: candidatura internacional por su TikTok",
          url: "https://www.museodelprado.es/actualidad/noticia/el-tiktok-del-museo-del-prado-candidato-a-la/28a33809-ca29-8d1d-fa71-56f4914b81ac"
        },
        {
          name: "TikTok Newsroom: colaboración con museos europeos (incluye Prado)",
          url: "https://newsroom.tiktok.com/en-us/museum-el-prado-spain"
        }
      ]
    },
    {
      id: "mit-medialab-video-ecosystem",
      title: "MIT Media Lab: ecosistema de vídeo para investigación",
      organization: "MIT Media Lab",
      format: "Microvídeo, piezas de investigación y storytelling audiovisual",
      relatedFormats: ["short-vertical", "videopodcast"],
      challenge:
        "Comunicar investigación interdisciplinar compleja a audiencias no especialistas y partners globales.",
      approach:
        "Uso continuo de vídeos cortos, clips de laboratorio y piezas narrativas para explicar proyectos, equipos y resultados con lenguaje visual accesible.",
      outcome:
        "Biblioteca audiovisual amplia y actualizada que facilita difusión pública, transferencia y conexión con comunidad internacional.",
      transferableLearnings: [
        "Combinar vídeos breves con piezas más profundas permite embudo de comprensión.",
        "La narrativa visual de proyectos reales mejora comprensión de tecnologías complejas.",
        "Publicar de forma continua crea memoria de innovación y reputación institucional."
      ],
      sources: [
        {
          name: "MIT Media Lab - Videos",
          url: "https://www.media.mit.edu/videos/"
        },
        {
          name: "MIT Media Lab - News + Updates",
          url: "https://www.media.mit.edu/"
        }
      ]
    },
    {
      id: "nasa-twitch-live",
      title: "NASA en Twitch: divulgación científica en directo",
      organization: "NASA",
      format: "Live streaming interactivo con chat",
      relatedFormats: ["science-live"],
      challenge:
        "Conectar divulgación científica institucional con audiencias digitales en tiempo real.",
      approach:
        "Uso de directos en Twitch para eventos y sesiones de ciencia/espacio con participación de comunidad y formatos de conversación en vivo.",
      outcome:
        "Consolidación de un canal oficial en una plataforma nativa de interacción, complementando otras plataformas de vídeo para alcance y engagement.",
      transferableLearnings: [
        "El chat en tiempo real aumenta cercanía y preguntas de alto valor.",
        "Los directos funcionan mejor cuando se coordinan con piezas resumen posteriores.",
        "La estrategia multicanal permite combinar alcance masivo y conversación profunda."
      ],
      sources: [
        {
          name: "Canal oficial de NASA en Twitch",
          url: "https://www.twitch.tv/nasa"
        },
        {
          name: "Estudio sobre Twitch y comunicación científica (caso NASA)",
          url: "https://firstmonday.org/ojs/index.php/fm/article/view/13214"
        }
      ]
    },
    {
      id: "phet-simulations-stem",
      title: "PhET (CU Boulder): simulaciones interactivas para STEM",
      organization: "University of Colorado Boulder - PhET",
      format: "Explorable simulations",
      relatedFormats: ["explorable-sim", "interactive-video"],
      challenge:
        "Mejorar comprensión conceptual y participación activa en aprendizaje de ciencias y matemáticas.",
      approach:
        "Despliegue global de simulaciones manipulables con diseño basado en investigación educativa y uso en aula y autoaprendizaje.",
      outcome:
        "Adopción internacional y evidencia de mejoras en aprendizaje y actitudes hacia STEM en distintos contextos educativos.",
      transferableLearnings: [
        "La interacción con variables acelera comprensión de conceptos abstractos.",
        "Las simulaciones son más efectivas cuando se integran en secuencias didácticas activas.",
        "El acceso abierto facilita escalabilidad y reutilización en múltiples niveles."
      ],
      sources: [
        {
          name: "PhET Interactive Simulations",
          url: "https://phet.colorado.edu/"
        },
        {
          name: "PhET Impact Report 2024",
          url: "https://phet.colorado.edu/publications/PhET_Impact_Report_2024.pdf"
        }
      ]
    }
  ],
  services: [
    {
      id: "auditoria",
      number: "01",
      name: "Auditoría de Narrativa Científica",
      subtitle: "Diagnóstico estratégico de comunicación audiovisual",
      trl: "TRL 8–9",
      tags: ["Consultoría", "Estrategia", "Captación"],
      viability: "Muy alta",
      description: "Servicio de diagnóstico y consultoría que evalúa la estrategia de comunicación audiovisual actual del cliente (universidad, centro de investigación, fundación o empresa EdTech) e identifica oportunidades de mejora y formatos innovadores aplicables a sus necesidades. El proceso incluye análisis del inventario de contenidos existentes, evaluación de la eficacia narrativa y el impacto en audiencias, benchmarking con referentes del sector y entrega de un informe detallado con recomendaciones estratégicas y un catálogo de formatos priorizados. Es la puerta de entrada ideal al servicio InnoHUB para clientes que aún no tienen clara su hoja de ruta de comunicación científica.",
      includes: [
        "Análisis del inventario de contenidos",
        "Evaluación de eficacia narrativa",
        "Benchmarking sectorial",
        "Informe con recomendaciones y formatos priorizados"
      ],
      costEstimate: "300 – 800 €",
      costDetail: "Horas de consultoría, análisis de contenidos y redacción del informe; sin costes de producción.",
      clientPrice: "800 – 2.500 €",
      clientPriceDetail: "",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "manual",
      number: "02",
      name: "Manual de Formatos Audiovisuales a Medida",
      subtitle: "Guía técnica para producción autónoma con calidad garantizada",
      trl: "TRL 8–9",
      tags: ["Manual", "Autonomía", "Metodología"],
      viability: "Alta",
      description: "Entrega de una guía técnica completa y personalizada para que el equipo de comunicación del cliente pueda producir de forma autónoma sus propios contenidos audiovisuales de divulgación científica con garantías de calidad y coherencia narrativa. El manual incluye definición del tono de voz y estilo visual, estructuras de guión adaptadas a los formatos seleccionados, pautas de accesibilidad, recomendaciones de herramientas y flujos de producción paso a paso. Es el producto ideal para instituciones que disponen de recursos humanos internos pero carecen del conocimiento metodológico para sistematizar su producción audiovisual.",
      includes: [
        "Tono de voz y estilo visual",
        "Estructuras de guión por formato",
        "Flujos de producción paso a paso",
        "Pautas de accesibilidad"
      ],
      costEstimate: "400 – 900 €",
      costDetail: "Redacción asistida por IA, maquetación y revisión especializada.",
      clientPrice: "1.200 – 3.500 €",
      clientPriceDetail: "",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "taller",
      number: "03",
      name: "Taller de Ideación Co-creativa",
      subtitle: "Design thinking aplicado a la divulgación científica",
      trl: "TRL 8–9",
      tags: ["Formación", "Co-creación", "Talleres"],
      viability: "Alta",
      description: "Sesión o programa de talleres presenciales o virtuales en los que el equipo InnoHUB trabaja junto al equipo del cliente para diseñar colaborativamente los formatos audiovisuales más adecuados a sus necesidades de comunicación científica. A través de metodologías de design thinking, creativity sprints y prototipado rápido en papel, los participantes definen la propuesta de valor de sus contenidos, identifican las audiencias prioritarias y llegan al final del taller con un brief ejecutivo listo para producción. El servicio incluye facilitación experta, materiales de trabajo, documentación del proceso y seguimiento posterior.",
      includes: [
        "Sesiones presenciales o virtuales",
        "Design thinking y creativity sprints",
        "Brief ejecutivo listo para producción",
        "Facilitación experta + seguimiento"
      ],
      costEstimate: "600 – 1.500 € / sesión",
      costDetail: "Facilitación, materiales y documentación; variable según duración y número de participantes.",
      clientPrice: "900 – 3.000 € / sesión",
      clientPriceDetail: "",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "video-abstract",
      number: "04",
      name: "Video-Abstract Científico",
      subtitle: "Tu investigación en 90 segundos, producida con IA",
      trl: "TRL 8–9",
      tags: ["Investigación", "Open Access", "Horizon"],
      viability: "Muy alta",
      description: "Pieza audiovisual breve (entre 90 segundos y 4 minutos) que sintetiza de forma visual y narrativa los hallazgos, metodología e impacto de un artículo o proyecto de investigación, con el objetivo de ampliar su visibilidad, facilitar su comprensión por audiencias no especializadas y aumentar su tasa de citación. El video-abstract combina locución guionizada, motion graphics, imágenes de recurso y, cuando procede, fragmentos de entrevista con los propios autores. El servicio incluye el guión de adaptación del texto científico, la producción de la pieza y la entrega en formatos optimizados para repositorios institucionales, plataformas académicas y redes sociales científicas. Se puede contratar como servicio unitario o en paquetes para grupos de investigación, revistas académicas o convocatorias de proyectos.",
      includes: [
        "Flujo 100% automatizado con IA",
        "Guión, locución y motion graphics",
        "Formatos para repositorios y RRSS",
        "Paquetes de volumen disponibles"
      ],
      costEstimate: "10 – 25 € / pieza",
      costDetail: "Proceso totalmente automatizado con IA: ingesta del texto científico, generación de guión, locución sintética, motion graphics parametrizados y exportación final sin intervención manual significativa.",
      clientPrice: "60 – 100 € / pieza",
      clientPriceDetail: "Paquetes de 10 unidades desde 55 € / pieza.",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "podcast",
      number: "05",
      name: "Podcast Narrativo Científico",
      subtitle: "Ciencia en audio inmersivo para audiencias digitales",
      trl: "TRL 7–8",
      tags: ["Audio", "Divulgación", "Series"],
      viability: "Muy alta",
      description: "Producción sonora serializada con tratamiento documental y narrativa envolvente orientada a hacer accesible el conocimiento académico y científico a audiencias no especializadas. A diferencia del podcast de entrevista convencional, el podcast narrativo combina locución guionizada, efectos sonoros, música original y fragmentos de fuentes primarias para construir una experiencia de escucha inmersiva. El servicio incluye diseño de línea editorial, desarrollo de la biblia de la serie, producción de episodios piloto y validación de la propuesta con paneles de audiencia antes del lanzamiento.",
      includes: [
        "Guión asistido por IA",
        "Edición sonora y música original",
        "Diseño de línea editorial completa",
        "Distribución en plataformas líderes"
      ],
      costEstimate: "300 – 700 € / episodio",
      costDetail: "Guión asistido por IA, edición sonora y música; grabación con locutores reales o síntesis de voz; variable según duración.",
      clientPrice: "800 – 2.500 € / episodio",
      clientPriceDetail: "Diseño de serie completa desde 5.000 €.",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "video-ia",
      number: "06",
      name: "Vídeo Educativo Generado con IA",
      subtitle: "Contenido escalable con calidad narrativa y coste mínimo",
      trl: "TRL 6–7",
      tags: ["IA Generativa", "EdTech", "Automatización"],
      viability: "Muy alta",
      description: "Producción de piezas audiovisuales cortas (entre 3 y 12 minutos) en las que la inteligencia artificial interviene en distintas fases del proceso creativo: generación de imágenes y animaciones, síntesis de voz naturalista, edición automatizada y personalización del contenido según el perfil del espectador. El resultado es un formato escalable que permite al cliente producir un volumen elevado de contenidos de divulgación manteniendo coherencia estética y calidad narrativa, con tiempos de producción y costes significativamente reducidos respecto a la producción audiovisual tradicional. El servicio incluye el diseño del flujo de producción asistida por IA, la selección y configuración de las herramientas más adecuadas y la validación ética y narrativa de los resultados.",
      includes: [
        "Generación de imágenes y animaciones",
        "Síntesis de voz naturalista",
        "Edición y montaje automatizados",
        "Validación ética incluida"
      ],
      costEstimate: "150 – 500 € / pieza",
      costDetail: "Generación de imágenes y animaciones, síntesis de voz, edición automatizada y revisión de calidad; escala linealmente en series.",
      clientPrice: "500 – 2.000 € / pieza",
      clientPriceDetail: "Tarifas de volumen para series de más de 10 piezas.",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "visualizacion",
      number: "07",
      name: "Visualización Avanzada de Datos Científicos",
      subtitle: "Datos complejos convertidos en relatos visuales de impacto",
      trl: "TRL 7–8",
      tags: ["Data", "Infografía", "Ciencia Abierta"],
      viability: "Alta",
      description: "Transformación de conjuntos de datos complejos (estadísticas, modelos climáticos, datos epidemiológicos, resultados de ensayos clínicos) en piezas audiovisuales de visualización dinámica que hacen comprensibles las tendencias, patrones y conclusiones científicas para audiencias no expertas. El servicio combina diseño de información, motion graphics y narración científica para convertir tablas y gráficos convencionales en relatos visuales impactantes y rigurosos. Especialmente indicado para la comunicación de resultados de investigación, memorias institucionales, informes de impacto y campañas de sensibilización basadas en evidencia.",
      includes: [
        "Diseño de información asistido por IA",
        "Motion graphics sobre datos reales",
        "Narración científica integrada",
        "Indicado para memorias e informes de impacto"
      ],
      costEstimate: "500 – 1.500 € / pieza",
      costDetail: "Tratamiento de datos, diseño de información asistido por IA, animación y narración; variable según volumen y complejidad del dataset.",
      clientPrice: "1.500 – 5.000 € / pieza",
      clientPriceDetail: "",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "transmedia",
      number: "08",
      name: "Serie Transmedia de Divulgación",
      subtitle: "Un mismo conocimiento, todas las plataformas",
      trl: "TRL 6–7",
      tags: ["Multiplataforma", "Comunidad", "EdTech"],
      viability: "Alta",
      description: "Formato narrativo distribuido simultáneamente en múltiples plataformas (televisión, redes sociales, podcast, web interactiva) con piezas complementarias que amplían el universo de conocimiento central. Cada plataforma aporta una capa diferente de profundidad: el vídeo ofrece la narrativa principal, el podcast profundiza en entrevistas, las redes sociales generan comunidad y la web interactiva proporciona datos y recursos descargables. Este modelo multiplica el alcance de la divulgación científica, adaptando el mensaje al contexto y hábito de consumo de cada audiencia sin perder coherencia editorial.",
      includes: [
        "Diseño de universo narrativo multiplataforma",
        "Vídeo, podcast, RRSS y web interactiva",
        "Coordinación editorial integrada",
        "Piloto de validación disponible"
      ],
      costEstimate: "2.500 – 7.000 € / temporada",
      costDetail: "Diseño editorial multiplataforma, producción de piezas por canal y coordinación; parte del contenido generado con IA.",
      clientPrice: "6.000 – 18.000 € / temporada",
      clientPriceDetail: "Piloto de validación desde 2.500 €.",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "gamificado",
      number: "09",
      name: "Contenido Educativo Gamificado",
      subtitle: "Mecánicas de juego al servicio de la divulgación",
      trl: "TRL 5–6",
      tags: ["Gamificación", "Jóvenes", "Museos"],
      viability: "Alta",
      description: "Diseño y producción de piezas audiovisuales y experiencias interactivas que aplican mecánicas de juego (puntos, niveles, retos, narrativa de progreso) para facilitar el aprendizaje y la divulgación científica. El servicio va desde la producción de vídeos con elementos gamificados integrados hasta el desarrollo de microjuegos web o aplicaciones móviles ligeras orientadas a la exploración de contenidos académicos. La gamificación aumenta significativamente la retención del conocimiento y el tiempo de interacción del usuario, convirtiéndose en una palanca estratégica para instituciones que buscan llegar a audiencias jóvenes con contenidos de ciencia, historia o tecnología.",
      includes: [
        "Diseño de mecánicas y niveles",
        "Vídeos gamificados o microjuegos web",
        "Alta retención de conocimiento",
        "Modelos de licenciamiento disponibles"
      ],
      costEstimate: "3.000 – 10.000 €",
      costDetail: "Diseño de mecánicas, desarrollo de interfaz interactiva o microjuego y producción audiovisual asociada; horquilla inferior para vídeos gamificados, superior para microjuegos web.",
      clientPrice: "8.000 – 25.000 €",
      clientPriceDetail: "Variable según si es vídeo gamificado, microjuego web o aplicación móvil.",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "documental",
      number: "10",
      name: "Documental Interactivo",
      subtitle: "El espectador decide cómo explorar el conocimiento",
      trl: "TRL 6–7",
      tags: ["Educación", "Cultura", "Museos"],
      viability: "Alta",
      description: "Producción audiovisual no lineal en la que el espectador puede tomar decisiones narrativas o explorar ramas temáticas alternativas. Combina vídeo de calidad profesional con interfaces digitales que permiten la navegación entre contenidos, aportando una experiencia inmersiva especialmente eficaz para explicar procesos científicos complejos, fenómenos sociales o trayectorias históricas. Cada pieza se desarrolla bajo metodología de design thinking, con diagnóstico previo de las necesidades del cliente, mapa de ramificaciones narrativas, prototipado de la interfaz y validación con audiencias reales antes de la producción definitiva.",
      includes: [
        "Narrativa no lineal con ramas temáticas",
        "Interfaz de navegación interactiva",
        "Validación con audiencias reales",
        "Distribución en plataformas OTT"
      ],
      costEstimate: "4.000 – 12.000 €",
      costDetail: "Producción de las ramas narrativas con apoyo de IA generativa, desarrollo de interfaz de navegación y pruebas de usuario.",
      clientPrice: "10.000 – 28.000 €",
      clientPriceDetail: "",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "eventos",
      number: "11",
      name: "Producción Integral de Eventos Científicos en Directo",
      subtitle: "Del evento al ecosistema audiovisual permanente",
      trl: "TRL 7–8",
      tags: ["Congresos", "Directo", "Institucional"],
      viability: "Alta",
      description: "Servicio de producción audiovisual completa para congresos, jornadas, seminarios y actos institucionales de carácter científico o académico, que abarca tanto la cobertura del evento en directo como la producción de los materiales audiovisuales previos y derivados que amplían su alcance e impacto. La propuesta se articula en tres fases: preproducción (entrevistas a ponentes, teasers, materiales de contexto), realización en directo (multicámara, streaming, grafismo, archivo) y posproducción (resúmenes, video-abstracts, repositorio completo). El resultado es un ecosistema audiovisual cohesionado que transforma un evento puntual en un activo de comunicación científica duradero y reutilizable.",
      includes: [
        "Preproducción: entrevistas, teasers, piezas previas",
        "Realización en directo: multicámara y streaming",
        "Posproducción: resúmenes, video-abstracts, repositorio",
        "Servicio 360° con profundidad editorial científica"
      ],
      costEstimate: "5.000 – 14.000 €",
      costDetail: "Preproducción de materiales previos, equipo técnico de realización en directo y posproducción del repositorio; variable según días de evento y volumen de contenidos derivados.",
      clientPrice: "12.000 – 32.000 €",
      clientPriceDetail: "En función del número de días, ponentes, idiomas y materiales derivados requeridos.",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    },
    {
      id: "xr",
      number: "12",
      name: "Experiencia Inmersiva en Realidad Extendida (XR)",
      subtitle: "VR, AR y MR para visualizar lo que los formatos convencionales no pueden",
      trl: "TRL 5–6",
      tags: ["VR/AR", "Inmersivo", "I+D"],
      viability: "Media-alta",
      description: "Desarrollo de piezas audiovisuales en realidad virtual (VR), realidad aumentada (AR) o realidad mixta (MR) que sitúan al usuario en el interior del contenido científico o educativo. Esta modalidad permite visualizar fenómenos a escala microscópica o astronómica, recrear entornos históricos o simular procesos industriales y científicos con un nivel de comprensión imposible de alcanzar mediante formatos convencionales. El servicio comprende el diseño de la experiencia, el desarrollo del prototipo en plataformas como Unity o Unreal Engine, la validación pedagógica con usuarios y la entrega de la versión final adaptada a los dispositivos del cliente.",
      includes: [
        "Diseño de experiencia inmersiva",
        "Desarrollo en Unity / Unreal Engine",
        "Validación pedagógica con usuarios",
        "Compatible con Meta Quest y Apple Vision Pro"
      ],
      costEstimate: "8.000 – 25.000 €",
      costDetail: "Diseño de experiencia, modelado 3D o vídeo 360, desarrollo en Unity/Unreal y pruebas con usuarios; la IA reduce tiempos de modelado y texturizado pero el desarrollo sigue siendo intensivo.",
      clientPrice: "18.000 – 55.000 €",
      clientPriceDetail: "Variable según plataforma objetivo, nivel de interactividad y volumen de contenidos.",
      priceNote: "Los precios son orientativos y se negociarán con cada cliente según alcance, complejidad y contexto de cada proyecto"
    }
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
        { name: "Programa #LearnOnTikTok", url: "https://www.tiktok.com/tag/LearnOnTikTok" },
        { name: "Instagram Reel 1", url: "https://www.instagram.com/reels/DWUX7wokTJE/", embed: true },
        { name: "Instagram Reel 2", url: "https://www.instagram.com/reels/DWUX7wokTJE/", embed: true },
        { name: "YouTube Short 1", url: "https://www.youtube.com/shorts/VOZS5LV9bBw", embed: true },
        { name: "YouTube Short 2", url: "https://www.youtube.com/shorts/7T3F6uixAnM", embed: true },
        { name: "TikTok MIT 1", url: "https://www.tiktok.com/@mit/video/7434572183743204654", embed: true },
        { name: "TikTok MIT 2", url: "https://www.tiktok.com/@mit/video/7297257256834403627", embed: true }
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
    },
    {
      id: "video-abstract",
      name: "Video-abstract científico",
      category: "hibrido",
      type: "Resumen audiovisual de artículo",
      audience: "Comunidad académica y público interesado",
      objective: "Aumentar descubrimiento, comprensión rápida y difusión de resultados científicos.",
      definition:
        "Pieza breve (habitualmente 1-4 minutos) que resume pregunta, método, hallazgos e implicaciones de un artículo para acompañar su publicación.",
      technical: [
        "Guion muy sintetizado orientado a claridad y transferencia.",
        "Edición ligera con gráficos/tablas clave del paper.",
        "Subtítulos y/o transcripción para accesibilidad y consumo sin audio.",
        "Entrega en formato .mp4 y adaptación para web/redes."
      ],
      production:
        "Equipo mínimo: autor/a o portavoz + apoyo editorial/audiovisual para guion, grabación y edición.",
      costLabel: "0.2-6k EUR por pieza",
      timeLabel: "1-7 días",
      interactivityLevel: 1,
      scalabilityLevel: 4,
      costIndex: 3,
      timeIndex: 3,
      pros: [
        "Mejora la comprensión inicial de trabajos complejos.",
        "Facilita difusión en redes académicas e institucionales.",
        "Funciona como puente entre artículo técnico y audiencia ampliada."
      ],
      risks: [
        "Riesgo de simplificación excesiva de resultados.",
        "Variabilidad de criterios técnicos entre revistas/editoriales."
      ],
      metrics: [
        "Visualizaciones, retención y clics al DOI/artículo completo.",
        "Altmetric Attention Score y menciones sociales.",
        "Descargas o lecturas del artículo tras publicación del video-abstract."
      ],
      examples: [
        { name: "Wiley - Video Abstract Guidelines", url: "https://authors.wiley.com/author-resources/Journal-Authors/Promotion/author-provided-video-abstracts.html" },
        { name: "The Plant Journal - Video Abstracts", url: "https://onlinelibrary.wiley.com/journal/1365313x/tpjvideoabstracts" },
        { name: "PLOS ONE - eficacia de video abstracts", url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0224697" }
      ],
      references: [
        "Video abstracts and plain language summaries are more effective than graphical abstracts and published abstracts (PLOS ONE, 2020).",
        "Video Abstracts in Research (2024, revisión y recomendaciones prácticas).",
        "Guías editoriales de video-abstract en Wiley y Taylor & Francis."
      ]
    }
  ]
};
