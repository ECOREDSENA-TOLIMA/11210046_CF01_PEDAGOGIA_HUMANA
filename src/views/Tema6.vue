<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Plan de formación
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un plan de formación en el contexto colombiano es un documento estratégico que orienta la capacitación y el desarrollo de competencias de individuos en diversos ámbitos, desde la educación hasta el ámbito laboral. Su objetivo principal es mejorar las habilidades y conocimientos necesarios para alcanzar metas profesionales y organizacionales.
    
    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Componentes
    p.mb-(data-aos="fade-left") Para garantizar su eficacia y relevancia, es fundamental considerar diversos componentes que aseguren un enfoque integral y adaptado a las necesidades de los participantes. A continuación, se presentan los componentes esenciales que constituyen un plan de formación efectivo, los cuales abordan desde la identificación de necesidades hasta la evaluación y ajuste del proceso formativo.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span <i>Componentes del plan de formación.</i>

    .tabla-a.clstabla.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Componentes
            th Definición
            th Cumplimiento con directrices nacionales
        tbody
          tr
            td.text-bold.text-center Objetivos de Formación
            td.text-center Establecen lo que se pretende lograr con el plan de formación. Deben ser específicos, medibles, alcanzables, relevantes y con un tiempo definido (SMART).
            td El niño es el centro de la formación, y todos los elementos pedagógicos se adaptan a él. Promueve la enseñanza intuitiva.
          tr
            td.text-bold.text-center Contenidos
            td.text-center Comprenden los temas y habilidades que se van a enseñar. Los contenidos deben adaptarse a los requerimientos del mercado laboral y a los estándares educativos vigentes.
            td Los contenidos deben estar alineados con los programas de formación del SENA, los lineamientos del Ministerio de Educación y los estándares del sector productivo.
          tr
            td.text-bold.text-center Metodología
            td.text-center Describe los métodos y técnicas que se utilizarán para impartir la formación. Incluye métodos presenciales, virtuales y mixtos.
            td La metodología debe considerar las nuevas tecnologías y la educación a distancia, especialmente después de la pandemia COVID-19, que aceleró el uso de plataformas digitales.
          tr
            td.text-bold.text-center Recursos
            td.text-center Incluyen materiales, herramientas y equipos necesarios para la formación. Pueden ser físicos o digitales.
            td Incorporación de recursos digitales y plataformas educativas en línea como Moodle, Google Classroom, y recursos proporcionados por el Ministerio de Educación y SENA.
          tr
            td.text-bold.text-center Evaluación
            td.text-center Métodos para medir el progreso y el éxito del plan de formación. Incluye evaluaciones formativas y sumativas.
            td La evaluación debe cumplir con los estándares nacionales de calidad y debe integrar herramientas digitales para la evaluación en línea.
          tr
            td.text-bold.text-center Duración
            td.text-center Tiempo requerido para completar el plan de formación. Debe ser suficiente para cubrir todos los contenidos de manera efectiva.
            td La duración debe ajustarse a los tiempos establecidos por las entidades reguladoras como el Ministerio de Educación y el SENA, considerando la modalidad (presencial o virtual).
          tr
            td.text-bold.text-center Seguimiento y Apoyo
            td.text-center Estrategias para apoyar a los participantes después de la formación. Incluye asesorías y mentorías.
            td El seguimiento puede incluir la implementación de redes de apoyo y seguimiento a egresados, promovido por instituciones como el SENA y universidades.
          tr
            td.text-bold.text-center Actualización
            td.text-center Procedimientos para mantener el plan de formación relevante y eficaz. Incluye revisiones periódicas y ajustes basados en retroalimentación.
            td Asegurarse de que el plan esté en consonancia con las actualizaciones del marco normativo y los cambios en el mercado laboral y educativo.

    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Procedimientos

    .tarjeta.tarjeta3.p-4
      SlyderB.p-4.mb-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Identificación de necesidades',
        texto:
          'Evaluar las necesidades de formación a través de encuestas, análisis de desempeño y estudios de mercado. Se debe utilizar herramientas y datos proporcionados por el Ministerio de Educación, el SENA y entidades del sector productivo para una evaluación precisa.',
        imagen: require('@/assets/curso/temas/tema6/2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diseño del plan',
        texto:
          'Crear el plan de formación incluyendo objetivos, contenidos, metodología y recursos. Se debe incorporar lineamientos del Ministerio de Educación y el SENA para garantizar la alineación con los estándares nacionales.',
        imagen: require('@/assets/curso/temas/tema6/3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Implementación',
        texto:
          'Ejecutar el plan de formación según lo diseñado. Coordinar con los facilitadores y asegurar la disponibilidad de recursos. Se debe adaptar la implementación a las modalidades actuales (presencial, virtual o híbrida) y cumplir con las normativas sanitarias y de seguridad.',
        imagen: require('@/assets/curso/temas/tema6/4.png'),
      },
      {
        titulo: 'Evaluación continua',
        texto:
          'Realizar evaluaciones periódicas del progreso de los participantes y del cumplimiento de los objetivos del plan. Se debe utilizar herramientas de evaluación en línea y métodos adaptados a las nuevas realidades del entorno educativo y laboral.',
        imagen: require('@/assets/curso/temas/tema6/5.png'),
      },
      {
        titulo: 'Revisión y ajuste',
        texto:
          'Revisar los resultados de la evaluación y hacer ajustes necesarios para mejorar el plan de formación. Se debe alinear los ajustes con las directrices del Ministerio de Educación y del SENA, así como con las tendencias y demandas emergentes en el mercado laboral.',
        imagen: require('@/assets/curso/temas/tema6/6.png'),
      },
      {
        titulo: 'Reporte y documentación',
        texto:
          'Documentar el proceso de formación, resultados y recomendaciones para futuras iteraciones del plan. Se debe asegurar que la documentación cumpla con los requisitos legales y administrativos del Ministerio de Educación y otras entidades pertinentes.',
        imagen: require('@/assets/curso/temas/tema6/7.png'),
      },
    ],
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
