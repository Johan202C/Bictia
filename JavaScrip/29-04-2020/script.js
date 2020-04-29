/* let typeCard = "Debit Card";

switch(typeCard){
    case "Debit Card":
        console.log("This is a Debit Card");
        break;
    case "Credit Card":
        console.log("This is a Credit Card");
        break;
    default:
        console.log("No Card");
}
 */


 const genios = ["Mark Suckerberg", "jeff Bezos", "Elon Musk", ["Space X", "Amazon", "Apple", ["Cohete", "online", "Laptops"]]];
/* 
 console.log(genios[0],genios[3][2],genios[3][3][3],genios[1],genios[3][1],genios[3][3][1],genios[2],genios[3][0],genios[3][3][5]); */


/*  console.log(genios[0].length,genios[1].length) */

const genios1 = genios.push("steve Jobs");
const genios2 = genios[3].push("Facebook");
const genios3 = genios[3][3].push("Redes Sociales");



// .slice  -  sirve para extrar elementos de un array en un nuevo array

const deletGenios = genios.slice(0, 1);
console.log(genios);
console.log(deletGenios);

// .splice
// sirve para eliminar y agregar elementos de un array.
const addGenios = genios.splice(0, 1, "Bill Gates");
console.log(genios);

const deletJobs = genios.splice(4,1);
console.log(deletJobs);

const addJobsTwo = genios.splice(1, 0, "Steve Jobs");
console.log(genios);

const eliminarObjs = genios[4][3].slice(2, 4);
console.log(eliminarObjs);

console.log(genios);

const otraEliminacion = genios


const estudiante1 = {
    nombre : "Johan",
    apellido : "Cortes",
    edad : 20,
    barrio : "Villa javier",
    padres: {
        madre :{
            nombre : "Adriana",
            edad : 39,
            barrio : "Villa javier", 
        },
        Padre :{
            Nombre: "Ricardo",
            edad : 50,
            barrio : "Villa javier",
        }
    },
    hobbies : ["Hacer deporte", "Dibujar", "Tatuar"]
}

console.log(estudiante1)