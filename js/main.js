'use strict'; 

let body = document.querySelector('body');
let button = document.querySelector('.checkbox'); 

function clickedButton(){
    let newMode = body.classList.toggle('darkmode')
    console.log(newMode);
    localStorage.setItem('darkmode', newMode)
    return newMode;
}

const isDarkMode = localStorage.getItem('darkmode')
if(isDarkMode === 'true'){
    body.classList.add('darkmode');
}


button.addEventListener('click', clickedButton)

