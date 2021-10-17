/*************
a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador.
b) A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.
c) Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero.
d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado).
e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual.
**************/

//6.a)

function suma(a, b){
      return a + b;
}
 
var resultado = suma(14,18)
console.log('6.a) -', resultado)

//6.b)

function validador(a, b){
    if (a === 'number' && b ==='number'){
        return a + b;
} else {
    alert ('6.b) ¡Eso no es un número!');
        return 'NaN';
    }
}
var test6 = validador(3, 'g');
console.log ('6.b) -', test6);

//6.c)

function validateInteger ( a){
    if (a === Math.round(a)){
        return '6.c) true'
    } else{
        return '6.c) false';
    }
}
console.log(validateInteger (1.3, 7));

//6.d)

function validarEntero(a, b){
    if (a !== Math.round(a) || b !== Math.round(b)){
    alert ('6.d) - No es un número entero, va a ser redondeado');
    return Math.round (a + b);
    } else{
    return a + b;
    }
}
console.log(validarEntero(8, 6.3))

//6.e)

function validator (a, b){
    if (a !== 'number' || b !=='number'){
    alert ('6.e) - No estás poniendo un número');
        return 'NaN';
    } else{
        return validarEntero;
    }
}
console.log(validator(4,'f'))

