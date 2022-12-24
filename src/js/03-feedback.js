import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const FORM_KEY = "feedback-form-state";

outLocalStorage();

// передать данные в обьекст и записать в локальное хранилище


// message.addEventListener('input', messageInInput);



feedBackForm.addEventListener('input', throttle(messageInInput, 500));

function messageInInput(event) {

    const emailEl = event.currentTarget.email.value;
    const messageEl = event.currentTarget.message.value;

    const formDataInput = {
        emailEl,
        messageEl
    }

    localStorage.setItem(FORM_KEY, JSON.stringify(formDataInput));
}


feedBackForm.addEventListener('click', onSubmitRemove);

function onSubmitRemove(event) {
    event.preventDefault();
    
    if (event.target.nodeName === 'BUTTON') {
        event.currentTarget.reset();
        localStorage.removeItem(FORM_KEY);   
    }
}

function outLocalStorage() {
    const saveOutPut = localStorage.getItem(FORM_KEY);

    if (saveOutPut) {
        const parsInput = JSON.parse(saveOutPut)
        console.log(parsInput)
        message.value = parsInput.messageEl;
        email.value = parsInput.emailEl;
    }
}
