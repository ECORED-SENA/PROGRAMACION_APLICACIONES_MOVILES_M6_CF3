<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1  Persistencia de datos

    p(data-aos="fade-up") En el desarrollo móvil siempre es indispensable que las aplicaciones puedan guardar datos ya sea para no perder la información en una nueva ejecución o para manejo de información en bases de datos. La persistencia de datos es una habilidad esencial para que un desarrollador cree aplicaciones de alta calidad. #[br] Uno de los métodos más comunes de almacenamiento en Android es el de las Bases de Datos en SQLite.

    br
    br
    .titulo-segundo.mt-5
      h2#t_6_1 6.1 Bases de datos local SQLite

    p(data-aos="fade-up") SQLite es un motor de bases de datos relacional de código abierto y actualmente muy popular ya que ofrece particularidades muy útiles como su pequeño tamaño y su ligereza, no necesitar servidor, requiere poca configuración y guarda toda la base de datos en un solo fichero. #[br] Su uso es muy habitual en aplicaciones de tamaño pequeño. 

    p.mt-3(data-aos="fade-up") #[strong Android incluye soporte a SQLite y utiliza el paquete Android. database.sqlite para utilizar las bases de datos.]

    .mt-5.p-5.caja_flotante_azul(style="background-color:#DBFBFF")
      p(data-aos="fade-up") El proceso de las bases de datos inicia con la creación de la base de datos, y las tablas, se trabajan con la clase SQliteOpenHelper.

      p.mt-3(data-aos="fade-up") Para crear un esquema de base de datos o actualizar el mismo se debe crear una clase que herede de SQLiteOpenHelper, donde se implementa el constructor y dos métodos abstractos (obligatorio implementarlos) onCreate () y onUpgrade () respectivamente.

      p.mt-3(data-aos="fade-up") Por medio de los métodos getReadableDatabase y getWritableDatabase se abre y se consigue una instancia de la base de datos de sólo lectura o de lectura y escritura respectivamente. 

      p.mt-3(data-aos="fade-up") Para la creación de las tablas se ejecutan las sentencias SQL dentro del método onCreate utilizando el método db. execute.

      p.mt-3(data-aos="fade-up") Para la administración de una base de datos SQLitese utiliza la Clase SQLiteDatabase:

      p.mt-3(data-aos="fade-up") SQLiteDatabase: tiene métodos para crear, eliminar, ejecutar comandos SQL y realizar otras tareas comunes de administración de bases de datos.

    p.mt-5(data-aos="fade-up") #[strong Los métodos más utilizados son:]

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Tabla 8] Métodos de administración de bases de datos de la clase SQLiteDatabase

    .table-responsive.mt-4.col-md-10(data-aos="fade-up")
      table.tabla__1(width="100%")
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Acción
            td(style="width:70%") Método
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Insertar Datos
            td(style="width:70%") db.insert
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Consultar Datos
            td(style="width:70%") db.rawQuery() y db.query()
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Eliminar Datos
            td(style="width:70%") db.delete
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Actualizar Datos
            td(style="width:70%") db.update
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 Ejecutar sentencia SQL
            td(style="width:70%") db.execute

    p.mt-5(data-aos="fade-up") Para reflejar la utilidad de las bases de datos SQLite se realizará un ejemplo de una base de datos para registro de usuarios y de entidades, donde se tendrá una actividad de solicitud de datos para creación actualización y borrado en el BD de información almacenada de forma persistente.

    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="fade-up" style="background: linear-gradient(#ffca28, #bd8f00)")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.imagen_flotante_animada(style="max-width:100px;" src="@/assets/curso/tema1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3(data-aos="fade-up" style="color: #12263F !important;") Base de datos Sqlite en Android.
              p.mt-3(style="color: #12263F !important;") A continuación, puede consultar el ejemplo de bases de datos Sqlite, que se encuentra en los anexos del material complementario
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" :href="obtenerLink('downloads/Ejemplo Bases de DatosSqlite.pdf')" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-file-download(style="color: #12263F !important;")

    br
    br
    .titulo-segundo.mt-5
      h2#t_6_2 6.2 Bases de datos en tiempo real

    p(data-aos="fade-up") Una base de datos en tiempo real se refiere a un sistema de base de datos que se basa en el procesamiento en tiempo real que toma los datos entrantes a medida que fluyen del servidor.

    p.mt-4(data-aos="fade-up") La base de datos en tiempo real de Firebase (Firebase #[em Realtime Database]) es sin duda uno de los servicios más populares de la plataforma.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 33] Logo Firebase

    .row.mt-5
      .col-md-3.mb-3
        figure
          img.image_floating(src="@/assets/curso/tema6/1.svg" data-aos="fade-left")

      .col-md-9
        p(data-aos="fade-right").mt-3 Firebase es una plataforma para el desarrollo de aplicaciones #[em web] y aplicaciones móviles creada por James Tamplin y Andrew Lee en 2011, y adquirida por Google en 2014. Provee servicios muy útiles que podemos incorporar en nuestras aplicaciones Android (además de otros sistemas operativos) tales como:

    .row.mt-5.col-md-11
      .col-md-4.mb-3
        figure.text-center
          img.imagen_flotante_animada(src="@/assets/curso/tema6/2.svg" style="display:inline;max-width:150px;")

      .col-md-8
        .p-5.caja__1.caja_flotante_azul(style="background-color:#A9EBF4;position:relative;" data-aos="fade-right")
          p(data-aos="fade-up") #[strong Analytics:] firebase analytics proporciona una visión profunda sobre el uso de la aplicación por parte de los usuarios, con datos que nos sirven para analizar el comportamiento de los usuarios con la aplicación.

    .row.mt-4.col-md-11
      .col-md-4.mb-3
        figure.text-center
          img.imagen_flotante_animada(src="@/assets/curso/tema6/3.svg" style="display:inline;max-width:150px;")

      .col-md-8
        .p-5.caja__2.caja_flotante_rosada(style="background-color:#FFF1C7;position:relative;" data-aos="fade-right")
          p(data-aos="fade-up") #[strong Auth:] servicio que puede autenticar los usuarios utilizando únicamente código del lado del cliente. Incluye la autenticación mediante Facebook, GitHub, Twitter y Google. Además, incluye un sistema de administración del usuario por el cual los desarrolladores pueden habilitar la autenticación de usuarios con email y contraseña.

    .row.mt-5.col-md-11
      .col-md-4.mb-3
        figure.text-center
          img.imagen_flotante_animada(src="@/assets/curso/tema6/4.svg" style="display:inline;max-width:150px;")

      .col-md-8
        .p-5.caja__1.caja_flotante_azul(style="background-color:#A9EBF4;position:relative;" data-aos="fade-right")
          p(data-aos="fade-up") #[strong #[em Database]:] proporciona un base de datos en tiempo real y back-end. El servicio proporciona a los desarrolladores de aplicaciones una API que permite que la información de las aplicaciones sea sincronizada y almacenada en la nube de Firebase.

    .row.mt-4.col-md-11
      .col-md-4.mb-3
        figure.text-center
          img.imagen_flotante_animada(src="@/assets/curso/tema6/5.svg" style="display:inline;max-width:150px;")

      .col-md-8
        .p-5.caja__2.caja_flotante_rosada(style="background-color:#FFF1C7;position:relative;" data-aos="fade-right")
          p(data-aos="fade-up") #[strong Storage:] proporciona cargas y descargas seguras de archivos para aplicaciones Firebase, sin importar la calidad de la red. El desarrollador lo puede utilizar para almacenar imágenes, audio, vídeo, u cualquier otro contenido generado por el usuario.

    .row.mt-5.col-md-11
      .col-md-4.mb-3
        figure.text-center
          img.imagen_flotante_animada(src="@/assets/curso/tema6/6.svg" style="display:inline;max-width:150px;")

      .col-md-8
        .p-5.caja__1.caja_flotante_azul(style="background-color:#A9EBF4;position:relative;" data-aos="fade-right")
          p(data-aos="fade-up") #[strong #[em Notifications]:] con Firebase se puede usar el API FirebaseMessaging que permite el envío de mensajes desde Firebase hacia un dispositivo concreto o múltiples dispositivos, pudiendo gestionar las notificaciones desde la consola de Firebase.

    br
    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF1C7")
      p(data-aos="fade-up") #[strong Sus principales características son:]

      ul.lista-ul.mt-4
        li(data-aos="fade-up") 
          p #[i.fas.fa-check] No requiere la instalación de un servidor ni requiere instalación de #[em software] ya que la base de datos está alojada en la nube.
        li(data-aos="fade-up") 
          p #[i.fas.fa-check] El formato de almacenamiento de los datos es en formato #[em JSON], con base de datos no relacional.
        li(data-aos="fade-up") 
          p #[i.fas.fa-check] La actualización de los datos se hace en milisegundos debido a que la sincronización es en tiempo real. 
        li(data-aos="fade-up") 
          p #[i.fas.fa-check] Permite apps multiplataforma iOS, Android y #[em Web] (#[em JavaScript]). 
        li(data-aos="fade-up") 
          p #[i.fas.fa-check] Aun cuando el dispositivo se encuentre sin Internet la aplicación sigue funcionando gracias a la caché.


    p.mt-5(data-aos="fade-up") #[strong Para crear un proyecto con Firebase se deberán tener lo siguiente:]

    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF1C7")
      
      ul.lista-ul.mt-4
        li(data-aos="fade-up") 
          i.fas.fa-check
          |  Una cuenta de Gmail para acceder a la consola de Firebase https://console.firebase.google.com
        li(data-aos="fade-up") 
          i.fas.fa-check
          |  Un proyecto de Android Studio para poder hacer la conexión con la base de datos de  Firebase.

    p.mt-5(data-aos="fade-up") #[strong Para la configuración de Firebase en el proyecto de Android Studio se enumera los pasos siguientes:]

    div.mt-5(active="true")
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title)
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Configuración de Firebase en el proyecto #[br] de Android Studio
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  1. Crear un Proyecto en la consola de Firebase.
            b-card-text
              figure
                img(src="@/assets/curso/tema6/p1.png")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 34] Creación de proyecto en Firebase

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  2. Agregar el proyecto.
            b-card-text
              figure
                img(src="@/assets/curso/tema6/p2.png" style="max-width:300px;")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 35] Agregar un proyecto en Firebase

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  3. Seleccionar la plataforma para agregar a la APP. 
            b-card-text
              figure
                img(src="@/assets/curso/tema6/p3.png" style="max-width:300px;")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 36] Agregar Firebase a la aplicación
              

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  4. Ingresar el nombre del paquete de la APP en #[br] el campo Nombre del paquete
            b-card-text
              figure
                img(src="@/assets/curso/tema6/p4.png" style="max-width:300px;")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 37] Registra APP
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Lo más importante es copiar el paquete de tu proyecto de Android Studio que se encuentra en el manifest com.dominio.proyecto

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  5. Descargar archivo Json google-services.json  #[br] y copiarlo en la raíz del proyecto de Android Studio #[br] como lo indica la figura.
            b-card-text
              figure
                img(src="@/assets/curso/tema6/p5.png")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 38] Descarga Archivo Json

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  6. Agregar SDK de Firebase
            b-card-text
              figure
                img(src="@/assets/curso/tema6/p6.png")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 39] Descarga SDK Firebase
              .p-4.mt-2.caja_flotante(data-aos="fade-up" style="background-color:#F6F6F6;")
                p Copiar las librerías al gradle del proyecto en Android Studio y ya que esté lista la configuración de Android Studio con Firebase.

                p.mt-3 Esta misma configuración también se puede hacer automáticamente desde el entorno de Android Studio en la opción Tools-Firebase, pero necesita una buena velocidad de internet.

              figure.mt-4
                img(src="@/assets/curso/tema6/13.svg" style="max-width:300px")
              p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 40] Configuración automática para conexión con Firebase desde Android Studio

    br
    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="fade-up" style="background: linear-gradient(#ffca28, #bd8f00)")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3(data-aos="fade-up" style="color: #12263F !important;") Amplia tus conocimientos
              p.mt-3(style="color: #12263F !important;") A continuación, puede consultar un ejemplo completo sobre el uso de la base de datos de Firebase en Android Studio, denominado Ejemplo Firebase que se encuentra en los anexos del material complementario.
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" :href="obtenerLink('downloads/Ejemplo Firebase.pdf')" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-file-download(style="color: #12263F !important;")





</template>

<script>
export default {
  name: 'Tema6',
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
ul.lista-ul li i
  color: #4DD0E1
</style>
