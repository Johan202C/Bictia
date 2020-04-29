//   .POP  

// .pop = Toma un array y va a eliminar el ultimo elemento.




/* const estudiantes = ["leonarndo", "Jesus", "Tatiana"];


console.log(estudiantes);

const estudiantes1 = estudiantes.pop()

console.log(estudiantes1);
console.log(estudiantes); */




//----------------OBJETOS

const villano = {
    nombre: 'Dione',
    codeName: 'Thanos',
    vivo: false,
    edad: 110,
    armas: [ 'Martillo', 'EspadasDouble', 'Guante Gemas'],
    coors: {
        lat:34.04,
        lng:-118.7,
    }
}


//Para llamar a consola la parte del objeto que queremos.
//console.log(villano.codeName);
//console.log(villano.coors.lat);
//console.log(villano.armas.length);
//console.log(villano.armas[villano.armas,length-2])

const sinCodeName = delete villano.codeName

console.log(villano)

const borrarEdad = delete villano.edad

console.log(villano)

