<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1  Interfaz de usuario en Android

    p(data-aos="fade-up") La interfaz de usuario se define a través de la estructura de un diseño para la aplicación, en el caso de Android por ejemplo en una actividad.

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.caja_flotante_azul(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.imagen_flotante_animada(src="@/assets/curso/tema2/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-5.caja_escalada_hover(style="background-color: rgb(255 255 255 / 95%);")
            p(data-aos="fade-up") La creación de los elementos del diseño se hace utilizando una jerarquía de objetos #[em View] y #[em ViewGroup] donde los View son los elementos que el usuario puede visualizar como: botones, textos, imágenes; y un ViewGroup es un contenedor no visible que define la estructura del diseño de los #[em view] y otros objetos.

    br
    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 11] Ilustración jerarquía de diseño

    figure.mt-5.col-md-10.m-auto
      img.image_floating(src="@/assets/curso/tema2/2.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Los objetos #[em ViewGroup] son llamados Layout (diseños) y son de muchos tipos, dependiendo de la distribución y la posición de sus views como, por ejemplo, LinearLayout, RelativeLayout entre otros.

    p.mt-4(data-aos="fade-up") #[strong El diseño en Android se puede trabajar de dos maneras: en XML, o en el editor de diseño (mediante una interfaz de arrastrar y soltar)]

    .row.mt-4
      .col-md-6.mb-3
        p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 12] Vista diseño XML

        figure.mt-4
          img.image_floating(src="@/assets/curso/tema2/3.svg" data-aos="fade-up")

      .col-md-6.mb-3
        p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 13] Vista diseño editor

        figure.mt-4
          img.image_floating(src="@/assets/curso/tema2/4.svg" data-aos="fade-up")

    br
    br
    .titulo-segundo.mt-5
      h2#t_2_1 2.1 Layouts

    p(data-aos="fade-up") En Android Studio los componentes visuales (Button, Editext, Textview, etc.) se organizan mediante contenedores llamados Layout.

    p.mt-4(data-aos="fade-up") Los layouts son elementos no visuales que permiten controlar la organización, posición y dimensiones de los view que se crean dentro de él, como muchos otros componentes contenedores, son capaces de contener a otros controles, es decir, que se puede tener un contenedor dentro de otro contenedor.

    p.mt-4(data-aos="fade-up") #[strong Existen diferentes tipos de Layout, a continuación, se explica cada una de las más comunes.]

    .mt-5.text-center.caja___1.p-5.row(style="min-height:700px;max-height:100%;height:100%;place-content: flex-end;")
      div(v-if="caja1" data-aos="fade-in")
        .p-4.col-md-12.m-auto(style="background-color:rgba(0,0,0,.7);z-index:1;position:relative;" data-aos="fade-in")
          h1.text-white Construir un aplicativo según las #[br] características de la arquitectura Android
        button.boton__1.mt-5(@click="mostrar2") Iniciar

      div(v-if="caja2" data-aos="fade-in")
        .row
          .col-md-7.mb-4
            h1(style="color:#FFCA28;text-align:left;text-shadow: 0px 0px 3px #424242;") Layouts

            .p-5.bg-white.caja_flotante(style="border-radius:10px;text-align:left;")
              p(data-aos="fade-up") En Android Studio los componentes visuales (Button, Editext, Textview, etc.) se organizan mediante contenedores llamados Layout.

              p.mt-4(data-aos="fade-up") Los layouts son elementos no visuales que permiten controlar la organización, posición y dimensiones de los #[em view] que se crean dentro de él, como muchos otros componentes contenedores, son capaces de contener a otros controles, es decir, que se puede tener un contenedor dentro de otro contenedor.

              p.mt-4(data-aos="fade-up") Existen diferentes tipos de Layout entre los más comunes están: el LinearLayout, TableLayout, ConstraintLayout.

          .col-md-5.text-center.mb-4
            figure.m-auto
              img.image_floating(src="@/assets/curso/tema2/6.svg" data-aos="fade-left")

        .col-md-12.m-auto.mt-5(style="display:inline-flex;")
          figure(style="text-align:right;")
            img.image_floating.caja_escalada_hover(src="@/assets/curso/tema2/7.svg" style="max-width: 70px;display:inline;cursor:pointer;" @click="mostrar1")
          figure(style="text-align:left;")
            img.image_floating.caja_escalada_hover(src="@/assets/curso/tema2/8.svg" style="max-width: 70px;display:inline;cursor:pointer;" @click="mostrar3")

      div(v-if="caja3" data-aos="fade-in")
        .row
          .col-md-4.mb-4
            figure.text-center
              img.image_floating.caja_escalada_hover(src="@/assets/curso/tema2/9.svg" style="display:inline;cursor:pointer;max-height:350px;" data-aos="fade-up" @click="modal1 = true")

            .p-4.bg-white.caja_flotante.caja_escalada_hover(style="border-radius:10px;cursor:pointer;" data-aos="fade-up" @click="modal1 = true")
                h3.mb-0.text-center 1. LinearLayout

          .col-md-4.mb-4
            figure.text-center
              img.image_floating.caja_escalada_hover(src="@/assets/curso/tema2/10.svg" style="display:inline;cursor:pointer;max-height:350px;" data-aos="fade-up" @click="modal2 = true")

            .p-4.bg-white.caja_flotante.caja_escalada_hover(style="border-radius:10px;cursor:pointer;" data-aos="fade-up" @click="modal2 = true")
                h3.mb-0.text-center 2. TableLayout

          .col-md-4.mb-4
            figure.text-center
              img.image_floating.caja_escalada_hover(src="@/assets/curso/tema2/11.svg" style="display:inline;cursor:pointer;max-height:350px;" data-aos="fade-up" @click="modal3 = true")

            .p-4.bg-white.caja_flotante.caja_escalada_hover(style="border-radius:10px;cursor:pointer;" data-aos="fade-up" @click="modal3 = true")
                h3.mb-0.text-center 3. ConstraintLayout

        .col-md-12.m-auto.mt-5(style="display:inline-flex;")
          figure(style="text-align:center;")
            img.image_floating.caja_escalada_hover(src="@/assets/curso/tema2/7.svg" style="max-width: 70px;display:inline;cursor:pointer;" @click="mostrar2")

        ModalA(:abrir-modal.sync="modal1")
          .row(style="text-align:left")
            h2 1. LinearLayout

            p.mt-2 Dispone las vistas de la interfaz una debajo de otra (orientación vertical), o una al lado de la otra (orientación horizontal). Sus propiedades principales son:

            ul.mt-3(style="list-style:disc;padding:revert;")
              li #[em Orientation]: es la propiedad que define la disposición de sus vistas si es horizontal o vertical.
              li Layout_height: esta propiedad específica el alto del #[em viewGroup] (Contenedor).
              li Layout_width: esta propiedad específica el ancho del #[em viewGroup] 

            .row.mt-3
              .col-md-6.mb-4
                p Los valores que puede tomar las propiedades #[em height] y #[em width] son: &lt;&lt;match_parent&gt;&gt; para que ocupe el mismo tamaño de la pantalla, o el valor &lt;&lt;wrap-content&gt;&gt; para que se adapte al tamaño de su contenido, también puede tener valores personalizados que se miden con dp (pixeles de densidad independiente), las propiedades de #[em heigth] y #[em width] se aplican para todos los contenedores y vistas.

              .col-md-6
                figure
                  img.image_floating(src="@/assets/curso/tema2/12.svg")

            h3.mt-4 Diseño utilizando LinearLayout

            figure.mt-4.col-md-10.m-auto
              img.image_floating(src="@/assets/curso/tema2/13.svg")

        ModalA(:abrir-modal.sync="modal2")
          .row(style="text-align:left")
            h2 2. TableLayout

            .row.mt-3
              .col-md-9.mb-3
                p Es un contenedor #[em ViewGroup] que permite mostrar los elementos #[em view] en columnas y filas. Para crear las filas se utiliza el objeto TableRow  cada fila puede tener 1 o más celdas o ninguna, y celda se crea por un tipo de objeto view.  Es decir, las celdas de una fila se pueden formar por una diversidad de objetos view, como ImageView o TextView.

                p.mt-2 El siguiente código XML de diseño tiene dos filas y tres celdas en cada uno y de otra fila y dos celdas.

              .col-md-3
                figure.p-3
                  img.image_floating(src="@/assets/curso/tema2/14.svg")

            h3.mt-4 Estructura de un TableLayout

            p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[em XML TableLayout] 
            figure.mt-2.col-md-10.m-auto
              img.image_floating(src="@/assets/curso/tema2/13.svg")

            p.mt-4 El código anterior mostraría el #[strong TableLayout] de la siguiente forma:

            p.mt-3(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") XML TableLayout

            figure.mt-2.col-md-5
              img.image_floating(src="@/assets/curso/tema2/38.png")

        ModalA(:abrir-modal.sync="modal3")
          .row(style="text-align:left")
            h2 3. ConstraintLayout

            .row.mt-3
              .col-md-9.mb-3
                p Es el contenedor más utilizado en este momento y el que viene por defecto cuando se crea una actividad, ya que permite crear los view directamente desde las herramientas visuales del editor de diseño. Con este contenedor se puede crear todo el diseño arrastrando y soltando elementos, en lugar de editar el XML.

                p.mt-2 Cada posición de un view en un ContraintLayout se define agregando por lo menos una restricción horizontal y una vertical. Cada restricción representa una conexión o alineación con otra vista. Cada restricción define la posición de la vista a lo largo del eje vertical u horizontal, por lo que cada vista debe tener un mínimo de una restricción para cada eje, aunque normalmente se necesitan más.

              .col-md-3
                figure.p-3
                  img.image_floating(src="@/assets/curso/tema2/16.svg")

            h3.mt-4 Vista de Diseño ConstraintLayout

            figure.mt-4.col-md-6.m-auto
              img.image_floating(src="@/assets/curso/tema2/17.svg")

            p.mt-3 La figura anterior muestra las conexiones que tiene el #[em view Button] en sus ejes horizontales y verticales que se realizan desde el editor de diseño solo con arrastrar y soltar sin utilizar el código XML como en los anteriores contenedores.

    br
    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="fade-up" style="background: linear-gradient(#ffca28, #bd8f00)")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2
          img.p-4.imagen_flotante_animada(src="@/assets/curso/tema1/3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3(data-aos="fade-up" style="color: #12263F !important;") Amplia tus conocimientos 
              p.mt-3(style="color: #12263F !important;") Cómo crear una IU responsiva con ConstraintLayout
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" href="https://developer.android.com/training/constraint-layout?hl=es-419" target="_blank")
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
              p.mt-3(style="color: #12263F !important;") Interfaz de usuario en Android: Layouts
            .col-sm-auto
              a.boton.boton--b.color-primario(style="background-color:#4DD0E1" href="https://www.sgoliver.net/blog/interfaz-de-usuario-en-android-layouts" target="_blank")
                span(style="color: #12263F !important;") Ir al sitio web
                i.fas.fa-file-download(style="color: #12263F !important;")

    br
    br
    .titulo-segundo.mt-5
      h2#t_2_2 2.2 Controles básicos

    p(data-aos="fade-up") En Android Studio se encuentra una amplia variedad de controles que se pueden utilizar en la interfaz de usuario, tales como botones (#[em Button]) campos de texto (EditText) vista de imágenes (ImageView) casillas de verificación (CheckBox) botones de selección (RadioButton) etiquetas de texto (TextView) listas (ListView) entre otros.

    p.mt-4(data-aos="fade-up") #[strong Existen 3 propiedades que son indispensables en la creación de los controles nombrados anteriormente y son:]

    .row.mt-5.m-auto.col-md-8
      .col-md-6.mb-3
        .p-5.caja_flotante.caja_escalada_hover(style="background-color:#FFCA28;height:100%;")
          h4(data-aos="fade-up") Android: layout_width
          p.mt-4(data-aos="fade-up") Esta propiedad es común a todas las vistas y es la que permite establecer cuál será el ancho usado. Este valor puede ser fijado referente al contenido que se va a mostrar o referente a la vista que lo contiene

      .col-md-6.mb-3
        .p-5.caja_flotante_azul.caja_escalada_hover(style="background-color:#4DD0E1;height:100%;")
          h4(data-aos="fade-up") Android: layout_height
          p.mt-4(data-aos="fade-up") Esta propiedad es común a todas las vistas y es la que permite establecer cuál será el alto usado. Este valor puede ser fijado referente al contenido que se va a mostrar o referente a la vista que lo contiene.

    p.mt-5(data-aos="fade-up") #[strong Los valores que pueden tomar las propiedades de Android: layout_width, y Android: layout_height los cuales aplican para todos los controles son:]

    .row.mt-5
      .col-md-6.mb-3
        .p-5.caja_flotante_azul(style="background-color:#DBFBFF;height:100%;")
          p(data-aos="fade-up") #[strong MATCH_PARENT,] lo que significa que la vista va a tener el tamaño de su padre en este caso el de la pantalla.

      .col-md-6.mb-3
        .p-5.caja_flotante_azul(style="background-color:#DBFBFF;height:100%;")
          p(data-aos="fade-up") #[strong WRAP_CONTENT,]  lo que significa que el tamaño de la vista se adaptará a lo que escriban en su contenido.

    .mt-4.m-auto.col-md-8
      .p-5.caja_flotante_azul(style="background-color:#DBFBFF;height:100%;")
          p(data-aos="fade-up") #[strong PERSONALIZADO:] también se puede definir el alto y el ancho con valores personalizados con unidad de medida dp (Pixeles independientes de densidad) ejemplo:

          p.mt-3(data-aos="fade-up") #[strong android: layout_width= “50dp”]
          p(data-aos="fade-up") #[strong android: layout_height=”200dp”]

          p.mt-3(data-aos="fade-up") Android: id: Define el identificador asociado a la vista para ser referenciado por código Java. la forma de crear un identificador es la siguiente

          p.mt-3(data-aos="fade-up") #[strong Android:id="@+id/myText"]

          p.mt-4(data-aos="fade-up") El símbolo @+id/ quiere decir que se está generando un nuevo identificador, esto provocará que la clase R del paquete gen del proyecto cree una referencia de este objeto para que luego pueda ser manipulado por código.

    p.mt-5(data-aos="fade-up") Estas tres propiedades básicas son las principales en los componentes que se describen a continuación.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 14] Controles Básicos

    figure.mt-5.m-auto.col-md-7
      img(src="@/assets/curso/tema2/18.svg" data-aos="fade-up")

    h3.mt-5(data-aos="fade-up") Botones

    p.mt-4(data-aos="fade-up") Un botón (#[em Button]) es un elemento de la interfaz en el que el usuario puede tocar o hacer clic para realizar una acción. En la tabla 1, puede observarse un ejemplo de un Button, con sus propiedades básicas:

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Tabla 1] Propiedades básicas Button

    .table-responsive.mt-4.col-md-10(data-aos="fade-up")
      table.tabla__1(width="100%")
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 android:layout_width
            td(style="width:70%") Define el ancho de la vista
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 android:layout_height
            td(style="width:70%") Define el alto de la vista
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 android:id
            td(style="width:70%") Define el identificador asociado a la vista para ser referenciado por código java
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%")
              h5.mb-0 android:text
            td(style="width:70%") Define el texto asociado a la vista

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 15] XML Creación #[em Button]

    figure.col-md-4
      img(src="@/assets/curso/tema2/19.svg" data-aos="fade-up")

    p.mt-4(data-aos="fade-up") Y el botón quedaría como se ve en la figura 16.

    p.mt-4(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 16] Vista diseño #[em Button]

    figure.col-md-4
      img(src="@/assets/curso/tema2/20.svg" data-aos="fade-up")

    Separador

    h3.mt-3(data-aos="fade-up")  Texto e Imágenes

    p.mt-4(data-aos="fade-up") Unos de los controles más utilizados son los referentes a los textos e imágenes, ya que son con los que más interactúa el usuario. A continuación, se realizará una descripción de tres de los componentes básicos más imprescindibles para el desarrollo de nuestras aplicaciones: los textos o etiquetas (TextView) las imágenes (ImageView) y los cuadros de texto (EditText)

    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF1C7")
      p(data-aos="fade-up") #[strong.h5 TextView:] es un control utilizado para desplegar contenido textual generalmente estático, tiene la propiedad de acoplarse al control que lo contenga y no captura el foco en ningún momento por lo que generalmente no se programa ningún evento sobre él, sus propiedades básicas son las siguientes:

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Tabla 2] Propiedades básicas TextView

    .table-responsive.mt-4.col-md-10(data-aos="fade-up")
      table.tabla__1(width="100%")
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:layout_width
            td(style="width:70%;") Define el ancho de la vista
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;")
              h5.mb-0 android:layout_height
            td(style="width:70%;") Define el alto de la vista

          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:id
            td(style="width:70%;") Define el identificador asociado a la vista para ser referenciado por código java

          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:text
            td(style="width:70%;") 
              p.mb-0 Establece cual es el contenido a ser mostrado por el #[strong #[em TextView]].
              p.mb-0 Existen dos formas de asociar el texto a una vista, la primera forma y más simple es asociar el texto de forma directa:
              p.mb-0 #[strong android:text=]“Hola Mundo”
              p La segunda forma es por medio de archivo #[strong #[em string XML]] ubicado dentro de la carpeta values de los recursos del proyecto y asociar cada uno de los textos con una llave respectiva así:

              p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") Archivo XML String

              figure.mt-3
                img(src="@/assets/curso/tema2/21.svg" data-aos="fade-up")

              p.mt-3 Ya luego se referencia el contenido por medio de este archivo XML de la siguiente forma: #[strong android:text="@string/boton2"]

          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android: textColor
            td(style="width:70%;") Esta propiedad nos permite definir cuál va a ser el color del texto.

          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;")
              h5.mb-0 android: textSize
            td(style="width:70%;") Con esta propiedad podemos definir el tamaño de la fuente la unidad es sp. Ejemplo: #[strong android:textSize="20sp"]

          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android: textStyle
            td(style="width:70%;")
              p Define el estilo de la fuente a usar, tiene los siguientes valores:

              p.mt-4(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") Valores estilo de texto

              figure.col-md-7
                img(src="@/assets/curso/tema2/22.svg" data-aos="fade-up")

              p.mt-3 Ejemplo: android: textStyle="italic"

          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;")
              h5.mb-0 android: typeface
            td(style="width:70%;") Esta propiedad me permite cambiar el tipo de fuente dentro de un conjunto de 4 posibles opciones: normal, sans, serif y monospace, se pueden descargar otro tipo de fuentes.

    p.mt-5(data-aos="fade-up") #[strong Ejemplo de TextView con sus propiedades básicas:]

    .row.mt-5
      .col-md-6.mb-3
        p(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 17] XML TextView

        figure.mt-3
          img(src="@/assets/curso/tema2/23.svg" data-aos="fade-up")

      .col-md-6.mb-3
        p(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 18] Vista Diseño TextView

        p.mt-4(data-aos="fade-up") El TextView quedaría como se ve en la figura 18

        figure.col-md-8.mt-3
          img(src="@/assets/curso/tema2/24.svg" data-aos="fade-up")

    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF1C7")
      p(data-aos="fade-up") #[strong.h4 ImageView:] es un control de imágenes que permite acceder a los recursos de imágenes (#[em drawable] o mipmap) permitiendo mostrar las imágenes en la aplicación, su propiedad principal es android:src que permite indicar la imagen a mostrar del proyecto. Lo primero que se debe hacer es copiar la imagen que se quiere mostrar a la carpeta #[em drawable] del proyecto /res/drawable y después en el XML se debe indicar la ruta de origen así: android:src=” @drawable/imagen”

      p.mt-4(data-aos="fade-up") Aparte de las propiedades de width y heigth que se encuentran en todos los view están las siguientes básicas para el imageview:

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Tabla 3] Propiedades básicas ImageView

    .table-responsive.mt-4.col-md-10(data-aos="fade-up")
      table.tabla__1(width="100%")
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:src
            td(style="width:70%;") Establece la imagen del ImageView.
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:scaleType
            td(style="width:70%;") Controla cómo se debe cambiar el tamaño o mover la imagen para que coincida con el tamaño de este ImageView.
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:tint
            td(style="width:70%;") El color de tinte de la imagen.

    p.mt-5(data-aos="fade-up") Ejemplo de ImageView con sus propiedades básicas

    .row.mt-5
      .col-md-6.mb-3
        p(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 19] XML ImageView

        figure.mt-3
          img(src="@/assets/curso/tema2/25.svg" data-aos="fade-up")

        p.mt-4(data-aos="fade-up") El ImageView quedaría como se ve en la figura 20

      .col-md-6.mb-3
        p(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 20] Vista Diseño ImageView

        figure.col-md-8.mt-3
          img(src="@/assets/curso/tema2/26.svg" data-aos="fade-up")

    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF1C7")
      p(data-aos="fade-up") #[strong EditText:] es un elemento de la interfaz que permite al usuario ingresar y editar el texto.Una de sus propiedades más funcionales es la de inputType que define el tipo de entrada que va a tener el cuadro de texto, el valor se aplica dependiendo de lo que se quiere ingresar: por ejemplo, un correo electrónico (textEmailAdress) edad (#[em number]) apellido (#[em text]) entre otras, la elección del tipo de entrada configura el tipo de teclado que se muestra.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Tabla 4] Propiedades básicas EditText

    .table-responsive.mt-4.col-md-10(data-aos="fade-up")
      table.tabla__1(width="100%")
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:inputType
            td(style="width:70%;") Establece el tipo de dato que ingresará en el campo de texto. Para esta propiedad existen los siguientes datos: #[em text], #[em number], texturi, textpassword, #[em phone], #[em date] entre otros.
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 #[u android:hint]
            td(style="width:70%;") Esta propiedad permite desplegar un texto sobre el control a manera de ayuda mientras el usuario aún no ingresa información. (preferible sobre la propiedad #[em text].
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 #[u android:text]
            td(style="width:70%;") Al igual que en el TextView puedo definir cuál es el texto que se mostrará en el control.

    p.mt-4(data-aos="fade-up") Ejemplo de EditText con sus propiedades básicas

    .row.mt-5
      .col-md-6.mb-3
        p(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 21] XML EditText

        figure.mt-3
          img(src="@/assets/curso/tema2/27.svg" data-aos="fade-up")

      .col-md-6.mb-3
        p(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 22] Vista Diseño EditText

        figure.col-md-8.mt-3
          img(src="@/assets/curso/tema2/28.svg" data-aos="fade-up")

    Separador

    h3.mt-3(data-aos="fade-up") Checkbox y Radiobutton

    p.mt-4(data-aos="fade-up") Otro de los controles muy utilizados en las aplicaciones son los que permiten hacer una selección o un chequeo de alguna opción en las aplicaciones, Android cuenta con dos tipos: checkboxes y los radiobuttons.

    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF1C7")
      p(data-aos="fade-up") #[strong CheckBox:] las casillas de verificación permiten que el usuario seleccione una o más opciones de un grupo. Aparte de las propiedades de width y heigth que se encuentran en todos los #[em view] están las siguientes básicas para el Checkbox:

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Tabla 5] Propiedades básicas Checkbox

    .table-responsive.mt-4.col-md-10(data-aos="fade-up")
      table.tabla__1(width="100%")
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:checked
            td(style="width:70%;") Establece el estado actual de checkbox
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:text
            td(style="width:70%;") Esta propiedad define el texto del checkbox
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:id
            td(style="width:70%;") Al igual que en los otros controles define el identificador único asociado a la vista para ser referenciado por código java

    p.mt-5(data-aos="fade-up") Para definir un control de este tipo se utiliza el código siguiente, que define dos checkboxes con los textos español e inglés.

    .row.mt-5
      .col-md-6.mb-3
        p(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 23] Código XML Checkbox

        figure.mt-3
          img(src="@/assets/curso/tema2/29.svg" data-aos="fade-up")

      .col-md-6.mb-3
        p(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 24] Vista Diseño Checkbox

        figure.col-md-8.mt-3
          img(src="@/assets/curso/tema2/30.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Los checkbox quedarían como se ve en la figura 24

    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF1C7")
      p(data-aos="fade-up") #[strong RadioButton:]  a diferencia del CheckBox el control RadioButton permite realizar una selección única entre una lista de opciones. En Android, un grupo de botones radio button se define mediante un elemento RadioGroup, el cual contiene todos los elementos RadioButton necesarios. 

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Tabla 6] Propiedades básicas RadioButton

    .table-responsive.mt-4.col-md-10(data-aos="fade-up")
      table.tabla__1(width="100%")
        tbody
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:checked
            td(style="width:70%;") Establece el estado actual de seleccionado por defecto del RadioButton
          tr(style="background-color:#A9EBF4")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:text
            td(style="width:70%;") Esta propiedad define el texto del RadioButton
          tr(style="background-color:#C1F8FF")
            td(style="border-right:2px #AFAFAF solid;width:30%;")
              h5.mb-0 android:id
            td(style="width:70%;") Al igual que en los otros controles define el identificador único asociado a la vista para ser referenciado por código java

    p.mt-5(data-aos="fade-up") Para definir un control de este tipo se utiliza como componente Padre un RadioGroup (Padre) y como hijos dos RadioButton (Hijo) el RadioGroup es el que permite que solo sea seleccionable una sola opción en caso de crear los radiobutton, sin un RadioGroup dejará seleccionar todas las opciones, lo que no es el fin del componente.

    p.mt-4(data-aos="fade-up") En las propiedades del RadioGroup se puede definir la orientación de los #[strong RadioButton:] la orientación puede ser Vertical -Horizontal.

    p.mt-4(data-aos="fade-up") El siguiente código muestra la creación de dos RaddioButton con los textos de femenino y masculino los cuales están dentro de un RadioGroup con la propiedad de orientación vertical.

    .row.mt-5
      .col-md-6.mb-3
        p(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 25] Código XML RadioButton

        figure.mt-3
          img(src="@/assets/curso/tema2/31.svg" data-aos="fade-up")

      .col-md-6.mb-3
        p(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 26] Vista Diseño RadioButton

        figure.col-md-8.mt-3
          img(src="@/assets/curso/tema2/32.svg" data-aos="fade-up")

    p.mt-3(data-aos="fade-up") Los RadioButton quedarían como se ve en la figura 26.

    Separador

    h3.mt-3(data-aos="fade-up") Controles de Selección

    p.mt-4(data-aos="fade-up") Los diferentes controles de los cuales dispone Android para seleccionar opciones dentro de una lista de posibilidades se llaman Spinner (para listas desplegables) y ListView (para listas fijas)

    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF1C7")
      p(data-aos="fade-up") #[strong Spinner:] este permite seleccionar un valor en un conjunto, al presionar clic sobre ella muestra una especie de lista emergente al usuario con todas las opciones disponibles, a seleccionar su propiedad más importante es android: entries = “@array/lista” que permite fijar el contenido de datos que se quiere mostrar en la lista.

      p.mt-4(data-aos="fade-up") #[strong Para añadir una lista de este tipo se deben seguir los pasos que se nombran a continuación:]

    p.mt-5(data-aos="fade-up") 1. En los recursos /res/values/strings se debe crear el arreglo de #[em String] (string-array) con los valores que queremos mostrar en el spinner.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 27] Código para creación de un string-array

    figure.mt-4.col-md-10
      img(src="@/assets/curso/tema2/33.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") 2. Ahora en el /res/layout se crea el siguiente código para crear el Spinner y enlazar el string-array a través de la propiedad entries como se muestra en la figura 28.

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 28] Código XML para creación de un Spinner

    figure.mt-4.col-md-7
      img(src="@/assets/curso/tema2/34.svg" data-aos="fade-up")

    p.mt-4(data-aos="fade-up") #[span La figura] muestra la creación de un Spinner con sus propiedades básicas heigth, width y el Id, y la propiedad entries donde relaciona el array ciudades creado en los recursos.

    p.mt-4(data-aos="fade-up") El Spinner quedarían como se ve en la figura 29

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 29] Vista Diseño Spinner Ciudades

    figure.mt-4.col-md-5
      img(src="@/assets/curso/tema2/35.svg" data-aos="fade-up")

    .mt-5.p-5.caja_flotante_rosada(style="background-color:#FFF1C7")
      p(data-aos="fade-up") #[strong ListView:] permite mostrar al usuario una lista de opciones seleccionables directamente sobre el propio control, sin listas emergentes como en el caso del control Spinner. En caso de existir más opciones de las que se pueden mostrar sobre el control se podrá hacer scroll sobre la lista para acceder al resto de elementos.

      p.mt-4(data-aos="fade-up") Para crear el ListView, así como en el Spinner también se debe crear el arreglo de elementos que se quiere mostrar en la lista, para este ejemplo se utilizará el mismo arreglo de ciudades que se utilizó para el Spinner.

      p.mt-4(data-aos="fade-up") Cuando los elementos que se quieren mostrar en la lista o en el Spinner no son estáticos se crea el arreglo desde el código Java.

    p.mt-5(data-aos="fade-up") Ejemplo de creación de un ListView:

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 30] Código XML para creación de un ListView

    figure.mt-4.col-md-7
      img(src="@/assets/curso/tema2/36.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") La figura 30 muestra la creación de un ListView, utiliza las mismas propiedades del Spinner, y la propiedad entries donde relaciona el array ciudades creado en los recursos.

    p.mt-4(data-aos="fade-up") #[strong El ListView quedarían como se ve en la figura 31]

    p.mt-5(data-aos="fade-up" style="padding-left:13px;border-left:4px #4DD0E1 solid;") #[strong Figura 31] Vista Diseño ListView Ciudades

    figure.mt-4.col-md-4
      img(src="@/assets/curso/tema2/37.svg" data-aos="fade-up")




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    caja1: true,
    caja2: false,
    caja3: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    mostrar1() {
      this.caja2 = false
      this.caja3 = false
      this.caja1 = true
    },
    mostrar2() {
      this.caja1 = false
      this.caja3 = false
      this.caja2 = true
    },
    mostrar3() {
      this.caja1 = false
      this.caja2 = false
      this.caja3 = true
    },
  },
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
.caja___1
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
.caja___1
  background: url("../assets/curso/tema2/5.svg")
  background-size: cover
  background-position:center
  filter: drop-shadow(0px 10px 6px rgba(0,0,0,.4))
.tabla__1 th,.tabla__1 td
  padding: 1.1rem
</style>
