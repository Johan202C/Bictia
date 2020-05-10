//const numeros = ["zandia", "papaya", "manzana", "melon"];

/* for(let i in numeros)[
    document.write(numeros[i]+"<br>");
] */

/* for(let i of numeros)[
    document.write(i+"<br>")
] */


/*---------------- FORMULARIO */
const btnSignUp = document.querySelector('#singUp');
const formularioGuardar = document.querySelector("#formularioGuardar");
btnSignUp.addEventListener('click', () =>{
    formularioGuardar.classList.add('showForm');
});

formularioGuardar.addEventListener('submit', () =>{
    const name = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;
    localStorage.setItem('nombre',name)
    localStorage.setItem('constrasena',password)
})

const formIngreso = document.querySelector('#formIngreso');
    formIngreso.addEventListener('submit', ()=>{
    event.preventDefault();
    const name = document.querySelector('#nameIngreso').vaule;
    const password = document.querySelector('#passwordIngreso').value;
    const nameGuardado = localStorage.getItem('nombre');
    const passwordGuardado = localStorage.getItem('contrasena');
    
    if(name === nameGuardado && password === passwordGuardado){
        const menu1 = document.querySelector('.menu').classList.add('hide')
        const menu2 = document.querySelector('.menu2').classList.remove('hide')
        const usuario = document.querySelector('.usuario').textContent = nameGuardado;
    }else{
        alert('Contrasena o usuario incorrecto')
    }
})