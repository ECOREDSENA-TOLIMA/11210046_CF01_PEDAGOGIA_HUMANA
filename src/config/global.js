export default {
  global: {
    componenteFormativo: 'Aspectos pedagógicos y planeación formativa',
    descripcionCurso:
      'La pedagogía, originada en la Antigua Grecia, busca guiar a los aprendices para formar grandes individuos. Este material de formación contextualiza al aprendiz en componentes pedagógicos, planeación formativa y proyectos educativos. Los planes de formación son esenciales en la educación, determinando la estructura y recursos. Se abordan conceptos para diseñar planes según el PEI y la legislación colombiana.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Concepto sobre pedagogía y su historia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pedagogía en la Edad Antigua',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Educación en la Edad Media',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Educación en la Edad Contemporánea',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Pedagogía de hoy',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias pedagógicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Los estilos de aprendizaje',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'El modelo VAK',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelos pedagógicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de modelos pedagógicos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Autores, modelos y características',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Pedagogía y didáctica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Componentes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Relación entre pedagogía y docencia',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Inducción al plan de formación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Administración educativa',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Proyecto Educativo Institucional (PEI)',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Plan de formación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Componentes',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Procedimientos',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Administración educativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Planeación educativa',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Normativa legal',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Normativa internacional',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Ley 115 de 1994',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Decreto 4904 de 2009',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Otras legislaciones',
            hash: 't_7_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_11210046_DU.pdf',
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
  complementario: [
    {
      tema: 'Modelos pedagógicos',
      referencia:
        'Obando, A. A. (2022). Modelo pedagógico SENA [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7ESEw3A2w4U',
    },
    {
      tema: 'Administración educativa',
      referencia: 'Ministerio de Educación Nacional. (s.f.). Normograma.',
      tipo: 'Página web',
      link: 'https://www.mineducacion.gov.co/portal/Normatividad/',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'es el proceso mediante el cual se adquieren o modifican conocimientos, habilidades, actitudes o valores a través del estudio, la experiencia, la enseñanza o la observación. Es una actividad constante que permite a los individuos adaptarse a su entorno y desarrollar competencias personales y profesionales.',
    },
    {
      termino: 'Capacitación',
      significado:
        'es la disciplina que se encarga de estudiar y diseñar los métodos y técnicas de enseñanza. Su objetivo es optimizar el proceso educativo, facilitando la transmisión de conocimientos y habilidades de manera efectiva y adaptada a las necesidades de los estudiantes.',
    },
    {
      termino: 'Didáctica',
      significado:
        'es la actividad profesional que realizan los docentes o profesores, centrada en la enseñanza y la formación de estudiantes. Involucra la planificación, ejecución y evaluación de procesos educativos, con el fin de facilitar el aprendizaje y el desarrollo integral de los alumnos.',
    },
    {
      termino: 'Docencia',
      significado:
        'es el proceso de formación y desarrollo de habilidades y conocimientos específicos, generalmente en el ámbito laboral. Su propósito es mejorar el desempeño y la productividad de los individuos, preparándolos para cumplir con las demandas y expectativas de sus roles y funciones en el trabajo.',
    },
    {
      termino: 'Kinestésico',
      significado:
        'se refiere a un estilo de aprendizaje o una modalidad sensorial que se basa en el movimiento y la experiencia física. Las personas kinestésicas aprenden mejor a través de actividades prácticas, manipulativas y de movimiento, como experimentos, construcciones y actividades deportivas.',
    },
    {
      termino: 'Metodología:',
      significado:
        'es el conjunto de métodos, técnicas y procedimientos utilizados para realizar una investigación, desarrollar un proyecto o llevar a cabo un proceso educativo. En el contexto de la educación, la metodología se refiere a las estrategias y enfoques didácticos empleados por los docentes para facilitar el aprendizaje de los estudiantes.',
    },
    {
      termino: 'Normatividad',
      significado:
        'es el conjunto de normas, leyes, regulaciones y disposiciones que rigen una actividad o un ámbito específico. En el contexto educativo, la normatividad incluye todas las leyes y reglamentos que establecen los lineamientos y estándares para la organización y funcionamiento del sistema educativo.',
    },
    {
      termino: 'Pedagogía',
      significado:
        'es la ciencia y el arte de la educación. Estudia los principios, métodos y técnicas de enseñanza con el objetivo de desarrollar teorías y prácticas educativas efectivas. La pedagogía abarca diversos enfoques y disciplinas, buscando siempre mejorar el proceso de enseñanza-aprendizaje y contribuir al desarrollo integral de los individuos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguirre, M., Camacho, T., Flórez, T., Gaibao, D., Murcia, G., & Pasive, Y. (2012). Estrategias pedagógicas en el ámbito educativo.',
    },
    {
      referencia:
        'Asociación Mundial de Educadores Infantiles (AMEI – WAECE). (2012). Diccionario pedagógico AMEI – WAECE.',
      link: 'http://www.waece.org/diccionario/index.php',
    },
    {
      referencia:
        'Bandler, R., & Grinder, J. (1985). La estructura de la magia II: Un libro sobre la metamorfosis de la experiencia. Barcelona: Ediciones Obelisco.',
    },
    {
      referencia:
        'Blogger. (2019, marzo 6). Estilos de aprendizaje. MODELO VAK. En el artículo se menciona a Neil Fleming.',
      link:
        'https://educa5team.blogspot.com/2019/03/estilos-de-aprendizaje.html',
    },
    {
      referencia: 'Concepto.de. (2015). Concepto de pedagogía.',
      link: 'http://concepto.de/pedagogia/',
    },
    {
      referencia:
        'Contreras, O., y Bosque, A. (2004). Aprender con estrategia. México: PAX México.',
    },
    {
      referencia:
        'De Cero a Siempre (s.f.). Atención integral a la primera infancia.',
      link: 'https://deceroasiempreterritorial.icbf.gov.co/',
    },
    {
      referencia:
        'Gómez, M., y Polania, H. (2008). Estilo de enseñanza y modelo pedagógico.',
    },
    {
      referencia:
        'Función Pública. Ley 1014 de 2006. Congreso de la Republica.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=18924 ',
    },
    {
      referencia:
        'ICONTEC. (s.f.). Los beneficios de las normas técnicas en tu vida diaria.',
      link:
        'https://www.icontec.org/normalizacion/los-beneficios-de-las-normas-tecnicas-en-tu-vida-diaria/',
    },
    {
      referencia: 'Martínez, L. (2012). Administración educativa.',
      link:
        'https://www.aliat.click/BibliotecasDigitales/Educacion/Administracion_educativa.pdf',
    },
    {
      referencia:
        'Mialaret, G. (1984). Diccionario de ciencias de la educación. Oikos-Tau.',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2007). Aprendizajes para mejorar: Guía para la gestión de buenas prácticas (Guía 28).',
      link:
        'http://www.mineducacion.gov.co/1621/articles-124660_archivo_pdf.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Decreto 4904 de 2009.',
      link:
        'https://www.mineducacion.gov.co/1621/articles-216551_archivo_pdf_decreto4904.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Normograma: Ley 115 de 1994, Ley 1064 de 2006, Ley 1295 de 2009, Ley 1324 de 2009, Decreto 1860 de 1994 y Decreto 1075 de 2015.',
      link: 'https://www.mineducacion.gov.co/portal/Normatividad/',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Plan Nacional Decenal de Educación.',
      link:
        'https://www.mineducacion.gov.co/portal/micrositios-institucionales/Plan-Nacional-Decenal-de-Educacion-2016-2026/',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Proyecto educativo institucional (PEI).',
      link: 'https://www.mineducacion.gov.co/1621/article-79361.html',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (s.f.). Normalización de competencias laborales SENA.',
      link:
        'https://www.sena.edu.co/es-co/Empresarios/paginas/competenciaslaborales.aspx',
    },
    {
      referencia:
        'Universidad Camilo José Cela. (2002). Enciclopedia de pedagogía. Espasa Calpe.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Olga Marcela Valencia Gómez',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios – Regional Caldas',
        },
        {
          nombre: 'Lina María Franco Arbeláez ',
          cargo: 'Experta temática ',
          centro: 'Centro Agroindustrial – Regional Quindío',
        },
        {
          nombre: 'Luz Clarena Arias González',
          cargo: 'Guionista de línea de producción',
          centro: 'Centro Agroindustrial. Regional Quindío',
        },
        {
          nombre: 'Andrés Felipe Vargas Correa ',
          cargo: 'Asesor pedagógico ',
          centro: 'Centro Agroindustrial – Regional Quindío',
        },
        {
          nombre: 'Martha Lucía Giraldo Ramírez',
          cargo: 'Líder de planificación y adecuación didáctica',
          centro: 'Centro Agroindustrial – Regional Quindío',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES ',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
