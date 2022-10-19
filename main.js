'use strict';


function changeRed(){
    const changingItems = document.querySelectorAll('.color-change')
    for (const item of changingItems){
    item.classList.add('red');
    }
};

document.querySelector('.color-changer').addEventListener('click', changeRed);


function validateNumber(event){
    event.preventDefault();
    const numberInput = document.querySelector('#number-input');
    const userNum = Number(numberInput.value);
    const formFeedback = document.querySelector('#formFeedback')
    if (userNum >= 10 || isNaN(userNum)) {
        formFeedback.innerText = 'Please enter a smaller number'
    }
    else{
        formFeedback.innerText = 'You are good to go'
    }
};

document.querySelector('.number-form').addEventListener('submit', validateNumber);