/***************
a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).
b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
e) Invertir el orden del array (utilizar reverse).
f) Unir todos los elementos del array en un único string donde cada mes este separado
por un guión - (utilizar join).
g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice). 
*******************/

//3.a)

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log('3.a) - '+ meses.slice(5,6) + ' ' + meses.slice(10,11));

//3.b)

console.log('3.b) - ' + meses.sort());

//3.c)

let items = meses.push('año');
let items2 = meses.unshift('banana');

console.log('3.c) - '+ meses);

//3.d)

let items3 = meses.shift();
let items4 = meses.pop();

console.log('3.d) - '+ meses);

//3.e)

let items5 = meses.reverse();

console.log('3.e) - '+ meses);

//3.f)

console.log('3.f) - '+ meses.join('-'));

//3.g)

//var item6 = meses.slice('5,11');

console.log('3.g) -'+ meses.slice(5, 11));