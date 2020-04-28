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

const superHeros = ["Superman", 87, false, ["joker", "bain" , "pinguino" ,["psicologiaBarata", "fuerza", "sombrilla"]], 50];
/* console.log(superHeros[0],superHeros[3]); */

/* length es para que me diga en consola la cantidad de elementos que hay
console.log(superHeros.length); */

/* console.log(superHeros[0].length) */

//push
//Push sirve para agregar elementos de un array

/* const estudiantesClase = ["Leonardo","Jesus","Tatiana","johan"];

const estudiantesClase2 = estudiantesClase.push("Francisco", "Hernan", "Valeria");
console.log(estudiantesClase) */

const superHeros2 = superHeros[3].push("enemy");
console.log(superHeros);
