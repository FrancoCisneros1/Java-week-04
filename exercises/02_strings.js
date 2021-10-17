/*************
a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase).
b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
substring).
c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
substring).
d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
indexOf).
f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).
****************/

//2.a)

var objeto = 'helicoptero';

console.log ('2.a) -',objeto.toUpperCase());

//2.b)

var objeto2 = 'hipopotamo';

console.log ('2.b) -',objeto2.substring(1,5));

//2.c)

var objeto3 = 'auriculares';

console.log ('2.c) -',objeto3.substring(7,10));

//2.d)

var objeto4 = 'hipopotamos';

console.log ('2.d) -',objeto4.charAt(0).toUpperCase() + objeto4.slice(1));

//2.e)

var objeto5 = 'helico pteros';

console.log ('2.e) -',objeto5.indexOf (' '));

//2.f)

var objeto6 = 'hipopotamos helicopteros';
var space = objeto6.indexOf (' ');
var objeto7 = objeto6.substring(0,1).toUpperCase() + objeto6.substring(1,space) + objeto6.substring(space++,++space).toUpperCase ()+ objeto6.substring (space);

console.log ('2.f) -', objeto7);
