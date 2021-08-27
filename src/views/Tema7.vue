<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1  Multimedia

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.caja_flotante_azul(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.text-center
            img.imagen_flotante_animada(src="@/assets/curso/tema7/1.svg" style="display:inline;max-width:150px;")
        .col-lg-8
          .bloque-texto-a__texto.p-5.caja_escalada_hover(style="background-color: rgb(255 255 255 / 95%);")
            p(data-aos="fade-up") En Android Studio la integración de contenido multimedia en las aplicaciones es muy sencilla gracias a las opciones que nos presenta la API. Las principales clases que facilitan el acceso a los servicios multimedia son MediaPlayer, VideoView, además de ser los más usados.

    br
    br
    .titulo-segundo.mt-5
      h2#t_7_1 7.1 MediaPlayer

    p(data-aos="fade-up") Permite reproducir sonido y video a través de su API.

    p.mt-4(data-aos="fade-up") MediaPlayer es uno de los componentes principales del marco de trabajo de medios. Un objeto de esta clase puede recuperar, decodificar y reproducir audio y video con una configuración mínima. Es compatible con varias fuentes de medios diferentes, entre las que se incluyen las siguientes: uri, recursos locales, url externas.

    p.mt-4(data-aos="fade-up") #[strong A continuación, se presenta un ejemplo de cómo reproducir un archivo de audio que está disponible como recurso local (ubicado en el directorio res/raw/ de tu app)]

    div.mt-5.indicador__container(active="true")
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title)
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Reproduccción de un archivo de audio
              .indicador--click
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  1. Crear un directorio dentro de la carpeta res #[br] llamada raw
            b-card-text
              figure
                img(src="@/assets/curso/tema7/2.svg" style="max-width:500px;")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 41] Creación directorio raw

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  2. Copiar un sonido en la carpeta raw de #[br] extensión mp3.
            b-card-text

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  3. En la clase Java escribe el siguiente código.
            b-card-text
              figure
                img(src="@/assets/curso/tema7/3.svg" style="max-width:500px;")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 42] Declaración variable Media Player
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p 3. En la clase Java escribe el siguiente código.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  4. Se crea la instancia del Sonido.
            b-card-text
              figure
                img(src="@/assets/curso/tema7/4.svg" style="max-width:500px;")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 43] Instancia Media Player
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Se crea la instancia del Sonido.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  5. Ejecución del Sonido.
            b-card-text
              figure
                img(src="@/assets/curso/tema7/5.svg" style="max-width:500px;")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 44] Ejecutar el Sonido
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Ejecución del Sonido.

    p.mt-5(data-aos="fade-up") En la figura 42, se declara una variable de tipo MediaPlayer.

    p.mt-2(data-aos="fade-up") En la figura 43, se crea la instancia del sonido y almacena el sonido ubicado en la carpeta raw

    p.mt-2(data-aos="fade-up") En la figura 44, se ejecuta el sonido con el método #[em start]. 


    br
    br
    .titulo-segundo.mt-5
      h2#t_7_2 7.2 VideoView

    p(data-aos="fade-up") La clase VideoView permite mostrar un archivo de video. La clase VideoView puede cargar videos de varias fuentes (como recursos o proveedores de contenido) La propiedad principal de VideoView es el setVideoURI donde se establece la ruta del video a mostrar.

    p.mt-4(data-aos="fade-up") #[strong A continuación, se realiza un ejemplo para mirar el funcionamiento del VideoView.]

    p.mt-5(data-aos="fade-up") #[strong 1.] Al igual que con el MediaPlayer se debe crear la carpeta raw y guardar en esta carpeta el video de extensión mp4. carpeta res/raw

    p(data-aos="fade-up") #[strong 2.] En el Layout se crea el componente VideoView.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 45] Código XML VIdeoView

    figure.mt-4.col-md-6.m-auto
      img.image_floating(src="@/assets/curso/tema7/6.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") #[strong 3.] En la clase Java se realiza todo el código descrito paso a paso en la figura 62.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 46] Código Java VideoView

    figure.mt-4.col-md-9.m-auto
      img.image_floating(src="@/assets/curso/tema7/7.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Al ejecutar se mostrará de la siguiente manera

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 47] Vista Ejecución VideoView

    figure.mt-4.col-md-4.m-auto
      img.image_floating(src="@/assets/curso/tema7/8.svg" data-aos="fade-up")




</template>

<script>
export default {
  name: 'Tema7',
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
