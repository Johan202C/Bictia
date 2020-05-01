/* Console.log para mostrar en consola */
console.log("HOla mundo")
/* Para mostrar mensajes en el navegador */
alert("Hola")

/* En javascrpt una variable puede gueardar string, booleano, int

-lenguaje de debil tipado se redefinen .
-lenguaje de fuerte tipado se mantienen.

DECLARACIONES VARIABLES------------


var:tiene un alcance global a nivel de ventana.
const : variable que siempre sera constante.
let:tiene mayor alcance: es mejor usarlo.


 //------------para mostrar el tamano de la pantalla 


 const height=window.outerHeight
 console.log(height)

 /* Tipos de datos */

 /* PRIMITIVOS */
 //number : int, float, etc
 //string : cualquier tipo de texto
 //boolean :solo recibe dos valores TRUE/FALSE
 //null: Valor ninguno
 //undefined :una variable que se declara pero no recibe valor

 const numero = 321;//number
 const text = "Hola mundo soy una cosntante";//string
 const verdadero = true; //boolean
 const falso = false; //boolean

 let estudiantes;//undefinded
 const ejemploNull = null;//undefidend

/*  Sirve para saber que tipo de dato es : typeof */
 console.log(typeof numero)
 console.log(typeof text)
 console.log(typeof verdadero)
 console.log(typeof falso)



 /* const nombre = "Superman";
const edad = "27";
const estado = false;



console.log("Este es el nombre: "+nombre);
console.log("Esta es la edad:  "+edad);
console.log("Estado Civil:  "+estado);

console.log({nombre});
console.log({edad});
console.log({estado});

console.log(`Este es el nombre ${nombre}`);
console.log(`Esta es la edad ${edad}`);
console.log(`Este es el estado civil ${estado}`); */


/* COMPLEJOS */

//Array
const estDeLaClase = ["Leonardo","Jesus","Tatiana","johan"];
 
console.log(estDeLaClase[4]);

const superHeros = ["Superman", 87, false, ["joker", "bain" , "pinguino" ,["psicologiaBarata", "fuerza", "sombrilla"]], 50];
/* console.log(superHeros[0],superHeros[3]); */


//------------length

/* length es para que me diga en consola la cantidad de elementos que hay
console.log(superHeros.length); */

/* console.log(superHeros[0].length) */


//--------------push
//Push sirve para agregar elementos de un array

/* const estudiantesClase = ["Leonardo","Jesus","Tatiana","johan"];

const estudiantesClase2 = estudiantesClase.push("Francisco", "Hernan", "Valeria");
console.log(estudiantesClase) */

const superHeros2 = superHeros[3].push("enemy");
console.log(superHeros);



