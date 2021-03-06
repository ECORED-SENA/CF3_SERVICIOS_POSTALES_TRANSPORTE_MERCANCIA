export default {
  global: {
    componenteFormativo: 'Consolidación de objetos postales y mercancías',
    descripcionCurso:
      'Mediante este componente, el aprendiz podrá asimilar y aplicar el proceso de consolidación de objetos postales y mercancías, dentro de la cadena logística. Se afianzará en el manejo oportuno de envíos de corta, mediana y larga distancia, accesibles para empresas pequeñas, y su posterior envío al destinatario final, con un solo transporte o en una sola dirección a diversos clientes.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Alistamiento de pedidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Productos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Planificación de pedidos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Documentos asociados al alistamiento y almacenaje',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Zonas del almacén ',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de pedidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Organización de pedidos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Dispositivos de apoyo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Elaboración de registros',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Verificación de la mercancía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Servicio, mercancía y objeto postal',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Métodos de verificación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Clasificación de mercancía de acuerdo a novedad',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Herramientas digitales',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Generalidades bases de datos',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Reporte de novedades e inconsistencias',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      referencia: 'Campo, A. (2013). Operaciones de almacenaje. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Colombia compra eficiente (2011). Guía para la codificación de bienes y servicios. Gobierno Nacional de Colombia',
      link: '',
    },
    {
      referencia:
        'Flamarique, S. (2017). Gestión de operaciones de almacenaje. Marge Books.',
      link: '',
    },
    {
      referencia:
        'Gómez, J.M. (2013). Gestión Logística y Comercial. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (2005). Fundamentos y Vocabulario. (ISO 9000).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (MINTIC, 2020). Plan de Modernización Sector Postal 2020_2024. MinTIC.',
      link: '',
    },
    {
      referencia:
        'MINTIC (2015). Decreto Único Reglamentario sector TIC. Gobierno Nacional.',
      link: '',
    },
    {
      referencia:
        'Monzó, J. (2005). Almacenaje de productos. McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Peña, A. & Hernández, R. (2018). Cadena de suministro 4.0. Beneficios y retos de las tecnologías. Marge Books.',
      link: '',
    },
    {
      referencia:
        'Rubio, J. (2013). Gestión y pedido de stock. Ministerio de Educación y Formación Profesional de España.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Consolidación',
      significado:
        'Agrupación de mercancías procedentes de diferentes zonas de picking, en envíos más pequeños. Permite un ahorro en costos de transporte',
    },
    {
      termino: 'Encomienda',
      significado:
        'Servicio obligatorio para el Operador Postal Oficial o Concesionario de correo, que consiste en la recepción, clasificación, transporte y entrega no urgente, de objetos Postales, mercancías, paquetes o cualquier artículo de permitida circulación en el territorio nacional o internacional, con o sin valor declarado, con peso máximo de hasta un peso de 30 kg.',
    },
    {
      termino: '<em>Layout</em>',
      significado:
        'Etapa previa al diseño, la organización distribuye el espacio sobre plano e identifica las diferentes zonas de la bodega',
    },
    {
      termino: 'Logística',
      significado:
        'Conjunto de actividades necesarias para prestar un servicio, desde la compra, empaquetado, transporte, envío y entrega de un producto al cliente final.  Cómo llevo de la manera más eficiente y eficaz la mercancía a los clientes.',
    },
    {
      termino: 'Nota de entrega',
      significado:
        'Documento que acredita la entrega de la mercancía en las condiciones inicialmente pactadas',
    },
    {
      termino: '<em>Packing</em>',
      significado:
        'Actividad que realiza un equipo de operarios al momento de preparar los pedidos, consiste en la recogida y consolidación de cargas no unitarias que componen el pedido de un cliente',
    },
    {
      termino: '<em>Picking</em>',
      significado: 'Acondicionamiento y empaque de pedidos',
    },
    {
      termino: 'Servicio postal',
      significado:
        'Prestación de servicio en recepción, clasificación, transporte y entrega de mercancía',
    },
    {
      termino: 'SGA',
      significado:
        'Sistema de Gestión del Almacén, encargado de gestionar ubicaciones de los objetos o mercancía postal, los equipos y talento humano.',
    },
    {
      termino:
        'UNSPSC - <em>The United Nations Standard Products and Services Code</em>',
      significado:
        'Código Estándar de Productos y Servicios de Naciones Unidas:  Metodología uniforme de codificación utilizada para clasificar productos y servicios fundamentada en un arreglo jerárquico y en una estructura lógica.',
    },
  ],
  complementario: [
    {
      texto:
        'Gobierno de Colombia. (2011). Guía para la codificación de bienes y servicios de acuerdo con el código estándar de productos y servicios de Naciones Unidas, V.14.080. ',
      tipo: 'Guía',
      descarga: '/downloads/documento-1.pdf',
    },
    {
      texto:
        'Decreto 1078 de 2015. [Ministerio de las Tecnologías de la información y las comunicaciones]. Por medio del cual se expide el Decreto Único Reglamentario del Sector de Tecnologías de la Información y las Comunicaciones. Mayo 26 de 2015.',
      tipo: 'Decreto',
      descarga: '/downloads/documento2.pdf',
    },
    {
      texto:
        'Monzó, J. (2005). Almacenaje de productos. McGraw-Hill Interamericana.',
      tipo: 'Libro (capitulo 1)',
      descarga: '/downloads/documento4.pdf',
    },
    {
      texto:
        'Ministerio de las Tecnologías de la información y las comunicaciones (2020). Plan de Modernización, sector postal 2020-2024.  ',
      tipo: 'Plan',
      descarga: '/downloads/documento3.pdf',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gloria Esperanza Silva Guarín',
        cargo: 'Experta temática',
        centro: 'Centro de Gestión Industrial – Distrito capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja Regional Tolima',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mayerly Pérez Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
