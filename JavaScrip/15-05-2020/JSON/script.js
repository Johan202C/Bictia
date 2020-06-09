const formHobbies = document.querySelector('#formHobbies');

const hobbies = document.querySelectorAll('.inputHobbie');

const hobbiesListados = document.querySelector('#hobbiesListados');

const btnLimpiar = document.querySelector('#limpiar');


const obtenerLocal = ()=>{
    const hobbiesEnLocal = JSON.parse(localStorage.getItem('hobbies')) || [];
    for(let hobbie of hobbiesEnLocal){
        const newLi = document.createElement('li');
        newLi.innerText = hobbie;
        hobbiesListados.appendChild(newLi);
    }
}


formHobbies.addEventListener('submit', (e)=>{
    e.preventDefault();
    let arrHobbies = [];
    console.log(arrHobbies);
    hobbiesListados.innerHTML='';
    for(let hobbie of hobbies){
        if(hobbie.checked ===true){
            const divPadre = hobbie.closest('.contInputs')
            const labelHijo = divPadre.querySelector('.hobbies');
            const hobbieText = labelHijo.innerText;
            arrHobbies.push(hobbieText)
        };
    };
    const hobbiesGuardados = JSON.stringify(arrHobbies);
    localStorage.setItem('hobbies', hobbiesGuardados)
    obtenerLocal();
})
obtenerLocal();


btnLimpiar.addEventListener('click', ()=>{
    localStorage.clear();
    hobbiesListados.innerHTML = '';
})

