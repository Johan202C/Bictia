const btns = document.querySelectorAll('.btn');
console.log(btns)
const output = document.querySelector('#output')

const btnTxt = (e)=>{

    const btnTxt = e.target.innerText;


    if(btnTxt === 'ESPACIO'){
        output.innerHTML += `&nbsp`;
    }else if(btnTxt === '<--'){
        output.innerText = output.innerText.slice(0, -1);
    }else{
        output.innerText += btnTxt;
    }


    //output.innerText = output.innerText + btnTxt; //Esto equivale a lo mismo de arriba
}

for(let i =0; i<btns.length; i+=1){
btns[i].addEventListener('keydown', btnTxt);
}
