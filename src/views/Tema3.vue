<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1  Eventos listeners

    p(data-aos="fade-up") En Android para crear la interacción del usuario con la aplicación se hace a través de eventos. Por ejemplo, cuando se toca una vista (como un botón) se llama al método onTouchEvent () del objeto utilizando los objetos de escucha de eventos para detectar la interacción del usuario.

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.caja_flotante_azul(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema3/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-5.caja_escalada_hover(style="background-color: rgb(255 255 255 / 95%);")
            p(data-aos="fade-up") Los Event Listeners (objetos de escucha de eventos) son interfaces de la clase view que contienen un método de llamado el cual será invocados cuando la vista registre una interacción del usuario con el elemento de la interfaz gráfica. Esto quiere decir que los #[em view] como #[em Button], ImageView, RadioButton, Checkbox, al interactuar con el usuario el objeto escuchará y llamará al método correspondiente a estos view el cual ejecutará una acción determinada.

    p.mt-5.mb-0(data-aos="fade-up") La ejecución de los eventos se realiza en el código Java ubicado en la carpeta /java
    p(data-aos="fade-up") Para fijar un listener se debe implementar y agregar los métodos del evento correspondiente a cada view mediante el método setOn.

    p.mt-4(data-aos="fade-up") #[strong  Para realizar el ejemplo del evento listener de un Button se debe seguir algunos pasos, los cuales encontrará en la siguiente presentación interactiva:]

    div.mt-5(active="true")
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title)
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Ejemplo del evento listener #[br] de un Button
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  1. Crear el Button en el Layout con su propiedad ID #[br] ya que es la que nos va a permitir referenciarlos #[br] desde el código Java.
            b-card-text
              figure
                img(src="@/assets/curso/tema3/5.png")
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Se muestra la creación de un botón en el layout llamado activity_main.xml, el código XML tiene creado un contenedor de tipo LinearLayout con su propiedad vertical y el Button es creado con sus propiedades básicas, la propiedad que se necesita para referenciar es la del id el nombre del identificador que se colocó para el ejemplo fue btnclic, y en la vista de diseño se puede ver cómo queda el #[em button]. 

                p.mt-3 #[strong Estas son las diferentes vistas en las que se puede trabajar en el layout.]

                p.mt-3.mb-0 #[em #[strong Code]]:  permite visualizar solo el código XML
                p.mb-0 #[strong Split:] permite visualizar el código y el diseño como se ve en la figura
                p #[strong Desing:] permite visualizar solo el editor de diseño.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  2. En la clase Java declarar el tipo de view y #[br] referenciarlo.
            b-card-text
              figure
                img(src="@/assets/curso/tema3/6.png")
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p La clase en Java está compuesta por un método principal que se llama Oncreate, todo el código que esté dentro de este método se ejecuta inmediatamente se corra la aplicación.

                p.mt-3 Cada clase tiene relacionado su layout en el método setContentView por lo tanto se debe referenciar los #[em view] en cada clase que lo contenga, en el ejemplo la clase Java MainActivity contiene al layout activity_main que fue donde se creó el Button.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  3. Implementar el evento listener:
            b-card-text
              figure
                img(src="@/assets/curso/tema3/7.png")
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p En la figura se ve la implementación del evento setOnClickListener para que cuando el usuario de clic en el botón se ejecute una instrucción, el código debe escribirse en el método onClick.

                p.mt-3 Los View tiene diferentes métodos escuchadores, en la tabla que se encuentra a continuación se pueden observar los más utilizados:

                .table-responsive.mt-4(data-aos="fade-up")
                  table.tabla__1(width="100%")
                    thead
                      tr
                        th.h5(style="border-right:2px #AFAFAF solid;width:30%") View
                        th.h5(style="width:30%") Método
                    tbody
                      tr(style="background-color:#C1F8FF")
                        td(style="border-right:2px #AFAFAF solid;width:30%")
                          h6.mb-0 ListView
                        td(style="width:70%") SetOnItemClickListener
                      tr(style="background-color:#A9EBF4")
                        td(style="border-right:2px #AFAFAF solid;width:30%")
                          h6.mb-0 Spinner
                        td(style="width:70%") SetOnItemSelectedListener
                      tr(style="background-color:#C1F8FF")
                        td(style="border-right:2px #AFAFAF solid;width:30%")
                          h6.mb-0 ImageView
                        td(style="width:70%") SetOnClickListener
                      tr(style="background-color:#A9EBF4")
                        td(style="border-right:2px #AFAFAF solid;width:30%")
                          h6.mb-0 RadioButton
                        td(style="width:70%") SetOnClickListener

    br
    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="fade-up" style="background: linear-gradient(#ffca28, #bd8f00)")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3(data-aos="fade-up" style="color: #12263F !important;") Amplíe sus conocimientos
              p.mt-3(style="color: #12263F !important;") A continuación, puede ampliar información más detallada sobre view vista, para esto te invitamos a visitar la página:
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" href="https://www.youtube.com/watch?v=-z8zTGTo7vA" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-file-download(style="color: #12263F !important;")




</template>

<script>
export default {
  name: 'Tema3',
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
