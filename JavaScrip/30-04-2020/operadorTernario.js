//--------Operador Ternario

/* const dias= 0;
const horaActual = 7; */



let horaApertura;
let mensaje;

let date = new Date();

let day = date.getDate();
let hour = date.getHours();

/* 
if ([0,6].includes(day)){
    console.log("fin de semana");
    horaApertura = 8;
}else{
    console.log("Dia de semana")
    horaApertura=7;
}

if(hour>=horaApertura){
    mensaje="esta abierto"
}else{
    mensaje="esta cerrado"
}

console.log(mensaje);
 */

 horaApertura =([0,6].includes(day))?8:7;
 mensaje = (hour >= horaApertura)?"Esta abierto":"esta cerrado"
