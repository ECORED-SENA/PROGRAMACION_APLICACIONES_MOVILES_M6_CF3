<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Estructura de un proyecto en android studio

    p(data-aos="fade-up") #[strong Las actualizaciones en Android Studio avanzan muy rápido, para este componente los ejemplos que se muestran son para la versión 4.1.3]

    p.mt-4(data-aos="fade-up") En Android Studio, un proyecto contiene todos los elementos necesarios para el desarrollo de una APP: desde código fuente y recursos, hasta código de prueba y configuraciones de compilación. Al iniciar un nuevo proyecto, Android Studio crea la estructura necesaria para todos los archivos y los muestra en la ventana #[em Project] del lado izquierdo del IDE (haz clic en View > Tool Windows > Project >), o con su acceso directo Alt +1. Observe la estructura en la siguiente imagen:

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 1] Imagen estructura de proyecto en Android Studio

    figure.mt-5.m-auto.col-md-6
      img(src="@/assets/curso/tema1/1.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Ahora bien, las vistas de proyectos de Android, o la  visualización de la estructura de archivos del proyecto completa se hace por la opción Project del menú desplegable en la parte superior de la ventana, como se muestra a continuación.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 2] Vista estructura del proyecto

    figure.mt-5.m-auto.col-md-6
      img(src="@/assets/curso/tema1/11.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Los proyectos de Android Studio tienen unos componentes principales que se explican en el siguiente video, los cuales se distribuyen entre:

    ul.mt-4(style="padding:revert;list-style:disc")
      li(data-aos="fade-up") Modulos y
      li(data-aos="fade-up") Archivos de proyecto

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/upyzIois6xA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_1 1.1 Manifest

    p(data-aos="fade-up") En el manifest se encuentra la información esencial de una aplicación para las herramientas de creación de Android, el sistema operativo Android y #[em Google Play].

    p.mt-4(data-aos="fade-up") El manifest es un archivo en lenguaje XML y se definen aspectos principales de la aplicación, como por ejemplo su identificación (nombre, icono, estilos), sus componentes (pantallas, servicios) o los permisos necesarios para su ejecución. 

    p.mt-4(data-aos="fade-up") #[strong A continuación, se enuncian algunas de las cosas más importantes que se deben declarar en el archivo manifest:]

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 3] Archivo Manifest

    ImagenInfografica.color-secundario.mt-5.col-md-9.m-auto

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/2.svg', alt='Texto que describa la imagen')

      .tarjeta.tarjeta__1.p-3(x="28%" y="5%")
        .h4.mb-2 Nombre del paquete
        p El nombre del paquete debe coincidir con el nombre del paquete básico que se crea cuando se inicia un nuevo proyecto y, sirve como un ID que permite identificar de manera exclusiva la APP en el dispositivo y en #[em Google Play Store].
      
      .tarjeta.tarjeta__1.p-3(x="86%" y="25%")
        .h4.mb-2 Permisos
        p Las aplicaciones en Android deben solicitar permisos para acceder a datos restringidos del usuario o del sistema, por ejemplo: permisos de contactos, mensajes del sistema como la cámara, acceso a internet, etc.
      
      .tarjeta.tarjeta__1.p-3(x="62%" y="40%")
        .h4.mb-2 Iconos y etiquetas
        p En el manifest se configura el icono que tendrá la aplicación a través de la etiqueta icon al igual que el nombre de la aplicación con la etiqueta label.
      
      .tarjeta.color-acento-botones.p-3(x="25%" y="71%")
        .h4.mb-2 #[em Activity]
        p Uno de los componentes principales que se encuentran declarados en el manifest son las actividades, la etiqueta #[strong &lt;activity&gt;] declara el componente de una actividad.
    

    br
    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="fade-up" style="background: linear-gradient(#ffca28, #bd8f00)")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3(data-aos="fade-up" style="color: #12263F !important;") Amplia tus conocimientos 
              p.mt-3(style="color: #12263F !important;") A continuación, puede ampliar información más detallada sobre manifest, para esto visite la página:
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" href="https://developer.android.com/guide/components/fundamentals?hl=es-419#Components" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-file-download(style="color: #12263F !important;")

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_2 1.2 Java

    p(data-aos="fade-up") La carpeta java contiene todo el código fuente de la aplicación separados por paquetes, clases interfaces, pojos, etc. Inicialmente, Android Studio crea el código básico de la pantalla (actividad o activity) principal de la aplicación, que por defecto se llamará MainActivity, y siempre bajo la estructura del paquete java definido durante la creación del proyecto.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 4] Clase MainActivity de la carpeta java

    figure.mt-5.col-md-11.m-auto
      img.image_floating(src="@/assets/curso/tema1/4.svg" data-aos="fade-up")

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_3 1.3 Res

    p(data-aos="fade-up") En esta carpeta se encuentran todos los recursos del proyecto sin código, como diseños XML, #[em strings] de IU y también imágenes de mapa de bits, divididos en subdirectorios.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 5] Imagen estructura carpeta res

    figure.mt-5.col-md-6.m-auto
      img.image_floating(src="@/assets/curso/tema1/5.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 6] Subcarpeta drawable

    .row.mt-3
      .col-md-5.mb-3
        figure
          img.image_floating(src="@/assets/curso/tema1/6.svg" data-aos="fade-left")

      .col-md-7
        .p-5.caja__1.caja_flotante_azul(style="background-color:#A9EBF4;position:relative;" data-aos="fade-right")
          p(data-aos="fade-up") #[strong Subcarpeta drawable:]  /res/drawable: contiene las imágenes que se van a usar en la aplicación los formatos que soporta son (png,jpg,gif).

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 7] Subcarpeta mipmap

    .row.mt-3
      .col-md-5.mb-3
        figure
          img.image_floating(src="@/assets/curso/tema1/7.svg" data-aos="fade-left")

      .col-md-7
        .p-5.caja__2.caja_flotante_rosada(style="background-color:#FFF1C7;position:relative;" data-aos="fade-right")
          p(data-aos="fade-up") #[strong Subcarpeta mipmap:] /res/mipmap contiene los iconos que se van a utilizar en la aplicación para las diferentes densidades de las pantallas existentes, al igual que la carpeta drawable se divide en subcarpetas dependiendo de la densidad de la pantalla.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 8] Subcarpeta layout

    .row.mt-3
      .col-md-5.mb-3
        figure
          img.image_floating(src="@/assets/curso/tema1/8.svg" data-aos="fade-left")

      .col-md-7
        .p-5.caja__1.caja_flotante_azul(style="background-color:#A9EBF4;position:relative;" data-aos="fade-right")
          p(data-aos="fade-up") #[strong Subcarpeta layout:]  /res/layout en esta carpeta se define el diseño de la interfaz de usuario, el formato del archivo es en XML.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 9] Subcarpeta values

    .row.mt-3
      .col-md-5.mb-3
        figure
          img.image_floating(src="@/assets/curso/tema1/9.svg" data-aos="fade-left")

      .col-md-7
        .p-5.caja__2.caja_flotante_rosada(style="background-color:#FFF1C7;position:relative;" data-aos="fade-right")
          p(data-aos="fade-up") #[strong Subcarpeta values:] /res/values: esta carpeta contiene archivos XML que contienen valores simples, como strings, temas y colores.

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_4 1.4 Gradle

    p(data-aos="fade-up") El gradle permite la compilación del proyecto, en este es posible configurar la versión del SDK que Android utiliza para compilar, la mínima versión de Android que soportará la aplicación, referencias a las librerías externas utilizadas, etc.

    p.mt-4(data-aos="fade-up") En un proyecto pueden existir varios ficheros build.gradle, para definir determinados parámetros a distintos niveles. Por ejemplo, la imagen muestra un build.gradle a nivel de proyecto, y otro a nivel de módulo dentro de la carpeta /app. El primero de ellos definirá parámetros globales a todos los módulos del proyecto, y el segundo sólo tendrá efecto para cada módulo en particular.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 10] Gradle Scripts

    figure.mt-4.m-auto.col-md-8
      img.image_floating(src="@/assets/curso/tema1/10.svg" data-aos="fade-up")

    br
    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="fade-up" style="background: linear-gradient(#ffca28, #bd8f00)")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3(data-aos="fade-up" style="color: #12263F !important;") Amplia tus conocimientos 
              p.mt-3(style="color: #12263F !important;") A continuación, puede ampliar información más detallada sobre gradle, para esto visite la página:
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" href="https://developer.android.com/studio/releases/gradle-plugin?hl=es#updating-gradle" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-file-download(style="color: #12263F !important;")

    .tarjeta.text-white.p-3.mt-4.col-md-10.m-auto(data-aos="fade-up" style="background: linear-gradient(#ffca28, #bd8f00)")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3(data-aos="fade-up" style="color: #12263F !important;") Cómo ejecutar tu app
              p.mt-3(style="color: #12263F !important;") Configuración del celular para emulación visita:
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" href="https://developer.android.com/training/basics/firstapp/running-app?hl=es-419" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-file-download(style="color: #12263F !important;")



</template>

<script>
export default {
  name: 'Tema1',
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
  transform: scale(1.06)
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
.tarjeta.tarjeta__1
  background-color: #FFF1C7
.img-infografica__item
  width: 3.5% !important
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after
  background-color: #FFCA28
.caja__1:before
  content: ''
  left: -19px
  width: 0px
  height: 0px
  border-top: 20px solid transparent
  border-bottom: 20px solid transparent
  border-right: 20px solid #a9ebf4
  position: absolute
.caja__2:before
  content: ''
  left: -19px
  width: 0px
  height: 0px
  border-top: 20px solid transparent
  border-bottom: 20px solid transparent
  border-right: 20px solid #FFF1C7
  position: absolute
</style>
