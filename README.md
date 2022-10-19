# STAR DRANK BAR

# Resumen del proyecto(mas informacion de la API utilizada, el codigo, etc mas abajo)

## proyecto realizado para el TPO del codo a codo 4.0 orientacion fullstack python developer, en este proyecto se uso JS, HTML5 Y CSS3.

<p> el proyecto consiste en un bar con tematica espacial y de star wars, dentro del proyecto se pueden encontrar 4 paginas html(HOME, CARTA, RESERVAS, ¿QUIENES SOMOS?)</p>

## contenido
<ul>
   <li><a href = "#resumen">Resumen<a>

### id = "resumen" HOME(index.html)

<p > el home es la pagina principal y es la que se encarga de enlazar todas las otras paginas, la misma contiene un header con 2 botones con enlaces que llevan a las paginas de la carta y las reservas respectivamente. abajo tenemos otro boton que lleva a la pagina de ¿quienes somos?.
abajo de quienes somos hay 3 iconos con enlaces, estan los de redes sociales(los cuales en este momento no funcionan por obvias razones) y un icono de map spot, si se clickea en el icono se abrira un modal que contiene el mapa con la direccion(FICTICIA) del bar</p>


### CARTA(carta.html)

<p> la carta es la pagina donde se muestran los cocteles que sirve el bar, la misma tiene un header con 3 botones que llevan a las otras paginas del proyecto, abajo de todo hay un footer con la direccion del bar, el logo y ademas links a las redes sociales.</p>

#### CAROUSEL

<p> la carta tiene un carousel que tiene todos los tragos que se sirven en el bar(la creacion de las cards esta ligada al consumo de la api <a href =https://www.thecocktaildb.com/>https://www.thecocktaildb.com/</a>) en la carta hay 100 tragos para ser vistos.</p>

#### ESPECIAL

<p>esta seccion es estatica y tiene una descripcion y una foto con el trago que es la especialidad de la casa<p>
   
 ### RESERVAS(form.html)
  
<p> esta es la pagina de contacto para hacer reservas en el bar, solamente cuenta con una validacion en js ya que no hay bar al cual contactarse, en cuanto al header   y al footer el funcionamiento es el mismo</p>

### ¿QUIENES SOMOS?(.html)

# DISEÑO RESPONSIVE

<p>el proyecto en distintas partes de sus paginas tiene distintos puntos de corte, se trataron de acaparar la mayor cantidad de pantallas, el proyecto no contempla las pantallas pequeñas como las de los dispoditivos samsumg galaxy fold y tampoco de monitores de mucha resolucion resolucion(4k)</p>

## PUNTOS DE CORTE

<ul>
   <li><h3>hasta 640px para celulares &#128241;</h3></li>
   <li><h3>de 640px a 767px para celulares en vertical &#128241;</h3></li>
   <li><h3>de 767px hasta 1023 para tablets</h3></li>
   <li><h3>mas de 1440px para monitores y laptops large 💻</h3></li>
</h3>

# COMPOSICION DEL PROYECTO

<p>como ya se menciono antes el proyecto tiene 4 paginas html que se encuentran en la carpeta principal del repositorio</p>

<ul>
   <li>index.html</li>
   <li>carta.html</li>
   <li>form.html</li>
   <li>.html</li>
</ul>

<p>ademas se encuentran las carpetas JS y assets</p>

## assets

<p>dentro de esta carpeta estan la carpeta CSS Y IMG</p>

### CSS

<p>dentro de CSS estan todos los estilos de las paginas, esta todo modularizado en archivos css que tienen el mismo nombre que el componente al que le estan dando estilo, tambien hay carpetas con los nombres de las paginas, cuyos archivos dentro son los que le dan estilo a sus respectivas paginas(los archivos que estan fuera de carpetas de paginas son aquellos que estan en todas las paginas, por ejemplo el header o el footer), el reset.css es algo que sera explicado mas abajo</p>

### IMG

<p>carpeta que tiene todas las imagenes utilizadas en el proyecto</p>

## JS

<p>en este proyecto se decidio tratar de aplicar un patron de diseño MVC por eso dentro de JS tenemos 3 carpetas, dao(controller), models(modelo), views(vista)</p>

### models

<p>dentro de models tenemos el archivo cocktail-model, que tiene la clase(modelo de objeto) de un coctel la clase Cocktail se instancia en el controller</p>

### dao

<p>dentro de dao esta el archivo cocktailDAO, es el que tiene la responsabilidad de consumir los datos de la api, crear una instancia del objeto coctel y ademas crear la card que se va a utilizar dentro del carousel en carta.html, sus funciones estan documentadas dentro del archivo</p>

### views

<p>dentro de views hay 3 carpetas. carta, home y form, las cuales tienen archivos que se encargan de la vista de sus respectivas paginas<p>
 
   ### home
   <p>dentro de esta carpeta esta el archivo modal.js que es el encargado de la vista del modal del home</p>
   
   ### form
   
   <p> dentro tiene los archivos validacion y app, en validacion esta toda la logica y las reglas de la validacion del form y en app se utiliza la logica de la validacion llamando a los inputs de form.html</p>
   
  ### carta
  
  <p> dentro tiene el archivo carousel.js el cual tiene los listeners de los botones del carousel y ademas llama a la funcion getCocteles proveniente del dao en el momento que carga la pagina</p>
  
  # API
  
 pp> la api utilizada es  <a href =https://www.thecocktaildb.com/>https://www.thecocktaildb.com/</a> mas precisamente https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail la cual trae como respuesta los cocteles filtrados por categoria en formato json </p>
 
 
 # DATOS A TENER EN CUENTA
 <ul>
   <li>el reset.css se saco de https://meyerweb.com/eric/tools/css/reset/ este archivo se utiliza para eliminar todas las propiedades que vienen por defecto en los navegadores</li>
   <li> la fuente utilizada en el proyecto es la Prompt de google fonts https://fonts.google.com/specimen/Prompt?preview.text=star%20drank%20bar&preview.text_type=custom</li>
   <li> los botones del header, home, form y los iconos, tienen transiciones y transformaciones</li>
  
  
 
 
  
 
  
 
