<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1  Navegación (intents)

    p(data-aos="fade-up") La navegación entre pantallas en Android se realiza a través de los Intent. El Intent es básicamente una intención de hacer una acción, es la forma de comunicación en Android, que permite interactuar componentes de la misma aplicación o entre diferentes aplicaciones (#[em Activities], #[em Services], Broadcasts, etc.) #[br] Existen dos tipos de Intents:


    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.caja_flotante_azul(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema4/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-5.caja_escalada_hover(style="background-color: rgb(255 255 255 / 95%);")
            p(data-aos="fade-up") #[strong Intent explícito:] se utilizan para llamar a un componente específico: Por ejemplo, se tiene una aplicación que contiene 2 actividades. Actividad A y Actividad B y la aplicación requiere navegar desde la Actividad A hasta la Actividad B. En este caso, se define una intención explícita. #[br] Para ello se utiliza la clase Intent donde se le especifica donde está y a dónde quiere ir.

            p.mt-3.mb-0(data-aos="fade-up") #[strong Intent intent = new Intent (ActividaA.this, ActivityB.class);]
            p(data-aos="fade-up") #[strong startActivity(intent);]

            p.mt-4.mb-0(data-aos="fade-up") #[strong  El startActivity lanza el intent.]

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 32] Uso intent Explicito

    figure.mt-5.col-md-8.m-auto
      img.image_floating(src="@/assets/curso/tema4/2.svg" data-aos="fade-up")

    figcaption.col-md-3.mt-5(data-aos="fade-up") Nota: Android developer

    p.mt-5(data-aos="fade-up") La figura 32, muestra cómo se usa una intent para iniciar una actividad. Cuando el objeto Intent nombra un componente de actividad específico de forma explícita, el sistema inicia ese componente al instante.

    .mt-5.p-5.caja_flotante_azul(style="background-color:#DBFBFF")
      p(data-aos="fade-up") #[strong Intent Implícito:]  a diferencia de los explícitos, los intent implícitos no nombran el componente específico. Se usan para iniciar un componente específico de la aplicación, por ejemplo, si se quiere mostrar al usuario la cámara, una ubicación de un mapa o una página #[em Web] se usan los intent implícitos para solicitar que se muestran estos servicios.

      p.mt-4.mb-0(data-aos="fade-up") Ejemplo:
      p.mb-0.mt-1(data-aos="fade-up") #[strong Intent intent = new Intent (Intent.ACTION_VIEW, Uri.parse(“http://www.example.com”));]
      p(data-aos="fade-up") #[strong startActivity(intent);]

      p.mt-3(data-aos="fade-up") Lo que se hace en el ejemplo es llamar a la acción de visualización de una página web.

    br
    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="fade-up" style="background: linear-gradient(#ffca28, #bd8f00)")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3(data-aos="fade-up" style="color: #12263F !important;") Amplia tus conocimientos
              p.mt-3(style="color: #12263F !important;") A continuación, puede ampliar información más detallada sobre Intent Explícito, para esto te invitamos a visitar la página:
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" href="https://www.youtube.com/watch?v=LEVXzsXhO0A" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-file-download(style="color: #12263F !important;")

    .tarjeta.text-white.p-3.mt-4.col-md-10.m-auto(data-aos="fade-up" style="background: linear-gradient(#ffca28, #bd8f00)")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3(data-aos="fade-up" style="color: #12263F !important;") Amplia tus conocimientos
              p.mt-3(style="color: #12263F !important;") Y para ampliar la información sobre Intent implícito, puedes visitar la página
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" href="https://www.youtube.com/watch?v=tU2ZZng7FnI" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-file-download(style="color: #12263F !important;")







</template>

<script>
export default {
  name: 'Tema4',
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
