// Traducciones generales de UI
export const ui = {
  nav: {
    home: { es: "Inicio", en: "Home" },
    about: { es: "Acerca de", en: "About" },
    skills: { es: "Habilidades", en: "Skills" },
    experience: { es: "Experiencia", en: "Experience" },
    projects: { es: "Proyectos", en: "Projects" },
    contact: { es: "Contacto", en: "Contact" }
  },
  hero: {
    greeting: { es: "Hola, soy", en: "Hi, I'm" },
    downloadCV: { es: "Descargar CV", en: "Download CV" },
    contact: { es: "Contacto", en: "Contact" }
  },
  contact: {
    title: { es: "Contacto", en: "Contact" },
    subtitle: { es: "¿Tienes un proyecto en mente? ¡Hablemos!", en: "Have a project in mind? Let's talk!" },
    name: { es: "Nombre", en: "Name" },
    email: { es: "Email", en: "Email" },
    subject: { es: "Asunto", en: "Subject" },
    message: { es: "Mensaje", en: "Message" },
    send: { es: "Enviar Mensaje", en: "Send Message" },
    success: { es: "¡Mensaje enviado exitosamente!", en: "Message sent successfully!" },
    phone: { es: "Teléfono", en: "Phone" },
    location: { es: "Ubicación", en: "Location" }
  },
  projects: {
    demo: { es: "Demo", en: "Demo" },
    github: { es: "GitHub", en: "GitHub" }
  },
  footer: {
    built: { es: "Construido con", en: "Built with" },
    and: { es: "y", en: "and" }
  }
};

export const personalInfo = {
  name: "Esteban Avila",
  title: {
    es: "Ingeniero en Informática",
    en: "Computer Engineer"
  },
  description: {
    es: "Apasionado por crear experiencias digitales increíbles y soluciones tecnológicas con tecnologías modernas.",
    en: "Passionate about creating incredible digital experiences and technological solutions with modern technologies."
  },
  profileImage: "/images/profile.png",
  email: "esteban.avila.w@gmail.com",
  phone: "+56963712788",
  location: "Santiago, Chile",
  cvDocument: {
    es: "/documents/esteban-avila-cv.html",
    en: "/documents/esteban-avila-cv-en.html"
  },
  website: "https://esteban-avila-portfolio.vercel.app",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/esteban-avila-32b5b12b/",
    github: "https://github.com/eavilaw",
  }
};

export const aboutMe = {
  title: {
    es: "Acerca de Mí",
    en: "About Me"
  },
  description: {
    es: "Como ingeniero informático con más de 17+ años de experiencia, me especializo en crear aplicaciones web robustas y escalables. Mi experiencia abarca desde el desarrollo frontend  hasta soluciones backend, así como implementaciones en la nube.",
    en: "As a Computer Engineer with over 17+ years of experience, I specialize in creating robust and scalable web applications. My expertise spans from frontend development  to backend solutions, as well as cloud implementations"
  },
  stats: [
    { 
      number: "17+", 
      label: {
        es: "Años de experiencia",
        en: "Years of experience"
      }
    },
    { 
      number: "15+", 
      label: {
        es: "Proyectos completados",
        en: "Completed projects"
      }
    },
    { 
      number: "6+", 
      label: {
        es: "experiencias en organizaciones",
        en: "organization experiences"
      }
    }
  ],
  features: [
    {
      title: {
        es: "Desarrollo Web",
        en: "Web Development"
      },
      description: {
        es: "Aplicaciones web modernas y responsivas",
        en: "Modern and responsive web applications"
      }
    },
    {
      title: {
        es: "Apps Móviles", 
        en: "Mobile Apps"
      },
      description: {
        es: "Desarrollo multiplataforma con React Native",
        en: "Cross-platform development with React Native"
      }
    },
    {
      title: {
        es: "Backend APIs",
        en: "Backend APIs"
      },
      description: {
        es: "APIs robustas con Node.js y Python",
        en: "Robust APIs with Node.js and Python"
      }
    }
  ]
};

export const skills = {
  title: {
    es: "Habilidades Técnicas",
    en: "Technical Skills"
  },
  categories: [
    {
      category: {
        es: "Python", 
        en: "Python"
      },
    technologies: [
      { name: "FastAPI", level: 100 },
      { name: "SQLAlchemy", level: 100 },
      { name: "Django", level: 90 },
      { name: "Flask", level: 70 }
    ]
    },
    {
      category: {
        es: "JavaScript/Node.js",
        en: "JavaScript/Node.js"
      },
      technologies: [
        { name: "React", level: 100 },
        { name: "Next.js", level: 80 },
        { name: "Express.js", level: 60 }
      ]
    },
    {
      category: {
        es: ".NET/C#",
        en: ".NET/C#"
      },
      technologies: [
        { name: "ASP.NET Core", level: 100 },
        { name: "Web API", level: 100 },
        { name: "Entity Framework", level: 95 },
        { name: "Blazor", level: 85 }
      ]
    },
    {
      category: {
        es: "Java/Spring",
        en: "Java/Spring"
      },
      technologies: [
        { name: "Spring Boot", level: 50 },
        { name: "Spring MVC", level: 50 },
        { name: "Maven", level: 50 },
        { name: "Gradle", level: 50 }
      ]
    },
    {
      category: {
        es: "Bases de Datos",
        en: "Database"
      },
      technologies: [
        { name: "MySQL", level: 100 },
        { name: "Postgres", level: 100 },
        { name: "Oracle", level: 90 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      category: {
        es: "AWS Cloud",
        en: "AWS Cloud"
      },
      technologies: [
        { name: "EC2", level: 100 },
        { name: "ECS/Fargate", level: 100 },
        { name: "S3", level: 90 },
        { name: "IAM", level: 85 },
        { name: "API Gateway", level: 80 },
        { name: "Lambda", level: 75 },
        { name: "CloudWatch", level: 75 },
        { name: "Athena", level: 70 },
        { name: "CloudFormation", level: 65 },
        { name: "RDS", level: 60 },
        { name: "VPC", level: 60 }
      ]
    },
    {
      category: {
        es: "DevOps & Tools",
        en: "DevOps & Tools"
      },
      technologies: [
        { name: "Docker", level: 100 },
        { name: "Postman", level: 100 },
        { name: "Git", level: 95 },
        { name: "GitHub Actions", level: 90 },
        { name: "Terraform", level: 80 },
        { name: "Kubernetes", level: 65 }
      ]
    },
    {
      category: {
        es: "Testing & QA",
        en: "Testing & QA"
      },
      technologies: [
        { name: "Flake8", level: 100 },
        { name: "PyTest", level: 100 },
        { name: "Jest", level: 90 },
        { name: "Vitest", level: 90 },
        { name: "NUnit", level: 85 },
        { name: "Playwright", level: 80 },
        { name: "Tox", level: 80 }
      ]
    }
  ]
};

export const experience = {
  title: {
    es: "Experiencia Profesional",
    en: "Professional Experience"
  },
  items: [
  {
    title: {
      es: "Product Manager",
      en: "Product Manager"
    },
    company: "Grupo Z",
    period: {
      es: "Dic 2024 - Presente",
      en: "Dec 2024 - Present"
    },
    description: {
      es: "Liderazgo integral del desarrollo de una aplicación Android TV para monitoreo de conectividad domiciliaria, desde la conceptualización hasta la implementación técnica.",
      en: "Comprehensive leadership of Android TV application development for home connectivity monitoring, from conceptualization to technical implementation."
    },
    achievements: {
      es: [
        "Gestión completa del ciclo de vida del producto desde la idea inicial hasta el lanzamiento",
        "Diseño de arquitectura de solución para aplicación Android TV con capacidades de sondeo de red",
        "Liderazgo de equipos multidisciplinarios de desarrollo backend y frontend",
        "Implementación de sistema de recolección de datos de calidad de conectividad del hogar",
        "Desarrollo de estrategia de producto para optimización de servicios de conectividad residencial"
      ],
      en: [
        "Complete product lifecycle management from initial idea to launch",
        "Solution architecture design for Android TV application with network probing capabilities",
        "Leadership of multidisciplinary backend and frontend development teams",
        "Implementation of home connectivity quality data collection system",
        "Product strategy development for residential connectivity service optimization"
      ]
    }
  },
  {
    title: {
      es: "Líder Técnico",
      en: "Technical Lead"
    },
    company: "ClaroVTR",
    period: {
      es: "Ene 2022 - Nov 2024",
      en: "Jan 2022 - Nov 2024"
    },
    description: {
      es: "Liderazgo en análisis de big data y desarrollo de plataformas avanzadas para visualización ejecutiva, enfocado en identificar oportunidades de mejora y detectar errores en plataformas de televisión digital.",
      en: "Leadership in big data analysis and development of advanced platforms for executive visualization, focused on identifying improvement opportunities and detecting errors in digital television platforms."
    },
    achievements: {
      es: [
        "Procesamiento y análisis de más de 20GB de datos diarios desde AWS S3 hacia MongoDB",
        "Desarrollo de dashboards ejecutivos para visualización de gráficos utilizados por alta gerencia",
        "Creación de aplicación especializada para bloqueo efectivo de STBs no autorizados",
        "Integración completa de plataformas desde sistemas CRM hasta servidores AWS",
        "Liderazgo de equipos de desarrollo en creación de herramientas de análisis de datos",
        "Implementación de soluciones de flexibilidad y adaptabilidad para desafíos cambiantes"
      ],
      en: [
        "Processing and analysis of over 20GB daily data from AWS S3 to MongoDB",
        "Development of executive dashboards for visualization of graphics used by senior management",
        "Creation of specialized application for effective blocking of unauthorized STBs",
        "Complete platform integration from CRM systems to AWS servers",
        "Leadership of development teams in creating data analysis tools",
        "Implementation of flexibility and adaptability solutions for changing challenges"
      ]
    }
  },
  {
    title: {
      es: "Ingeniero de Proyecto",
      en: "Project Engineer"
    },
    company: "Liberty Latin America",
    period: {
      es: "Nov 2016 - Ene 2022",
      en: "Nov 2016 - Jan 2022"
    },
    description: {
      es: "Liderazgo de implementación y coordinación de proyectos de transmisión TV en vivo y VOD a través de dispositivos Android TV y aplicaciones móviles en múltiples países de América Latina.",
      en: "Leadership in implementation and coordination of live TV and VOD broadcasting projects through Android TV devices and mobile applications across multiple Latin American countries."
    },
    achievements: {
      es: [
        "Gestión de lanzamiento de producto IPTV en Puerto Rico, Chile, Panamá, Costa Rica y el Caribe",
        "Supervisión de operación y desempeño de dispositivos CPE (Android TV e iOS/Android)",
        "Garantía de seguridad mediante prácticas avanzadas de ethical hacking",
        "Diseño y documentación de casos de uso para pruebas de QA",
        "Desarrollo de herramientas de análisis de datos con Python, .NET Core, AWS y PostgreSQL",
        "Análisis de estabilidad para identificar y resolver problemas de plataforma",
        "Gestión de datos de consumo de usuarios y errores de plataforma"
      ],
      en: [
        "Management of IPTV product launch in Puerto Rico, Chile, Panama, Costa Rica and the Caribbean",
        "Supervision of CPE devices operation and performance (Android TV and iOS/Android)",
        "Security assurance through advanced ethical hacking practices",
        "Design and documentation of use cases for QA testing",
        "Development of data analysis tools with Python, .NET Core, AWS and PostgreSQL",
        "Stability analysis to identify and resolve platform issues",
        "Management of user consumption data and platform errors"
      ]
    }
  },
  {
    title: {
      es: "Ingeniero de Proyecto",
      en: "Project Engineer"
    },
    company: "VTR",
    period: {
      es: "Nov 2013 - Dic 2016",
      en: "Nov 2013 - Dec 2016"
    },
    description: {
      es: "Desarrollo de VTR OnDemand y coordinación técnica del festival Lollapalooza durante cinco años consecutivos, liderando equipos multidisciplinarios en transmisión multiplataforma.",
      en: "Development of VTR OnDemand and technical coordination of the Lollapalooza festival for five consecutive years, leading multidisciplinary teams in multiplatform broadcasting."
    },
    achievements: {
      es: [
        "Desarrollo backend y frontend de VTR OnDemand para streaming gratuito y de pago",
        "Implementación de APIs eficientes para conectividad y consumo de datos móviles/web",
        "Coordinación multidisciplinaria: Networking, Ingeniería TV, Streaming, Chile Films y Lottus",
        "Soluciones de transmisión en tiempo real para web, móviles, YouTube y canales VTR",
        "Garantía de experiencia de alta calidad para usuarios finales",
        "Liderazgo efectivo para guiar equipos hacia objetivos estratégicos"
      ],
      en: [
        "Backend and frontend development of VTR OnDemand for free and paid streaming",
        "Implementation of efficient APIs for mobile/web connectivity and data consumption",
        "Multidisciplinary coordination: Networking, TV Engineering, Streaming, Chile Films and Lottus",
        "Real-time broadcasting solutions for web, mobile, YouTube and VTR channels",
        "Assurance of high-quality experience for end users",
        "Effective leadership to guide teams towards strategic objectives"
      ]
    }
  },
  {
    title: {
      es: "Ingeniero de Software",
      en: "Software Engineer"
    },
    company: "Excelsys Soluciones SPA",
    period: {
      es: "Ene 2011 - Nov 2013",
      en: "Jan 2011 - Nov 2013"
    },
    description: {
      es: "Desarrollo de soluciones para el sector financiero y de seguros, trabajando con RSA Chile y Grupo AVAL Colombia en sistemas de banca corporativa y seguros.",
      en: "Development of solutions for the financial and insurance sector, working with RSA Chile and Grupo AVAL Colombia on corporate banking and insurance systems."
    },
    achievements: {
      es: [
        "Desarrollo del portal web Seguros Falabella con integración de pasarela WebPay",
        "Implementación de sistemas de banca corporativa para Grupo AVAL (4 subsidiarias)",
        "Desarrollo de servicios transaccionales y de consulta para Banco AV Villas, Bogotá, Popular y Occidente",
        "Integración con ATH para transacciones bancarias interbancarias en Colombia",
        "Comunicación técnica directa como punto de contacto principal con clientes",
        "Asistencia técnica especializada y revisiones para implementaciones exitosas"
      ],
      en: [
        "Development of Seguros Falabella web portal with WebPay gateway integration",
        "Implementation of corporate banking systems for Grupo AVAL (4 subsidiaries)",
        "Development of transactional and query services for Banco AV Villas, Bogotá, Popular and Occidente",
        "Integration with ATH for interbank transactions in Colombia",
        "Direct technical communication as main point of contact with clients",
        "Specialized technical assistance and reviews for successful implementations"
      ]
    }
  },
  {
    title: {
      es: "Ingeniero de Software",
      en: "Software Engineer"
    },
    company: "Tata Consultancy Services",
    period: {
      es: "Mar 2007 - Ene 2011",
      en: "Mar 2007 - Jan 2011"
    },
    description: {
      es: "Desarrollo de sistemas gubernamentales y bancarios utilizando tecnología OCR avanzada, colaborando con MINEDUC Chile, Banco Itaú y Cencosud.",
      en: "Development of government and banking systems using advanced OCR technology, collaborating with MINEDUC Chile, Banco Itaú and Cencosud."
    },
    achievements: {
      es: [
        "Desarrollo de consultas e integración para sistema SIMCE con tecnología OCR para MINEDUC",
        "Desarrollo técnico de funcionalidades en sistema Check OCR de Banco Itaú",
        "Creación de aplicación de inscripción automática para sistema Puntos Cencosud",
        "Integración fluida con servicios de revisión nacional de pruebas escritas",
        "Identificación de errores y mejoras para eficiencia en procesamiento de cheques",
        "Obtención de resultados precisos en procesamiento de documentos mediante OCR"
      ],
      en: [
        "Development of queries and integration for SIMCE system with OCR technology for MINEDUC",
        "Technical development of functionalities in Banco Itaú's Check OCR system",
        "Creation of automatic registration application for Cencosud Points system",
        "Seamless integration with national written test review services",
        "Error identification and improvements for efficiency in check processing",
        "Achievement of precise results in document processing through OCR"
      ]
    }
  }
  ]
};

export const projects = {
  title: {
    es: "Proyectos Destacados",
    en: "Featured Projects"
  },
  items: [
  {
    title: "Aplicación Android TV para Monitoreo de Conectividad",
    description: "Aplicación Android TV innovadora para sondeo de red y recolección de datos de calidad de conectividad domiciliaria, desde la conceptualización hasta la implementación completa.",
    image: "/public/images/projects/Dashboard.jpg",
    technologies: ["Android TV", "Python", "AWS", "MongoDB", "Docker"],
    company: "Grupo Z"
  },
  {
    title: "Sistema de Bloqueo de STBs No Autorizados",
    description: "Plataforma especializada para detección y bloqueo efectivo de Set-Top Boxes no autorizados, procesando más de 20GB de datos diarios desde AWS S3 hacia MongoDB.",
    image: "/public/images/projects/BloqueoSTB.jpg",
    technologies: ["Python", "AWS S3", "MongoDB", "FastAPI", "Docker"],
    company: "ClaroVTR"
  },
  {
    title: "Dashboard Ejecutivo de Analytics TV",
    description: "Dashboard avanzado para visualización ejecutiva de métricas de televisión digital, utilizado por alta gerencia para análisis de grandes volúmenes de datos y detección de oportunidades de mejora.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800",
    technologies: ["React", "Python", "AWS", "MongoDB", "D3.js"],
    company: "ClaroVTR"
  },
  {
    title: "Plataforma IPTV Multinacional",
    description: "Sistema integral de transmisión TV en vivo y Video on Demand para Android TV y aplicaciones móviles, desplegado en Puerto Rico, Chile, Panamá, Costa Rica y el Caribe.",
    image: "/public/images/projects/iptv.jpg",
    technologies: ["Android TV", "iOS", "Android", ".NET Core", "AWS", "PostgreSQL"],
    company: "Liberty Latin America"
  },
  {
    title: "VTR OnDemand - Plataforma de Streaming",
    description: "Plataforma web completa para streaming de contenido gratuito y de pago, con APIs optimizadas para aplicaciones móviles y coordinación técnica del festival Lollapalooza.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&h=800",
    technologies: ["React", "Node.js", "MySQL", "AWS", "REST APIs"],
    company: "VTR"
  },
  {
    title: "Sistema Bancario Grupo AVAL",
    description: "Implementación de criterios de desarrollo para banca corporativa en 4 subsidiarias del grupo financiero más grande de Colombia, incluyendo servicios transaccionales y de consulta.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&h=800",
    technologies: ["Java", ".NET", "SQL Server", "SOAP", "WebServices"],
    company: "Excelsys / Grupo AVAL"
  }
  ]
};