<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Pedagogía y didáctica
    
    p.mb-4(data-aos="fade-left") Cuando se habla de modelos pedagógicos es preciso hacerlo del método que los sustenta, es decir, la pedagogía o el arte de enseñar en toda su magnitud. Los modelos pedagógicos definen la forma en que se efectuará la transferencia de conocimientos de una generación a otra. Sin embargo, estos modelos deben recurrir a métodos, técnicas y didácticas para que los docentes puedan apoyarse y asegurar que los conocimientos que comparten sean entendibles para sus estudiantes.

    .row.justify-content-center.align-items-center 
      .col-lg-5.col-10.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/1.png', alt='Imagen decorativa')
      .col-lg-7.col-10.mb-3
        .cajon.cajon1.p-3
          p(data-aos="fade-left") La pedagogía, entendida como el estudio de los métodos y técnicas de enseñanza, se complementa con la didáctica, que es la aplicación práctica de estos métodos. La didáctica se enfoca en cómo enseñar de manera efectiva, considerando las características de los estudiantes, los objetivos educativos y el contexto de aprendizaje.
          p(data-aos="fade-left") Así, la interacción entre pedagogía y didáctica se convierte en un elemento esencial para el éxito de cualquier modelo educativo. Es esta interacción la que permite a los docentes adaptar sus métodos de enseñanza para satisfacer las necesidades individuales de sus estudiantes, utilizando diversas estrategias y recursos para facilitar el proceso de aprendizaje.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Componentes
    p.mb-4(data-aos="fade-left") El proceso educativo se compone de varios elementos clave que interactúan entre sí para crear una experiencia de aprendizaje efectiva. Estos componentes son el modelo pedagógico, los estudiantes o aprendices, los docentes y los contenidos temáticos. A través de la implementación del proceso de formación, estos elementos entran en una relación de beneficio mutuo. A continuación, se describen los principales componentes: 

    .row
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.desktop
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-xl-5
              h5.text-small Modelo pedagógico
              p.text-small Define la filosofía, los métodos y las estrategias que se utilizarán para facilitar el aprendizaje. Es el marco teórico que orienta la práctica educativa y determina cómo se llevará a cabo la transferencia de conocimientos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/2.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.desktop
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5.text-small Estudiantes o aprendices
              p.text-small Son el centro del proceso educativo. Cada estudiante tiene características únicas, incluyendo estilos de aprendizaje, intereses y necesidades individuales. Su participación activa y su interacción con los demás componentes son esenciales para el éxito del proceso educativo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/3.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.desktop
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5.text-small Docentes
              p.text-small Actúan como facilitadores del aprendizaje. Su rol es guiar, motivar y apoyar a los estudiantes en su proceso de aprendizaje. Los docentes deben ser capaces de adaptar sus métodos de enseñanza a las necesidades y características de sus estudiantes, utilizando diversas técnicas y estrategias didácticas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/4.png')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.desktop
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5.text-small Contenidos temáticos
              p.text-small Representan el conocimiento y las habilidades que se pretenden enseñar. Estos contenidos deben ser relevantes, bien estructurados y presentados de manera que sean accesibles y comprensibles para los estudiantes.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/5.png')})`}")

    .row.mb-5
      .col.movil
        .row.mb-5.justify-content-center
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.col-12.p-4
            .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor.p-5
                .tarjeta-slide__contenido.p-5.p-xl-5
                  h5.text-small Modelo pedagógico
                  p.text-small Define la filosofía, los métodos y las estrategias que se utilizarán para facilitar el aprendizaje. Es el marco teórico que orienta la práctica educativa y determina cómo se llevará a cabo la transferencia de conocimientos.
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/2.png')})`}")
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.col-12.p-4
            .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor.p-5
                .tarjeta-slide__contenido.p-5.p-xl-5
                  h5.text-small Estudiantes o aprendices
                  p.text-small Son el centro del proceso educativo. Cada estudiante tiene características únicas, incluyendo estilos de aprendizaje, intereses y necesidades individuales. Su participación activa y su interacción con los demás componentes son esenciales para el éxito del proceso educativo.
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/3.png')})`}")
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.col-12.p-4
            .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor.p-5
                .tarjeta-slide__contenido.p-5.p-xl-5
                  h5.text-small Docentes
                  p.text-small Actúan como facilitadores del aprendizaje. Su rol es guiar, motivar y apoyar a los estudiantes en su proceso de aprendizaje. Los docentes deben ser capaces de adaptar sus métodos de enseñanza a las necesidades y características de sus estudiantes, utilizando diversas técnicas y estrategias didácticas.
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/4.png')})`}")
          .col-sm-6.col-xl-3.mb-4.mb-xl-0.col-12.p-4
            .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor.p-5
                .tarjeta-slide__contenido.p-5.p-xl-5
                  h5.text-small Contenidos temáticos
                  p.text-small Representan el conocimiento y las habilidades que se pretenden enseñar. Estos contenidos deben ser relevantes, bien estructurados y presentados de manera que sean accesibles y comprensibles para los estudiantes.
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/5.png')})`}")
    
    p(data-aos="fade-left") Estos componentes interactúan dentro de un contexto específico que incluye factores sociales, culturales y económicos. La efectividad del proceso educativo depende de cómo se integran y se relacionan estos elementos, así como de los logros alcanzados a través de la formación impartida.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Relación entre pedagogía y docencia
    
    p.mb-4(data-aos="fade-left") La didáctica, como parte integral de la pedagogía, moldea la práctica educativa impartida dentro del aula y conduce al desarrollo de competencias que fomentan el aprendizaje mediante técnicas y estrategias innovadoras, creativas y motivadoras. Así, la didáctica no solo se refiere al cómo o al que se utiliza para comunicar conceptos y conocimientos educativos, sino que es una disciplina que estudia los orígenes del conocimiento apoyándose en otras ramas, lo que la convierte en una disciplina multidisciplinaria.

    .row.justify-content-center.align-items-center 
      .col-lg-5.col-10.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/6.png', alt='Imagen decorativa')
      .col-lg-7.col-10.mb-3
        .cajon.color-secundario.p-4.mb-4(style="background-color: #FFF8E7")(data-aos="flip-up")
          p(data-aos="fade-left") Para que la didáctica sea efectiva, es esencial revisar los perfiles, estilos de aprendizaje y necesidades del aprendiz o estudiante. Esto permite identificar qué factores motivan o dificultan su aprendizaje. No es suficiente contar con buenos currículos; se necesitan todos los elementos del acto educativo, como docentes o profesores y estudiantes o aprendices, que interactúan de diversas maneras según el modelo educativo elegido.
        p(data-aos="fade-left") La pedagogía ha sido objeto de numerosas teorías y propuestas por diversos autores a lo largo de la historia. Determinar cuál teoría es mejor o peor depende del aprendiz, del docente y de las necesidades o relaciones que se establezcan en el proceso de transformar y apropiarse del conocimiento. Así, la pedagogía y la docencia están intrínsecamente relacionadas y su efectividad depende de la comprensión y aplicación adecuada de estas teorías y métodos, adaptándose a los contextos y necesidades específicas de los estudiantes. 

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
