# 2. SINTAXIS DEL LENGUAJE JAVASCRIPT

## Cadenas de texto - Secuencias de escape

![1571672643351](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571672643351.png)





## Ambitos de ejecucion

Dos ambitos

- **Global**: En cualquier parte del codigo, definidas fuera de cualquier funcion y que NO utiliza el comando VAR.
- **Local**: Cualquier variable definida dentro de una funcion, SI lleva VAR.





## Function  y  Array.forEach 

```javascript
function miFuncion(elemento, posicion, array) {}
Array.forEach(miFuncion);
```



















# 3. OBJETOS POR REFERENCIA

## Funciones Predefinidas

### **escape()**

- Recibe como argumento una cadena de caracteres y devuelve esa misma cadena sustituida con su codificacion en ASCII.

```html
<script type="text/javascript">
	var input = prompt("Introduce una cadena");
	var inputCodificado = escape(input);
	alert("Cadena codificada: " + inputCodificado);
</script>
```

### unescape()

- Función contraria de decodificación.







### eval()

- Convierte una cadena que pasamos como argumento en código Javascript ejecutable.

```html
<script type="text/javascript">
	var input = prompt("Introduce una cadena numérica");	// 2+3
	var resultado = eval(input);
	alert("El resultado de la operación es: " + resultado);
</script>
```







### isFinite()

- Verifica si el número que pasamos como argumento es o no un numero infinito.



### isNan()

- Verifica si el numero que pasamos como argumento es de tipo numerico

```html
<script type="text/javascript">
	var input = prompt("Introduce un valor numérico");
	if (isNan(input)) {
        alert("NO ES NUMÉRICO");
    }
    else {
        alert("ES NUMÉRICO");
    }
</script>
```







### String()

- Convierte objeto pasado como argumento en una cadena.

```html
<script type="text/javascript">
	var fecha = new Date();
	var fechaString = String(fecha);
    alert("La fecha actual es: " + fechaString);
</script>
```







### Number()

- Convierte el objeto pasado como argumento en un número.







### parseInt()

- Convierte la cadena en un valor numérico de tipo entero. (Por defecto: Decimal)

```html
<script type="text/javascript">
	var input = prompt("Introduce un valor: ");
	var inputParsed = parseInt(input);
    alert("parseInt("+input+"): " + inputParsed);
</script>
```







### parseFloat()

- Convierte la cadena a un valor numérico de tipo flotante (float).

```html
<script type="text/javascript">
	var input = prompt("Introduce un valor: ");
	var inputParsed = parseFloat(input);
    alert("parseFloat("+input+"): " + inputParsed);
</script>
```









## Funciones del usuario

### Definicion de funciones

```javascript
function nombreFunción ([argumentos]){
	grupo_de_instrucciones;
	[return valor;]
}

<script type="text/javascript">
	function aplicarIVA(valorProducto, IVA) {
    	var productoConIVA = valorProducto * IVA;
    	alert("Total con IVA:" + productoConIVA);
	}
</script>
```



### Invocar desde Javascript

```html
<html>
<head>
	<title>Invocar función desde JavaScript</title>
	<script type=“text/javascript”>
		function mi_funcion([args]){
		//instrucciones
		}
	</script>
</head>
<body>
	<script type=“text/javascript”>
		mi_funcion([args]);
	</script>
</body>
</html>
```



### Invocar desde HTML

```html
<html>
<head>
	<title>Invocar función desde JavaScript</title>
	<script type=“text/javascript”>
		function mi_funcion([args]){
		//instrucciones
	}
	</script>
</head>
<body onload=“mi_funcion([args])”></body>
</html>
```









## Objetos definidor por el Usuario

### Declaracion e Inicializacion de los objetos

Un objeto es una entidad que posee unas propiedades que lo caracterizan y unos métodos que actúan sobre estas propiedades.

```javascript
function mi_objeto (valor_1, valor_2, valor_x){
	this.propiedad_1 = valor_1;
	this.propiedad_2 = valor_2;
	this.propiedad_x = valor_x;
}

function Coche(marca_in, modelo_in, anyo_in) {
    this.marca = marca_in;
    this.modelo = modelo_in;
    this.anyo = anyo_in;
}
```

Una vez declarado el nuevo tipo de objeto se pueden crear instancias mediante la palabra clave new:

```javascript
var coches = new Array(4);

coches[0] = new Coche("Ferrari", "Scaglietti", "2010");
coches[1] = new Coche("BMW", "", "2010");
coches[2] = new Coche("Seat", "", "2010");
coches[3] = new Coche("Ford", "", "2010");

for (i=0; i < coches.length; i++) {
    	document.write("Marca: " + coches[i].marca + " - Modelo: " + 
		coches[i].modelo + " - Año: " + coches[i].anyo);
}
```

Es posible añadir otras propiedades a cada instancia del objeto, por ejemplo:

```javascript
var mi_coche = new Coche("Peugeot", "206", "2003");
mi_coche.color = "azul";
```



Dentro de la definición de los objetos, podemos incluir funciones que acceden a las propiedades -> métodos del objeto.

```javascript
function imprimirDatos() {
	document.write("Código: " + productos[i].codigo);
	document.write("<br>Nombre: " + productos[i].nombre);
    document.write("<br>Precio(€): " + productos[i].precio + "<br><br>");
}

function ProductoAlimenticio(codigo_in, nombre_in, precio_in) {
	this.codigo = codigo_in;
	this.nombre = nombre_in;
	this.precio = precio_in;
	this.imprimirDatos = imprimirDatos;
}

var miProducto = new ProductoAlimenticio("0123", "Barra de pan", "1€");
productos.imprimirDatos();

// Tambien con un "for"
for (i = 0; i < productos.length; i++) {
	productos[i].imprimirDatos();
}
```









## Objetos nativos de Javascript

En JavaScript se accede a las propiedades y a los métodos de los objetos mediante el operador punto (“.”):

- mi_objeto.nombre_propiedad;
- mi_objeto.nombre_función(parámetros);



Los objetos de JavaScript se ordenan de modo jerárquico

![1571856298634](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571856298634.png)





### Date

Permite realizar controles relacionados con el tiempo en las aplicaciones web.

![1571856344861](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571856344861.png)

![1571856450157](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571856450157.png)





### Math

Permite realizar operaciones matemáticas complejas en JavaScript.

![1571856392201](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571856392201.png)

![1571856458315](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571856458315.png)





### Number

Permite realizar tareas relacionadas con tipos de datos numéricos.

![1571856422116](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571856422116.png)

![1571856467317](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571856467317.png)







### Array

Típicamente, colecciones ordenadas de datos homogéneas. 
Sin embargo, en JavaScript, se puede tener datos de distinto tipo.

![1571856490024](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571856490024.png)







### Métodos

```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Objetos nativos de JavaScript</title>
	<script>
		var fruits = ["Apple", "Banana"];

		console.log(fruits.length);
		// 2

		var first = fruits[0];
		console.log(first);
		// Apple

		var last = fruits[fruits.length - 1];
		console.log(last);
		// Banana

		fruits.forEach(function(item, index, array) {
			console.log(item, index);
		});
		// Apple 0
		// Banana 1

		var newLength = fruits.push("Orange");
		console.log(newLength);
		// ["Apple", "Banana", Orange]

		var last = fruits.pop(); // remove Orange (from the end)
		console.log(fruits.length);
		// ["Apple", "Banana"]

		var firstRemove = fruits.shift(); // remove from the front
		console.log(fruits.length);
		// ["Banana"]

		var newLengthFront = fruits.unshift("Strawberry"); 
		// add to the front
        
		console.log(fruits.length);
		// ["Strawbeyy", "Banana"]

		var pos = fruits.indexOf("Banana");
		console.log(pos);
		// 1

		var removedItem = fruits.splice(pos, 1); 
		// this is how to remove an item
        
		console.log(fruits.length);
		// ["Strawbeyy", "Mango"]

		var shallowCopy = fruits.slice(); // this is how to make a copy
		// ["Strawbeyy", "Mango"]
	</script>
</head>
<body>
</body>
</html>
```







### String

Permite manipular las cadenas de texto.

![1571856691579](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571856691579.png)

![1571856699541](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571856699541.png)









### EXPRESIONES REGULARES

Permite, mediante un texto con una notación y sintaxis concreta, definir un patrón de caracteres o un carácter en particular.

Permite comparar la expresión regular con textos con el fin de verificar que estos contienen el patrón definido.

Utilización: desde operaciones de validación de datos a búsqueda de textos.



Sintaxis: /patrón/modificadores;![1571857035209](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571857035209.png)

Modificadores:

- g (global): Se aplica a toda la cadena en lugar de dternerse al encontrar la primera correspondencia correcta.
- i (insensible) a mayúsculas y minúsculas.
- m (multilínea): El patrón sigue buscando correspondencias a pesar de haber alcanzado el final de la línea.

![1571857058103](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571857058103.png)



Métodos

![1571857069059](C:\Users\Egoitz\AppData\Roaming\Typora\typora-user-images\1571857069059.png)

































# 3. JS OBJECTS

## Definición de objetos

Definir y crear un único objeto, utilizando un objeto literal {} y palabra: valor

Utilizar la palabra clave **New Object()**

Con un constructor de objetos: se crea un “tipo de objetos” 

```javascript
function person(first, last, age, eye) { 
    this.firstName = first; 
    this.lastName = last; 
    this.age = age; 
    this.eyeColor = eye; 
} 

var myFather = new person("John", "Doe", 50, "blue"); 
```





## Definiciones de objetos literal {} 

![0](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\0.JPG)





## Definiciones de objetos Con New 

![1](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\1.JPG)





## Definiciones de objetos con constructor function 

![2](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\2.JPG)





##  Objetos javascript por referencia 

![3](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\3.JPG)





## Objetos javascript for…in 

![4](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\4.JPG)





## Objetos javascript delete 

![5](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\5.JPG)





## Objetos javascript method 

![6](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\6.JPG)





##  Objetos javascript method-modificar-propiedades 

![7](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\7.JPG)





##  Objetos javascript añadir propiedades y method a instancias 

![8](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\8.JPG)





## Objetos javascript añadir propiedades y method al prototipo 

![9](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\9.JPG)





## Objetos javascript añadir propiedades y method con el método prototype  

![10](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\10.JPG)



##  Getters and Setters. Data Quality get 

### EJ18

![11](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\11.JPG)



### EJ19

![12](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\12.JPG)



### EJ20

![13](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\13.JPG)





##  Object.create y call  

![14](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\14.JPG)

































# 4. MODELO DEL OBJETO DOCUMENTO

**DOM**: Modelo Objeto Documento más conocido, permite representar la estructura lógica de una página HTML o documento XML mediante una jerarquía de objetos. 

![15](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\15.JPG)



La lista de objetos del DOM que representan las caracteristicas de cada navegador: Navigator, Screen, Window, Document, History, Location. 

Estos objetos se conocen como **BOM – Browser Object Model.**  













## Interacción de los objetos con el navegador

WINDOW

![16](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\16.JPG)





### window.open()

window.open(URL, name, specs, replace)

```html
<input type="button" value="Abre una Ventana" onclick="
        myWindow1 = window.open('', 'Nueva Ventana', 'width=300, height=200');
        myWindow1.document.write('<html>');
        myWindow1.document.write('<head>');
        myWindow1.document.write('<title>Ventana Test</title>');
        myWindow1.document.write('</head>');
        myWindow1.document.write('<body>');
        myWindow1.document.write('Se usan las propiedades:');
        myWindow1.document.write('<li>height=200</li> <li>width=300</li>');
        myWindow1.document.write('</body>');
        myWindow1.document.write('</html>');
    ">
    <input type="button" value="Abre una Ventana" onclick="
        window.open('https://www.larioja.com/', 'Nueva Ventana', 'width=300, height=200');">


    <script>
        window.open('https://www.larioja.com/', '_blank');
        var nuevaVentana = window.open('https://www.larioja.com/', '_parent');
        if (window.confirm('¿Desea cerrar la ventana?')) {
            nuevaVentana.close();
        }
    </script>
```









### Usar **iframes** en lugar de **frames**

![17](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\17.JPG)



```html
<iframeset cols="50%, 50%">
    <iframe src="marco1.html" name="marco1" noresize></iframe>
    <iframe src="marco2.html" name="marco2" noresize></iframe>
</iframeset>
```

```html
<form name="form1">
	<select name="color">
		<option value="green">Green</option>
		<option value="blue">Blue</option>
	</select>
	<br><br>
	<select name="marcos">
		<option value="0">Izquierda</option>
		<option value="1">Derecha</option>
	</select><br><br>
</form>
```

```html
<script>
	function metodo() {
    	var x = parent.document.getElementById("marco1").contentDocument;
        var y = parent.document.getElementById("marco2").contentDocument;
        campoColor = x.form1.color;

        if (campoColor.selectedIndex == 0) {
        	colorin = 'green';
		} else {
         	colorin = 'blue';
         }

         campoFrame = x.form1.marco1;

         if (campoFrame.selectedIndex == 0) {
         	x.body.style.backgroundColor = colorin;
		} else {
			y.body.style.backgroundColor = colorin;
    	}
	}
</script>
<body>
    <form>
        <input type="Button" value="Cambiar Color" onclick="metodo()">
    </form>
</body>
```



#### A.4.1 - A-4-5









### location (A.4.6)

Corresponde a la URL de la página web en uso.
Su principal función es la de consultar las diferentes partes que forman una URL como por ejemplo: 

![18](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\18.JPG)

![19](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\19.JPG)







### history

Almacena las referencias de las páginas web visitadas.
Las referencias se guardan en una lista utilizada principalmente para desplazarse entre dichas páginas web. 
No es posible acceder a los nombres de las URL, ya que es información privada, pero sí al índice para moverse a través del mismo. 

![20](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\20.JPG)

![21](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\21.JPG)







### navigator

Permite identificar las características de la plataforma sobre la cual se ejecuta la aplicación web. Ejemplo: 

![22](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\22.JPG)

![23](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\23.JPG)







### screen

Corresponde a la pantalla utilizada por el usuario.
Todas sus propiedades son solamente de lectura. 

![24](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\24.JPG)

![25](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\25.JPG)









### document (A.4.7)

Se refiere a los documentos que se cargan en la ventana del navegador. 
Permite manipular las propiedades y el contenido de los principales elementos de las páginas web. 
Cuenta con una serie de sub-objetos como los vínculos, puntos de anclaje, imágenes o formularios. 

![26](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\26.JPG)

![28](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\28.JPG)

![27](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\27.JPG)









## Acceso DOM

#### Propiedad

Existen elementos que permiten ser accesibles directamente a través de las propiedades del objeto document. 
Estos elementos se caracterizan por ser únicos dentro del documento. 
Ej.: var cabecera= document.head; 



#### Colección

Usado para elementos que no tienen porqué ser únicos, el objeto document nos ofrece propiedades que devuelven una colección ordenada de esos elementos (forms, links, images, etc.) 



#### Recorrido de nodos 

Se puede explorar el árbol de nodos. 
Para ellos se usan propiedades como, childNodes, firstChild, lastChild, previousSibling, nextSibling o parentNode. 
Se suelen usar en combinación con nodeType y nodeName. 
También con métodos como hasChildNodes(), que indica si el nodo contiene a su vez nodos anidados. 



####  Métodos de búsqueda 

Los métodos de búsqueda ofrecidos por el objeto document permiten usar como criterio de búsqueda tanto atributos del elemento como selectores CSS. 
Si empleamos los atributos: 

- getElementById()
- getElementsByName()
- getElementsByTagName() 
- getElementsByClassName()

En caso de usar como criterio de búsqueda selectores CSS, se ofrecen los métodos: 

- querySelector(cadenaSelector)
- querySelectorAll() 

![29](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\29.JPG)

![30](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\30.JPG)

![31](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\31.JPG)











## Modificar el DOM (A.4.8 - A.4.12)

Es importante tener en cuenta que el DOM debe estar cargado antes de poder interactuar con él. 

![32](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\32.JPG)





### Mediante código HTML

#### Contenido estático

![33](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\33.JPG)





No sólo creación de texto, también es posible crear y manipular todo tipo de objetos:

![34](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\34.JPG)





#### Contenido dinámico

Propiedades

- **innerHTML**: código HTML incluido en el elemento actual a excepción de las etiquetas que lo rodean. 
- **outerHTML**: código HTML incluido en el elemento actual incluyendo de las etiquetas que lo rodean. 

Métodos 

- **insertAdjacentHTML(posicion,codigo)**
  - posicion: beforeBegin, afterBegin, beforeEnd, afterEnd 

![35](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\35.JPG)









### Usar objetos de tipo elemento 

- **document.createElement(etiqueta)**: crea el nodo pero no lo inserta en el DOM. Por lo que no será visible hasta que se ubique. 
- **appendChild(nodo)**: inserta el nodo en el DOM como hijo menor del elemento actual. 
- **insertBefore(nodo1,nodo2)**: inserta el nodo1 como hermano inmediatamente mayor de nodo2 dentro del elemento actual.
- **removeChild(nuevo, viejo)**: elimina el nodo del DOM y lo devuelve como una referencia. 
- **replaceChild(nuevo,viejo)**: sustituye el nodo viejo por el nuevo dentro del elemento actual.
- **cloneNode(incluirDescendientes)**: devuelve un elemento que es la copia exacta del actual. Si incluirDescendientes=true, duplica el elemento y todos sus descendientes; si es false, no incluye los descendientes. 

![36](H:\DAW2\DWEC - Desarrollo Web Entorno Cliente\EXAMEN\36.JPG)



























# JavaScript

## PROPIEDADES BÁSICAS DE WINDOW

```javascript
window.name = "Mi ventana";
var texto = "";

// Nombre de la ventana
texto += "<br>Nombre: " + window.name;

// Tamaño de la ventana con toolbar y scrollbar
texto += "<br/>Ancho externo: " + window.outerWidth;
texto += "<br />Alto externo: " + window.outerHeight;

// Tamaño de la ventana sin toolbar y scrollbar
texto += "<br />Ancho interno: " + window.innerWidth;
texto += "<br />Alto interno: " + window.innerHeight;

// Scroll horizontal y vertical
texto += "<br />Scroll horizontal: " + window.pageXOffset;
texto += "<br />Scroll vertical: " + window.pageYOffset;

// Distancia de la esquina superior izquierda
texto += "<br />Distancia desde la izquierda: " + window.screenX;
texto += "<br />Distancia desde arriba: " + window.screenY;

document.getElementById("ventana").innerHTML = texto;
```

```javascript
PROPIEDADES CON IFRAMES:
// - frames: devuelve todos los elementos iframe de la ventana.
// - frameElement: devuelve el frame en el que la ventana está insertada.
// - length: devuelve el número de frames que tiene la ventana

PROPIEDADES CON OTRAS VENTANAS:
// - closed: devuelve un booleano si la ventana está cerrada.
// - opener: devuelve una referencia con la ventana que creó la ventana actual.
// - parent: devuelve la ventana padre de la ventana actual
// - self: devuelve la ventana actual

OTROS OBJETOS DEL NAVEGADOR
// - window.document
// - window.navigator
// - window.screen
// - window.history
// - window.location
        
```





## METODOS DE WINDOW MAS IMPORTANTES

```javascript
var miVentana;  // Crea fuera de las funciones para poder acceder a ella

// open(<URL>, <nombre>, <especificaciones>);
function crearVentana() {
// miVentana = window.open("http://www.google.com");
miVentana = window.open("", "", width=500, height=200);
miVentana.document.write("<h1>Mi ventana</h1>");
}

// close(): Cierra una ventana en concreto
function cerrarVentana() {
	miVentana.close();
}

// resizeBy(<nºpix>, <nºpix>): redimensiona una ventana un número de pixeles respecto a su tamaño actual
function redimensionarVentana() {
	miVentana.resizeBy(10,10);
}

// resizeTo(<nºpix>, <nºpix>): redimensiona una ventana al numero de pixeles indicado

// moveBy(<nºpix>, <nºpix>): mueve una ventana un número de píxeles respecto a su posición actual
function redimensionarVentana() {
	miVentana.moveBy(10,10);
}

// moveTo(<nºpix>, <nºpix>): mueve una ventana a una posición en concreto

// scrollBy(<nºpix>, <nºpix>): mueve las barras de scroll un número de píxeles desde la posición actual

// scrollTo(<nºpix>, <nºpix>): mueve las barras de scroll a una posición determinada

// focus(): pone el foco en la ventana indicada
function enfocar() {
	miVentana.focus();
}

// print(): imprime la ventana indicada
function imprimirVentana() {
	print();
	// miVentana.print();
}

// stop(): detener la carga de la página
```

```html
<button onclick="crearVentana()">Crear ventana</button>
<button onclick="cerrarVentana()">Cerrar ventana</button>
<button onclick="redimensionarVentana()">Redimensionar ventana</button>
<button onclick="moverVentana()">Mover ventana</button>
<button onclick="enfocarVentana()">Enfocar ventana</button>
<button onclick="imprimirVentana()">Imprimir ventana</button>
```















## EVENTOS DE TIEMPO

```javascript
// El objeto window permite ejecutar código en intervalos de tiempo.
// Hay tres métodos: setTimeout, clearTimeout, setInterval

// setTimeout(<function>, <milisegundos>): Se indicar cuantos segundos tienen que 
// pasar antes de que la funcion indicada en el primer parámetro se ejecute.

function saludar() {
	alert("¡Hola!");
}

// clearTimeout(<variable timeout>): Si asignamos un setTImeout a una variable podemos detener su funcion con clearTimeout

// setInterval(<funcion>, <milisegundos>): Repite una funcion cada intervalo de tiempo.
var int = setInterval(reloj, 1000);

function reloj() {
	var fecha = new Date(); // Fecha actual
	document.getElementById("reloj").innerHTML = fecha.getSeconds();
}
```

```html
<button onclick="setTimeout(saludar, 3000)">Saluda</button>
<button onclick="sal= setTimeout(saludar, 3000)">Saluda con variable</button>
<button onclick="clearTimeout(sal)">Cancelar saludo</button>
<button onclick="clearTimeout(int)">Cancelar reloj</button>
```













## CARACTERISTICAS

Contiene la informacion de la ventana del visitante
No hay un estandar publico pero la mayoria de los navegadores soportan Screen 



### PROPIEDADES DEL OBJETO SCREEN

```javascript
var texto = "";

// Tamaño pantalla
texto += "<br/>Ancho: " + screen.width;
texto += "<br/>Alto: " + screen.height;

// Tamaño pantalla sin barra de tareas
texto += "<br/>Ancho sin barra: " + screen.availWidth;
texto += "<br/>Alto sin barra: " + screen.availHeight;

// Profundidad de color de la pantalla
texto += "<br/>Profundidad: " + screen.colorDepth;

// Resolucion de color en bits por pixel
texto += "<br/>Resolución: " + screen.pixelDepth;

document.getElementById("pantalla").innerHTML = texto;
```





### PROPIEDADES DEL OBJETO HISTORY

```javascript
// length: número de URLs en el historial de la página.
alert("URLs del historial: " + history.length);
```





### MÉTODOS DEL OBJETO HISTORY

```javascript
// back: carga la url anterior en el historial
function atras() {
	history.back();
}

//forward: cargar la url siguiente en el historial
function adelante() {
	history.forward();
}

// go(<numero|url>): va a una página concreta del historial. Si indicamos un número positivo va hacia delante un nº de páginas; si indicamos un número negativo va hacia atrás un nº de páginas; si indicamos una url o parte de ella va a la url en concreto.
function ir() {
	var numero = prompt("Indica un número para moverte en el historial");
	history.go(numero);
}
```

```html
<button onclick="atras()">Atrás</button>
<button onclick="adelante()">Adelante</button>
<button onclick="ir()">Ir a una página</button>
```







### PROPIEDADES DEL OBJETO LOCATION

```javascript
var texto = "";

// href: HREF (URL) de la página
texto += "<br/>Href: " + location.href;

// hostname: nombre del host de la página
texto += "<br/>Hostname: " + location.hostname;

// pathname: pathname de la página
texto += "<br/>Pathname: " + location.pathname;

// protocol: protocolo de la página
texto += "<br/>Protocol: " + location.protocol;

// hash: hash o ancla de la página (Ej. www.web.com/index.html#indice)
texto += "<br/>Hash: " + location.hasg;

// host: nombre del hostname y el puerto
texto += "<br/>Host: " + location.host;

// origin: nombre del protocolo, hostname y el puerto
texto += "<br/>Origin: " + location.origin;

// search: querystring de la página (Ej. www.web.com/index.html?user=ada)
texto += "<br/>Search: " + location.search;
document.getElementById("location").innerHTML = texto;
```





### MÉTODOS DEL OBJETO LOCATION

```javascript
// assign(<url>): asigna un nuevo documento a la página
function nuevoDocumento() {
	location.assign("http://www.google.com")
}
// reload(): recarga la página
function recarga() {
	location.reload()
}
// replace(<url>): sustituye la página por otra. DESAPARECE SU HISTORIAL.
function sustituye() {
	location.replace("http://www.google.com");
}
```

```html
<button onclick="nuevoDocumento()">Carga un nuevo documento</button>
<button onclick="recarga()">Recarga la página</button>
<button onclick="sustituye()">Sustituye la página</button>
```













## Modelo de eventos avanzados del W3C

```javascript
// elemento.addEventListener("<evento_sin_on>",<funcion>,<false|true>);
document.getElementById("w3c").addEventListener("click", saludarUnaVez, false);
document.getElementById("w3c").addEventListener("click", colorearse, false);
document.getElementById("w3c").addEventListener("mouseover", fondo, false);

function saludarUnaVez() {
alert("¡Hola, caracola!");
	document.getElementById("w3c").removeEventListener("click", saludarUnaVez);
}

function colorearse() {
	document.getElementById("w3c").style.color = "red";
}

function fondo() {
	document.getElementById("w3c").style.background = "blue";
}

// Funciones anónimas
// elemento.addEventListener("<evento_sin_on>",function(){<codigo_funcion}),false);
document.getElementById("w3canonima").addEventListener("click", function() {
	this.style.background = "#C0C0C0";
});
```









## Modelo de eventos avanzados de Microsoft

```javascript
// elemento.attachEvent("<evento_con_on>",funcion);
document.getElementById("ms").attachEvent("onclick", saludarUnaVez);
document.getElementById("ms").attachEvent("onclick", colorearse);
document.getElementById("ms").attachEvent("onmouseover", fondo);

function saludaUnaVez() {
	alert("¡Hola, caracola!");
	document.getElementById("ms").detachEvent("onclick", saludarUnaVez);
}

function colorearse() {
	document.getElementById("ms").style.color = "red";
}

function fondo() {
	document.getElementById("ms").style.backgroundColor = "blue";
}
// Funciones anónimas
// elemento.attachEvent("<evento_con_on>",function(){...});
documnet.getElementById("msanonima").attachEvent("onclick", function() {
	this.style.backgroundColor = "#C0C0C0";
});
```













## Obtener información de un evento

```javascript
document.getElementById("eventos").addEventListener("mouseover", manejador);
document.getElementById("eventos").addEventListener("mouseout", manejador);
document.getElementById("parrafo1").addEventListener("click", saludo);
document.getElementById("parrafo2").addEventListener("click", saludo);

function manejador(e) {
	//Valoramos la posibilidad de que se utilice un navegador de Microsoft
	if (!e) e = window.event;
		switch (e.type) {
			case "mouseover":
				this.style.color = "purple";
				break;
			case "mouseout":
				this.style.color = "yellow";
				break;
		}
}

function saludo(e) {
	//Valoramos la posibilidad de que se utilice un navegador de Microsoft
	if (!e) e = window.event;
	if (e.target.id == "parrafo1") alert("Has pulsado el primer párrafo");
	else if (e.target.id == "parrafo2") alert("Has pulsado el segundo párrafo");
	alert("Has pulsado el " + e.target.id);
}
```











## 5.01

```javascript
window.addEventListener("load", inicio);

function inicio() {
	document.getElementById("cambiarTextos").addEventListener("click", cambiarTextos);
	document.getElementById("cambiarClases").addEventListener("click", cambiarClases);
	document.getElementById("quitarClases").addEventListener("click", quitarClases);
}

function cambiarTextos() {
	// Selecciónar UN UNICO elemento según su id
	document.getElementById("parrafo1").innerHTML = "Primer párrafo cambiado";
    
	// Selecionar TODOS los elementos según su etiqueta
	document.getElementsByTagName("p")[1].innerHTML = "Segundo párrafo cambiado";
    
	// Seleccionar TODOS los elementos según su clase
	document.getElementsByClassName("miClase")[0].innerHTML = "Tercer párrafo cambiado";

	// Seleccionar un elemento dentro de otro
	var principal = document.getElementById("main");
	var parrafo1 = principal.getElementById("parrafo1");

	//Sleecionar el PRIMER elemento con un selector CSS
	/*document.querySelector("p.miClase");
	document.querySelector("p.miClase")[0];*/
}

function cambiarClases() {
	document.getElementById("parrafo1").setAttribute("class", "miClase");
	document.getElementById("parrafo2").className = "miClase";
}

function quitarClases() {
	for (var i = 0; i < document.getElementsByTagName("p").length; i++) {
		document.getElementsByTagName("p")[i].className = "";
	}
}
```

```html
<div id="main">
	<p id="parrafo1">Este es el primer párrafo</p>
	<p id="parrafo2">Este es el segundo párrafo</p>
	<p id="parrafo3" class="miClase">Este es el tercer párrafo</p>
</div>
<br/>
<button id="cambiarTextos">Cambiar texto de párrafos</button>
<button id="cambiarClases">Cambiar clases de párrafos</button>
<button id="quitarClases">Quitar clases de todos los párrafos</button>
```







## 5.02

```javascript
window.addEventListener("load", inicio);

function inicio() {
	document.getElementById("crearParrafo").addEventListener("click", crearParrafo);
	document.getElementById("crearImagen").addEventListener("click", crearImagen);
	document.getElementById("borrarUltimo").addEventListener("click", borrarUltimo);
	document.getElementById("borrarPrimero").addEventListener("click", borrarPrimero);
	document.getElementById("sustituirPrimeroVacio").addEventListener("click",sustituirPrimero);
}

function crearParrafo() {
	//Crear elemento
	var parrafo = document.createElement("p");

	//Crear texto
	var texto = document.createTextNode(document.getElementById("texto").value);
	parrafo.appendChild(texto);

    //Añadir atributos
	parrafo.setAttribute("class", "miClase");

    //parrafo.className = "miClase";
	var cont = document.getElementById("div1");
	cont.appendChild(parrafo);
}

function crearImagen() {
	//Crear elemento
	var imagen = document.createElement("img");

    //Añadir atributos
	var ruta = prompt("Introduce la ruta");
	imagen.setAttribute("alt", prompt("Introduce el texto alternativo"));
	imagen.src = ruta;
	var cont = document.getElementById("div1");
	cont.appendChild(imagen);
}

function borrarUltimo() {
	var cont = document.getElementById("div1");
	var hijo = cont.lastChild; //Seleccionar el último hijo

    //Elimina un elemento hijo
	cont.removeChild(hijo);
}

function borrarPrimero() {
	var cont = document.getElementById("div1");
	var hijo = cont.firstChild; //Seleccionar el primer hijo

    //Elimina un elemento hijo
	cont.removeChild(hijo);
}

function sustituirPrimero() {
	var cont = document.getElementById("div1");
	var parrafo =document.createElement("p").appendChild(document.createTextNode("Vacio"));
	//Sustituir un elemento
	cont.replaceChild(parrafo, cont.firstChild); //Nuevo, viejo
}
```

```html
<div id="div1"></div>
<br/>
<textarea id="texto"></textarea>
<br/>
<button id="crearParrafo">Crear parrafo</button>
<button id="crearImagen">Crear imagen</button>
<button id="borrarUltimo">Borrar ultimo</button>
<button id="borrarPrimero">Borrar primero</button>
<button id="sustituirPrimeroVacio">Sustituir primer párrafo por vacío</button>

```









## 5.03

```javascript
window.addEventListener("load", inicio);

function inicio() {
	for (var i = 0; i < document.getElementsByTagName("h2").length; i++) {
		document.getElementsByTagName("h2")[i].addEventListener("click", recorrerAdelante);
	}
}

function recorrerAdelante(e) {
	var texto = "";
	var h2 = e.target;
	texto += "Has elegido " + h2.textContent;

    //Seleccionamos el padre
	var padre = h2.parentElement;
	texto += " que está situada en el " + padre.id + "<br/>";

    //Seleccionamos el hermano
	//var ul = h2.nextSibling; //No lo utilizamos porque incluye nodos de tipo texto
	var ul = h2.nextElementSibling;

    //Mostrar el número de hijos
	//¡OJO! .childNodes incluye texto y comentarios; children no.
	texto += "El número de provincias es " + ul.children.length + ": ";
	var hijo = ul.firstChild;

    //Si quisiéramos seleccionar el último hijo, pondríamos .lastChild.
	while (hijo != null) {
		texto += " " + hijo.textContent;
		hijo = hijo.nextElementSibling;
	  // Si quisiéramos seleccionar el hermano anterior, pondríamos .previousElementSibling
	}

	//Mostramos el texto
	document.getElementById("texto").innerHTML = texto;
	//Si ponemos .textContent mostraríamos texto plano, y no coge etiquetas html.
}
```

```html
<div id="norte">
	<h2>Galicia</h2>
	<ul id="lista">
		<li>A Coruña</li>
		<li>Lugo</li>
		<li>Ourense</li>
		<li>Pontevedra</li>
	</ul>
</div>
<div id="sur">
	<h2>Canarias</h2>
	<ul id="lista">
		<li>Santa Cruz de Tenerife</li>
		<li>Las Palmas</li>
	</ul>
</div>
<div id="texto"></div>
```









