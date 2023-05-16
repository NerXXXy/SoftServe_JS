const inputs = document.querySelectorAll(".arr");
const btn = document.querySelector('.btn');
const outBlock = document.querySelector(".out");

btn.onclick = function (){
    outBlock.innerHTML = ' ';

    inputs.forEach((element) =>{
        outBlock.innerHTML += ` ${element.getAttribute('data-form')} : ${element.value} </br>`
    })
}