/*******
 *  a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la
suma de ambos números en una 3er variable.
b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er
variable.
c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras
del string) guardando el resultado de la suma en una 3er variable (utilizar length).
*********/

//1.a)

var edadJuan = 34; 
var edadCarlos = 15;
result = edadJuan + edadCarlos;

console.log ('1.a) -',result);

//1.b)

var nombre = 'juan';
var apellido = 'carlos';
result = nombre +' ' + apellido;

console.log ('1.b) -', result);

//1.c)

var nombre1 = 'juan'
var apellido1 = 'carlos'

result = nombre1.length + apellido1.length

console.log ('1.c) -', result)