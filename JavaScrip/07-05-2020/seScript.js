const num1 = document.querySelector('.primerBtn').value;
const num2 = document.querySelector('.segunBtn').value;


const num1parse = parseInt(num1);
const num2parse = parseInt(num2);



const suma = document.querySelector('.suma');
const resta = document.querySelector('.resta');
const multiplicacion = document.querySelector('.multiplicacion');
const divis = document.querySelector('.divi');
const result = document.querySelector('.pResult');

    
suma.addEventListener('click',()=>{
   const res = (num1parse + num2parse);
   result.innerText=(res)
})

resta.addEventListener('click',()=>{
    const res = (num1parse - num2parse);
    result.innerText=(res)
})

multiplicacion.addEventListener('click',()=>{
    const res = (num1parse * num2parse);
    result.innerText=(res)
})

divis.addEventListener('click',()=>{
    const res = (num1parse / num2parse);
    result.innerText=(res)
})
  
