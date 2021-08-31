export default {
  global: {
    componenteFormativo:
      'Construir un aplicativo según las características de la arquitectura Android',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos clave para el diseño y desarrollo de aplicaciones móviles nativas, como sus elementos, vistas, maquetación, entornos de desarrollo, lenguajes, etc.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estructura de un proyecto en Android Studio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Manifest',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Java',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Res',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Gradle',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Interfaz de usuario en Android',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Layouts',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Controles básicos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Eventos listeners',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Navegación (intents)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tareas asíncronas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Persistencia de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Bases de datos local SQLite',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Bases de datos en tiempo Real',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'MediaPlayer',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'VideoView',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Documentation | Desarrolladores de Android | Android Developers. (2021, may 24). <em>Retrieved from</em> ',
      link: 'https://developer.android.com/docs',
    },
  ],
  glosario: [
    {
      termino: 'Diseño',
      significado:
        'Un diseño define la estructura visual de una interfaz de usuario.',
    },
    {
      termino: 'Scrolling',
      termHTML: '<em>Scrolling</em>',
      significado: 'Acción de desplazarse internamente.',
    },
    {
      termino: 'SDK',
      termHTML: '<em>SDK</em>',
      significado: 'Kit de desarrollo de <em>software</em>.',
    },
    {
      termino: 'String',
      termHTML: '<em>String</em>',
      significado: 'Recurso XML que ofrece una sola <em>string</em>.',
    },
    {
      termino: 'View',
      termHTML: '<em>View</em>',
      significado: 'es la clase base de los widgets.',
    },
    {
      termino: 'Wearable',
      termHTML: '<em>Wearable</em>',
      significado:
        'Dispositivo conectado que se puede llevar puesto y que se conecta al teléfono móvil.',
    },
    {
      termino: 'XML',
      termHTML: '<em>XML</em>',
      significado: 'Lenguaje de marcado extensible.',
    },
  ],
  complementario: [
    {
      texto:
        'Introducción al desarrollo de aplicaciones móviles para Android. (2019, October 07). <em>Retrieved from</em> ',
      tipo: 'Página',
      link:
        'https://inlab.fib.upc.edu/es/cursos/introduccion-al-desarrollo-de-aplicaciones-moviles-para-android',
    },
    {
      texto: 'Android Developers. (2021, May 25). <em>Retrieved from</em> ',
      tipo: 'Página oficial',
      link: 'https://developer.android.com/?hl=es-419',
    },
    {
      texto: 'sgoliver.net. (2020, April 26). <em>Retrieved from</em> ',
      tipo: 'Página',
      link:
        'https://www.sgoliver.net/blog/estructura-de-un-proyecto-android-android-studio',
    },
    {
      texto:
        'Aspectos fundamentales de la aplicación | Desarrolladores de Android. (2020, October 07). <em>Retrieved from</em>',
      tipo: 'Página oficial',
      link:
        'https://developer.android.com/guide/components/fundamentals?hl=es-419#Manifest',
    },
    {
      texto:
        'Notas de la versión del complemento de Android para Gradle. (2021, June 14). <em>Retrieved from</em> ',
      tipo: 'Página oficial',
      link:
        'https://developer.android.com/studio/releases/gradle-plugin?hl=es#updating-gradle',
    },
    {
      texto:
        'Cómo ejecutar tu app | Desarrolladores de Android | Android Developers. (2021, June 14). <em>Retrieved from</em> ',
      tipo: 'Página oficial',
      link:
        'https://developer.android.com/training/basics/firstapp/running-app?hl=es-419',
    },
    {
      texto: 'sgoliver.net. (2020, June 04). <em>Retrieved from</em> ',
      tipo: 'Página',
      link:
        'https://www.sgoliver.net/blog/interfaz-de-usuario-en-android-layouts',
    },
    {
      texto:
        'Cómo crear una IU responsiva con ConstraintLayout. (2021, June 21). <em>Retrieved from</em> ',
      tipo: 'Página oficial',
      link:
        'https://developer.android.com/training/constraint-layout?hl=es-419',
    },
    {
      texto: 'sgoliver.net. (2020, June 04). <em>Retrieved from</em> ',
      tipo: 'Página',
      link:
        'https://www.sgoliver.net/blog/interfaz-de-usuario-en-android-controles-de-seleccion-i',
    },
    {
      texto:
        'Castillo, J. D. L. (2015, May 21). Capítulo 14 - Interacción con Botones, TextView, ImageView. Youtube. <em>Retrieved from</em> ',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/watch?v=-z8zTGTo7vA',
    },
    {
      texto:
        'Castillo, J. D. L. (2015, May 21). Capítulo 15 - Android Studio Intent Abrir una Activity. Youtube. <em>Retrieved from</em> ',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/watch?v=LEVXzsXhO0A',
    },
    {
      texto:
        'Intents y filtros de intents | Desarrolladores de Android. (2020, November 03). <em>Retrieved from</em> ',
      tipo: 'Página oficial',
      link:
        'https://developer.android.com/guide/components/intents-filters?hl=es-419',
    },
    {
      texto:
        '<em>Save data using</em> SQLite | Android Developers. (2021, June 17). <em>Retrieved from</em> ',
      tipo: 'Página oficial',
      link: 'https://developer.android.com/training/data-storage/sqlite',
    },
    {
      texto:
        'Cómo conectarse a Firebase | Desarrolladores de Android. (2020, November 24). <em>Retrieved from</em> ',
      tipo: 'Página oficial',
      link: 'https://developer.android.com/studio/write/firebase?hl=es-419',
    },
    {
      texto:
        '¿Qué es un Wearable y para qué sirve? [junio 2021]. (2021, April 13). <em>Retrieved from</em> ',
      tipo: 'Página',
      link: 'https://www.geeknetic.es/Wearable/que-es-y-para-que-sirve',
    },
    {
      texto:
        'Layouts | Android Developers. (2020, January 07). <em>Retrieved from</em> ',
      tipo: 'Página',
      link: 'https://developer.android.com/guide/topics/ui/declaring-layout',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zulema León',
        cargo: ' Experta temática',
        centro: 'Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Edición y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga ',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
