<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cajon-b.color-secundario.p-3
      p(data-aos="fade-left") La orientación de procesos formativos es tan antigua como la historia de la humanidad, originándose en la Antigua Grecia con pensadores como Sócrates, Platón y Aristóteles. Estos filósofos guiaron a sus discípulos mediante diversas metodologías, formando grandes filósofos, gobernantes y ciudadanos. Este material de formación tiene como objetivo contextualizar al aprendiz en los componentes pedagógicos esenciales, permitiéndole planificar procesos formativos básicos y reconocer los elementos de institucionalidad y los proyectos educativos institucionales y pedagógicos. 
    p(data-aos="fade-left") Los planes de formación son la columna vertebral de la educación, ya que determinan la forma, intensidad, intencionalidad y recursos a utilizar en cada institución educativa. Aunque cada institución posee un currículo y contenidos temáticos específicos según el nivel o temática de la formación, el plan formativo establece cómo se deben orientar estos contenidos. Este material abordará los conceptos y elementos necesarios para diseñar un plan de formación de acuerdo con los lineamientos institucionales, el Proyecto Educativo Institucional (PEI) y la legislación vigente en Colombia, incluyendo la Ley General de Educación (Ley 115) y el Decreto 4904, que regula las instituciones de formación laboral y desarrollo humano. 
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
