<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se describe una visión general sobre los aspectos clave de la pedagogía y la planeación formativa. Comienza con la evolución histórica de la pedagogía, desde la Edad Antigua hasta la contemporaneidad. Incluye estrategias pedagógicas, como los estilos de aprendizaje y el modelo VAK, así como diversos modelos pedagógicos y sus características. Además, se exploran los componentes de la pedagogía y la didáctica, y su relación con la docencia. También se presenta la inducción al plan de formación y el plan de formación, con sus respectivos componentes y procedimientos. Finalmente, se aborda la administración educativa, destacando la planeación educativa y la normativa legal, incluyendo legislaciones específicas.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo “Aspectos pedagógicos y planeación formativa”, se describe una visión global de la pedagogía, las estrategias aplicadas, los modelos existentes, el plan de formación y el manejo de la administración educativa en Colombia.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
