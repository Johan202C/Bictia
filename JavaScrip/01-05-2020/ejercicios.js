/*| const userConfirmed = "Johan Cortes";

const user = prompt("Usuario :");

if(user === userConfirmed){
    alert(`Bienvenido ${user}`);
}else{
    alert(`${user} es incorrecto`);
}
 */

//Progrmaa que pida un numero lo multiplica por 3 y verifica si el resultado es multiplo de 4 

/* const numero = parseInt(prompt("Escriba un numero: "));
const result = numero*3;

alert(`El resultado de ${numero} por 3 es : ${result}`);

if(result % 4 == 0){
    alert("Es multiplo de 4");
}else{
    alert("No es multiplo de 4");
} */


//Un programa que pida 2 numero por prompt y los vuelva enteros y adicionalmente valide si los numero son menores que cero y si son mayor que cero que multiplique los dos valores.

/* const num1 = prompt("Escriba el primer numero: ");
const num2 = prompt("Escriba el segundo numero: ");

const parse1 = parseInt(num1);
const parse2 = parseInt(num2);

if(parse1< 0){
    alert("el numero es menor que cero");
}else if(parse2<0){
    alert("el numero es menor que cero");
}else{
    alert(parse1*parse2);
}
 */

//programa con Math.floor---------------------------

/* const num1 = parseInt(prompt("Ingrese un numero: "));
const hora = Math.floor(num1/60);
const minuto = (num1%60);

console.log(`${hora} : ${minuto}`); */


 //-Escribe un programa que pida por prompt dos numero y diga cual es el mayor.

/*  
 const num1 = parseInt(prompt("Escriba el primer numero: "));
 const num2 = parseInt(prompt("Escriba el segundo numero: "));

 if(num1 > num2){
     alert(`${num1} es mayor que ${num2}`);
 }else{
     alert(`${num1} es menor que ${num2}`);
 }
 */

//Escribe un programa que pida un númpero por prompt y diga si es impar

/* const numero = parseInt(prompt("Escriba un numero :"));

if( numero %2==0){
    alert("El numero es par");
}else{
    alert("El numero es impar");
} */


//Escribe un programa que pida un númpero por prompt y diga si es divisible x3

/* const numeroDiv = parseInt(prompt("Escriba un numero :"));

if(numeroDiv % 3 == 0){
    alert("El numero es divisible por 3");
}else{
    alert("no es divisivle");
}
  */


//Escribe un programa que pida un númpero por prompt lo multiplican por 3 y que imprima todos los números que hay entre 0(cero) y el resultado de la multiplicación

/* const numero = parseInt(prompt("Escriba un numero :"));
result = numero*3;
alert(`${numero} multiplicado por 3 es :${result}`);
alert(`Estos son los numero que hay entre ${numero} y ${result}`);
for(i= numero;i <= result;i +=1){
    console.log(i);
}
 */

//Escribe un programa que pida dos númperos por promt y diga los multiplos de 3 entre 0(cero) y el resultado.

/* const num1 = parseInt(prompt("Escriba el primer numero: "));
const num2 = parseInt(prompt("Escriba el segundo numero: ")); */




//Escribe un programa que pida tres númperos por promt, los dos primeros deben estar entre 10 y 20 (deben hacer la validación) y el 3ero no puede ser mayor a 9(hacer la validación) y multiplican los 2 primeros y preguntan los multiplos de 3er número entre 0(cero) y el resultado de la multiplicación.


/* let num1 = parseInt(prompt("Escriba el primer numero"));
while(num1<10 || num1>20){
    num1 = parseInt(prompt("Escriba el primer numero"));
}
let num2 = parseInt(prompt("Escriba el segundo numero"));
while(num2<10 || num2>20){
    num2 = parseInt(prompt("Escriba el segundo numero"));
}
let num3 = parseInt(prompt("Escriba el tercer numero"));
while(num3>10){
    num3 = parseInt(prompt("Escriba el tercer numero"));
}

const result = num1 * num2;

alert(`${num1} X ${num2} es igual a: ${result}`);

for(let i=0;i < result;i+=1){
    console.log(i*num3);    
} */




/* a = parseInt(prompt("Ingrese el primer número"));
while (a<10 || a>20){
    a = parseInt(prompt("Ingrese el primer número"));
}

b = parseInt(prompt("Ingrese el segundo número"));
while (b<10 || b>20){
    b = parseInt(prompt("Ingrese el segundo número"));
}

c = parseInt(prompt("Ingrese el tercer número"));
while (c>9){
    c = parseInt(prompt("Ingrese el tercer número"));
}
 */

 //-Escribe un programa por prompt que pida 2 palabras y diga por consola cual de las dos palabras es más larga
/* const palabra1 = (prompt("Escriba la primera palabra :"));
const palabra2 = (prompt("escriba la segunda palabra :"));

if(palabra1.length > palabra2.length){
    alert(`${palabra1} es mas larga`);
}else if(palabra1 == palabra2)
    alert(`son iguales`);
    else{
        alert(`${palabra2} es mas larga`);
    } */

//-Escribe un programa que pida una frase por prompt y diga cuantas vocales "a" hay en la frase.

/* const a = prompt("Ingresa tu frase")
console.log(a)

for(let i=0; i<frames.length; i+=1){
    console.log(frase[i])
    if(frase[i]=='a'){
        totalA+=1;
    }
}
console.log(totalA);
 */


/*

-Escribe un programa que pida 2 números y muestre en consola el resultado de las 4 operaciones matemática y además el residual

Si acaban acá hay más

- Escribe un programa que reciba como entrada el radio de un círculo y entregue como salida su perímetro y su área
-Escriba un programa que calcule el promedio de 4 notas ingresadas por el usuario
-Escriba un programa que convierta de centímetros a pulgadas. Una pulgada es igual a 2.54 centímetros

Bonus extra
-Escribe un programa que reciba como entrada las longitudes de los dos catetos a y b de un triángulo rectángulo, y que entregue como salida el largo de la hipotenusa c del triangulo, dado por el teorema de Pitágoras */


//escriba un prgrama que pida 2 numero y haga la suma entre todos los numero que hay entre esos numeros;




