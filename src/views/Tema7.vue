<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Administración educativa
    p.mb-4(data-aos="fade-left") La administración educativa es clave para el funcionamiento eficaz de las instituciones educativas.

    .row.justify-content-center.mb-2
      .col-lg-10.col-12
        .bloque-texto-f.color-primario.pt-4.px-5.mb-0
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          .bloque-texto-f__autor.mb-3.p-4
            h4.mb-4 Según Martínez (2012)
            h5.text-regular.bloque-texto-f__texto se trata de la capacidad para organizar, dirigir y gestionar recursos de manera que se optimice el proceso de enseñanza-aprendizaje. La administración debe adaptarse a las necesidades cambiantes de los alumnos y a las exigencias del entorno social y educativo.
        
    p.mb-4(data-aos="fade-left") De acuerdo con Kaufman (2004), citado en Martínez (2012), las etapas de la administración educativa se describen de la siguiente manera:

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Etapas de la administración educativa.</i>
        figure.desktop
          img(src='@/assets/curso/temas/tema7/1.svg', alt='En la figura 1 se presentan las etapas de la administración educativa, que incluye: identificación de problemas, determinación de necesidades, estrategias de solución, implantación, evaluación y revisión.')
        figure.movil
          img(src='@/assets/curso/temas/tema7/1_.svg', alt='En la figura 1 se presentan las etapas de la administración educativa, que incluye: identificación de problemas, determinación de necesidades, estrategias de solución, implantación, evaluación y revisión.')
    p(data-aos="fade-left") Estas recomendaciones aseguran que la administración educativa no solo se base en prácticas establecidas, sino también en enfoques y herramientas actuales que respondan a las demandas y contextos contemporáneos.
    
    separador
    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Planeación educativa

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Caracterización del grupo de estudiantes" :icono="require('@/assets/curso/temas/tema7/2.svg')")
        .row.p-4
          .col-md-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema7/3.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.mb-3
            h4 Caracterización del grupo de estudiantes
            p Antes de iniciar cualquier proceso formativo, es crucial conocer a fondo a los estudiantes. Esto incluye identificar sus necesidades de formación, estilos de aprendizaje, y la adaptación de los currículos a sus características específicas. Además, se deben considerar los lineamientos institucionales y la legislación vigente para asegurar que el plan de formación sea relevante y conforme a las normativas. En Colombia, se recomienda utilizar herramientas de diagnóstico y evaluación proporcionadas por el Ministerio de Educación y el SENA, además de aplicar enfoques pedagógicos basados en la Ley General de Educación (Ley 115 de 1994) y otras normativas actuales.
      .py-4.py-md-5(titulo="Diseño del entorno formativo" :icono="require('@/assets/curso/temas/tema7/4.svg')")
        .row.p-4
          .col-md-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema7/5.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.mb-3
            h4 Diseño del entorno formativo
            p Una vez caracterizado el grupo de estudiantes, se debe definir el entorno o espacio donde se llevará a cabo la formación. Esto implica la selección y adecuación de medios, recursos, ambientes y material didáctico que se utilizarán durante el proceso formativo. En Colombia, es esencial considerar las condiciones actuales de las instalaciones, la accesibilidad para todos los estudiantes, y la disponibilidad de tecnologías educativas que apoyen el aprendizaje. Además, debe cumplir con las normativas y estándares del Ministerio de Educación y el SENA para asegurar un ambiente de aprendizaje efectivo y seguro.
      .py-4.py-md-5(titulo="Implementación de recursos y medios" :icono="require('@/assets/curso/temas/tema7/6.svg')")
        .row.p-4
          .col-md-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema7/7.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.mb-3
            h4 Implementación de recursos y medios
            p Es importante asegurar que todos los recursos y medios necesarios estén disponibles y sean adecuados para el proceso formativo. Esto incluye la selección de tecnologías educativas, herramientas didácticas, y materiales que faciliten el aprendizaje. En Colombia, la implementación debe considerar las recomendaciones del Ministerio de Educación y del SENA en cuanto a la calidad y accesibilidad de los recursos, adaptándolos a las necesidades específicas del grupo de estudiantes y del contexto educativo.
      .py-4.py-md-5(titulo="Monitoreo y evaluación del proceso formativo" :icono="require('@/assets/curso/temas/tema7/8.svg')")
        .row.p-4
          .col-md-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema7/9.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.mb-3
            h4 Monitoreo y evaluación del proceso formativo
            p Durante la ejecución del plan de formación, se debe realizar un seguimiento continuo para evaluar el progreso y la efectividad del proceso. Esto incluye la aplicación de herramientas de evaluación y la recopilación de retroalimentación de los estudiantes. En Colombia, se debe alinear el monitoreo y la evaluación con los estándares y directrices establecidos por el Ministerio de Educación y el SENA, utilizando métodos de evaluación que reflejen las realidades y necesidades del entorno educativo actual.
      .py-4.py-md-5(titulo="Ajustes y mejoras continuas" :icono="require('@/assets/curso/temas/tema7/10.svg')")
        .row.p-4
          .col-md-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema7/11.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.mb-3
            h4 Ajustes y mejoras continuas
            p Basado en la evaluación y retroalimentación recibida, se deben hacer ajustes y mejoras continuas al plan de formación para optimizar su efectividad. En Colombia, estos ajustes deben tener en cuenta las recomendaciones del Ministerio de Educación y el SENA, así como las tendencias emergentes en el ámbito educativo para asegurar que el plan de formación siga siendo pertinente y eficaz.
    separador
    #t_7_2.titulo-segundo.color-acento-contenido
      h2 7.2 Normativa legal
    p.mb-4(data-aos="fade-left") La educación es un pilar fundamental para el desarrollo social, cultural y económico de un país. No solo se encarga de transmitir conocimientos de una generación a otra, sino que también debe integrar estrategias que garanticen una formación integral y el mejor desempeño posible.
    p.mb-4(data-aos="fade-left") En Colombia, la principal normativa que rige el sistema educativo es la Ley 115 de 1994 (Ley General de Educación). Esta ley establece los lineamientos para la educación en todos sus niveles, desde la educación básica hasta la educación superior, y se complementa con diversas normativas y programas que orientan el desarrollo educativo en el país. 
    
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <i>Normativas y programas actuales.</i>
        figure.desktop
          img(src='@/assets/curso/temas/tema7/12.svg', alt='En la figura 2 se muestran las principales normas y programas vigentes que se aplican en la administración educativa en Colombia.')
        figure.movil
          img(src='@/assets/curso/temas/tema7/12_.svg', alt='En la figura 2 se muestran las principales normas y programas vigentes que se aplican en la administración educativa en Colombia.')
    
    p(data-aos="fade-left") Las normativas educativas en Colombia se ajustan y actualizan periódicamente para responder a los cambios en el contexto social y económico, y para alinearse con los estándares internacionales. Es fundamental que los proyectos educativos, pedagógicos y de aula se ajusten a estas normativas y reflejen las necesidades y tendencias actuales en la educación.

    separador
    #t_7_3.titulo-segundo.color-acento-contenido
      h2 7.3 Normativa internacional
    
    p.mb-4(data-aos="fade-left") La educación global presenta una variedad de enfoques y sistemas, reflejando la diversidad de contextos culturales, económicos y sociales en los que se implementa. A nivel internacional, cada país desarrolla su propio sistema educativo, adaptado a sus necesidades y prioridades. Sin embargo, existen sistemas educativos que se destacan por su eficiencia y calidad, y que sirven de referencia para otros países.

    .row.justify-content-center(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema7/13.svg', alt='Imagen decorativa')
            
          h4.text-center Finlandia
          p El sistema educativo finlandés es ampliamente reconocido por su eficacia y calidad. Se caracteriza por un enfoque en la igualdad educativa, la autonomía de los profesores, y el énfasis en el aprendizaje basado en la competencia y el bienestar del estudiante. Finlandia promueve una educación personalizada y el desarrollo de habilidades críticas y creativas, manteniendo bajos niveles de estandarización y pruebas.

        .col-md.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema7/14.svg', alt='Imagen decorativa')
            
          h4.text-center Corea del Sur
          p El sistema educativo de Corea del Sur es conocido por su alta competitividad y resultados académicos sobresalientes. Se enfoca en la excelencia académica mediante un riguroso sistema de pruebas y una fuerte inversión en educación. La educación en Corea del Sur pone un fuerte énfasis en la preparación para los exámenes y el logro académico, con un alto grado de involucramiento de las familias.

    .row.justify-content-center.align-items-center
      .col-lg-7.col-12.mb-3
        p.mb-4(data-aos="fade-left") <b>Influencia en Colombia</b>: en el contexto colombiano, aunque se toman muchos referentes internacionales, se observa una notable influencia de los modelos educativos de Chile. Esta influencia se refleja en varios aspectos del sistema educativo colombiano, incluidos los enfoques pedagógicos y la estructuración de los currículos. La educación en Colombia adapta elementos de los modelos chilenos para mejorar sus propios procesos educativos y responder a las necesidades locales.
        p(data-aos="fade-left") <b>Adaptación de modelos internacionales</b>: en Colombia y en otros países se realiza teniendo en cuenta las particularidades y necesidades locales. Estos modelos proporcionan marcos de referencia y prácticas efectivas que pueden ser adaptadas y modificadas para alinearse con los contextos nacionales específicos. 
      .col-lg-5.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema7/15.png', alt='Imagen decorativa')

    separador
    #t_7_4.titulo-segundo.color-acento-contenido
      h2 7.4 Ley 115 de 1994
    
    p.mb-4(data-aos="fade-left") La Ley 115 de 1994, expedida el 8 de febrero, es el principal marco normativo de la educación en Colombia. Esta ley establece los principios y lineamientos fundamentales para el sistema educativo del país, definiendo los niveles y tipos de educación, así como los derechos y deberes de los estudiantes y docentes. Ha sido complementada por varias leyes y decretos para abordar áreas específicas de la educación:

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/16.svg' alt='AvatarTop')
        h4.text-center Ley 1014 de 2006
        p.text-center Promueve la cultura del emprendimiento, integrando aspectos de formación empresarial y emprendedora en el currículo educativo.
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/17.svg' alt='AvatarTop')
        h4.text-center Ley 1014 de 2006
        p.text-center Promueve la cultura del emprendimiento, integrando aspectos de formación empresarial y emprendedora en el currículo educativo.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/18.svg' alt='AvatarTop')
        h4.text-center Ley 1014 de 2006
        p.text-center Promueve la cultura del emprendimiento, integrando aspectos de formación empresarial y emprendedora en el currículo educativo.
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/19.svg' alt='AvatarTop')
        h4.text-center Ley 1014 de 2006
        p.text-center Promueve la cultura del emprendimiento, integrando aspectos de formación empresarial y emprendedora en el currículo educativo.

    separador
    #t_7_5.titulo-segundo.color-acento-contenido
      h2 7.5 Decreto 4904 de 2009
    
    p.mb-4(data-aos="fade-left") El Decreto 4904 de 2009 regula aspectos específicos de la educación para el trabajo y el desarrollo humano. Establece directrices sobre: 

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p Los nombres y clasificaciones de los programas educativos.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p Los perfiles de ingreso y salida de los estudiantes al mundo laboral.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p Los contenidos y competencias a desarrollar en los programas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 4
          p Los procesos de evaluación y la relación con el contexto comunitario.

    separador
    #t_7_6.titulo-segundo.color-acento-contenido
      h2 7.6 Otras legislaciones
    
    .container.BGIMG02.px-4.px-md-5.pt-4
      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center
            .col-lg-4.col-12.mb-3
              figure
                img(src='@/assets/curso/temas/tema7/20.svg', alt='Imagen decorativa')
            .col-lg-8.col-12
              p En el ámbito internacional, las normas ISO juegan un papel crucial en la regulación de la calidad educativa. Estas normas determinan los estándares de idoneidad para productos y procesos, promoviendo la calidad y la mejora continua en los contextos educativos. Las normas ISO proporcionan un marco para la gestión de calidad que puede ser aplicado a nivel nacional e internacional en diversos ámbitos educativos.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
