'use strict'; 

let body = document.querySelector('body');
let button = document.querySelector('.buttonmode'); 

function clickedButton(){
    let newMode = body.classList.toggle('darkmode')
    console.log(newMode);
    return newMode;
}


button.addEventListener('click', clickedButton)
