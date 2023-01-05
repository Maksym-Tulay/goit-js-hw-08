// adding lodash_throttle 

import throttle from 'lodash.throttle';

// adding refs

const form = document.querySelector('.feedback-form');
const INPUT_KEY = "feedback-form-state";
const formData = {};

// adding form eventListeners

form.addEventListener('input', throttle(onInputToLocalStorage, 500));
form.addEventListener('submit', onSubmitClear);

// f for saving form values to localStorage

function onInputToLocalStorage(e) {
    e.preventDefault();
    formData[e.target.name] = e.target.value;
    localStorage.setItem(INPUT_KEY, JSON.stringify(formData));
}

// f for clearing form onSubmit

function onSubmitClear(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(INPUT_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(INPUT_KEY);
}

// f for localStorage check for filling form with previous values

function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(INPUT_KEY));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');

    if(data) {
        email.value = data.email;
        message.value = data.message;
    }
};

dataFromLocalStorage();
