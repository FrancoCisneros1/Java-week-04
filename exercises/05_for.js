/**************
a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
JavaScript para mostrar una alerta utilizando cada una de las palabras.
b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una
alerta por cada palabra modificada.
c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del
punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la
variable sentence. Al final mostrar una única alerta con la cadena completa.
d) Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el
número de la repetición, es decir que al final de la ejecución del bucle for debería
haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar
por la consola del navegador el array final (utilizar console.log).
******************/

//5.a)
var nombres = ['pedro', 'pepe', 'jose', 'juan', 'pepa']

console.log('5.a) Array -', nombres);

for (var index = 0; index < nombres.length; index++) {
    var tunombre = nombres[index];
    alert('5.a) - ' + tunombre);
}

//5.b)

for (var index2 = 0; index2 <nombres.length; index2++) {
    var tunombre2 = nombres[index2].substring (0,1).toUpperCase() + nombres[index2].substring(1)
    alert ('5.b) - ' + tunombre2) 
}

//5.c)

var sentence = ' '
for (var index3 = 0; index3 <nombres.length; index3++){
    sentence = sentence.concat(nombres[index3])
}    
    alert ('5.c) - ' + sentence)

//5.d)

var empty = []
for (var index4 = 0; index4 <10; index4++){
    empty.push (index4);
}
console.log('5.d) -', empty)
