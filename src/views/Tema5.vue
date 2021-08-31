<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1  Tareas asíncronas

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.caja_flotante_azul(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.text-center
            img.imagen_flotante_animada(src="@/assets/curso/tema5/1.svg" style="display:inline;max-width:150px;")
        .col-lg-8
          .bloque-texto-a__texto.p-5.caja_escalada_hover(style="background-color: rgb(255 255 255 / 95%);")
            p(data-aos="fade-up") Todos los componentes de una aplicación Android, tanto las actividades, los servicios, o los broadcasts #[em receivers] se ejecutan en el mismo hilo de ejecución, el llamado hilo principal, main thread o GUI thread, que como éste último nombre indica también es el hilo donde se ejecutan todas las operaciones que gestionan la interfaz de usuario de la aplicación. Es por ello, que cualquier operación larga o costosa que se realice en este hilo va a bloquear la ejecución del resto de componentes de la aplicación y por supuesto también la interfaz, produciendo al usuario un efecto evidente de lentitud, bloqueo, o mal funcionamiento en general.

    br
    p.mt-5(data-aos="fade-up") #[strong Android utiliza la clase AsyncTack para ejecutar tareas de segundo plano.]

    p.mt-3(data-aos="fade-up") La forma básica de utilizar la clase AsyncTask consiste en crear una nueva clase que extienda de ella y sobrescribir varios de sus métodos entre los que repartiremos la funcionalidad de nuestra tarea. Estos métodos son los siguientes:

    .row.mt-5
      .col-md-4.mb-3
        .p-5.caja_flotante.caja_escalada_hover(style="background-color:#FFCA28;height:100%;")
          h4(data-aos="fade-up") onPreExecute ().

          p.mt-4(data-aos="fade-up") Se ejecutará antes del código principal de nuestra tarea. Se suele utilizar para preparar la ejecución de la tarea, inicializar la interfaz, etc.

      .col-md-4.mb-3
        .p-5.caja_flotante_azul.caja_escalada_hover(style="background-color:#4DD0E1;height:100%;")
          h4(data-aos="fade-up") doInBackground ().

          p.mt-4(data-aos="fade-up") Contendrá el código principal de nuestra tarea.

      .col-md-4.mb-3
        .p-5.caja_flotante.caja_escalada_hover(style="background-color:#FFCA28;height:100%;")
          h4(data-aos="fade-up") onProgressUpdate ().

          p.mt-4(data-aos="fade-up") Se ejecutará cada vez que llamemos al método publishProgress () desde el método doInBackground ()

      .col-md-4.mb-3
        .p-5.caja_flotante_azul.caja_escalada_hover(style="background-color:#4DD0E1;height:100%;")
          h4(data-aos="fade-up") onPostExecute (). 

          p.mt-4(data-aos="fade-up") Se ejecutará cuando finalice nuestra tarea, o, dicho de otra forma, tras la finalización del método doInBackground ()

      .col-md-4.mb-3
        .p-5.caja_flotante.caja_escalada_hover(style="background-color:#FFCA28;height:100%;")
          h4(data-aos="fade-up") onCancelled ().

          p.mt-4(data-aos="fade-up") Se ejecutará cuando se cancele la ejecución de la tarea antes de su finalización normal.

    p.mt-5(data-aos="fade-up") Estos métodos tienen una particularidad esencial para nuestros intereses. El método doInBackground () se ejecuta en un hilo secundario (por tanto, no se puede interactuar con la interfaz), pero sin embargo todos los demás se ejecutan en el hilo principal, lo que quiere decir que dentro de ellos se pueden hacer referencia directa a los controles de usuario para actualizar la interfaz.

    br
    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="fade-up" style="background: linear-gradient(#ffca28, #bd8f00)")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3(data-aos="fade-up" style="color: #12263F !important;") Tareas asincronas
              p.mt-3(style="color: #12263F !important;") El ejemplo de las tareas asíncronas se puede ver en los anexos “Ejemplo Tareas Asíncronas”
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" :href="obtenerLink('downloads/Ejemplo_Tareas_Asincronas.pdf')" target="_blank")
                span(style="color: #12263F !important;") Descargar
                i.fas.fa-file-download(style="color: #12263F !important;")








</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {},
}
</script>
<style lang="sass">
.image_floating
  filter: drop-shadow(10px 5px 4px rgba(0,0,0,.1))
@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(26px 9px 1px rgba(0, 0, 0, 0.09))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06) !important
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
.bloque-texto-a.color-secundario
  background-color: #F3F9FF !important
.title__tab_1 .pre
  background-color: #FFCA28
  padding: 1rem 1.5rem 1rem 1.5rem
  border-radius: 50%
  color: inherit
  font-weight: bold
  font-size: 1.3rem
  position: relative
  left: calc(100% - 147%)
  top: 2.3rem
.title__tab_1 .title
 background-color: #4DD0E1
 padding: 1rem 1rem 1rem 2rem
 border-radius: 30px
.title__tab_1
  transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -webkit-transition: transform 0.4s linear
.title__tab_1:hover
  transition: transform .4s ease
  transform: scale(1.1)
.nav-link
  border: none !important
.nav-link.active .title__tab_1 .pre

.nav-link.active .title__tab_1 .title
  color: white
  background-color: #1565C0
.caja__mostrar
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
.caja__mostrar:hover
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
  transform: scale(1.04)
.bloque-texto-a.color-secundario:before
  background-color: #A9EBF4
.pasos-a.color-primario .pasos-a__circle
  background-color: #4DD0E1
.pasos-a.color-primario .pasos-a__circle div
  color: white
.pasos-a.color-primario .pasos-a__numero::after
  border-left-color: #4DD0E1
.pasos-a.color-primario .pasos-a__linea .hor-line
  border-top-color: #4dd0e1
.pasos-a.color-primario .pasos-a__linea__esquina__linea
  border-color: #4dd0e1
.bloque-texto-a:before
  left: 44% !important
.tabla__1 td,.tabla__1 th
  border: 0
.bloque-texto-a.color-primario
  background-color: #F3F9FF
.caja__1
  text-align: center
.boton__1
  background-color: #FFCA28
  padding: .8rem 2.5rem
  font-weight: bold
  border-radius: 0px
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
  max-width: 150px
  margin: 0 auto
.boton__1:hover
  opacity: .9
  box-shadow: 0px 9px 10px rgba(0,0,0,.2)
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
.tabla__1 th,.tabla__1 td
  padding: 1.1rem
.anexo *
  color: #12263f !important
.card
  border:0 !important
.card-header
  background-color: #F3F9FF !important
.nav-link
  color: #1565C0 !important
  background-color: #f3f9ff !important
  border-top: 1px #B2E6FF solid !important
  border-radius: 0px !important
.nav-pills
  border-top: 9px #B4E2F8 solid !important
.nav-link:first-child
  border-top:0px !important
.nav-link.active
  font-weight:bold !important
.card-body
  padding: 0px
.tabla__1 th,.tabla__1 td
  padding: 1.1rem
</style>
