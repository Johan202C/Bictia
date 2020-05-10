const thingsHouse ={
    sala:"mesa",
    bano:"retrete",
    cocina:"lavaloza",
    terraza:['lavader', 'piso', 'cuarto'],
    habitacion:['escritorio', 'armario', 'toalla', 'mesita'],
}


const delet = delete thingsHouse.terraza[0];
console.log(thingsHouse)

const otroElimin = delete thingsHouse.cocina;
console.log(thingsHouse)

const f = delete thingsHouse.sala;
console.log(thingsHouse);
