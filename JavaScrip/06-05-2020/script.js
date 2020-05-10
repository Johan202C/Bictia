/* const name = document.querySelector('#sendButt');
console.log(sendButt) */

const firstTxt = document.getElementById("elementoTexto");
//console.log(firstTxt);

const listaCont = document.getElementById("contList")
//console.log(listaCont);

const itemList = document.createElement("li");
itemList.textContent = "Lunes";
//console.log(itemList);


const textoSecun = document.createElement("p");
//console.log(textoSecun);
listaCont.appendChild(itemList);

