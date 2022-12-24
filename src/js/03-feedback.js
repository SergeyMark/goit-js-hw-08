import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const FORM_KEY = "feedback-form-state";

outLocalStorage();

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, 
// в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
feedBackForm.addEventListener('input', throttle(function(){
    const emailEl = email.value;
    const messageEl = message.value;

    const formDataInput = {
        emailEl,
        messageEl
    }

    localStorage.setItem(FORM_KEY, JSON.stringify(formDataInput));
}, 500));

// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
feedBackForm.addEventListener('click', onSubmitRemove);

function onSubmitRemove(event) {
    event.preventDefault();

    const consoleIn = localStorage.getItem(FORM_KEY);
    console.log(JSON.parse(consoleIn));
    
    if (event.target.nodeName === 'BUTTON') {
        event.currentTarget.reset();
        localStorage.removeItem(FORM_KEY); 
    }

}

// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
function outLocalStorage() {
    const saveOutPut = localStorage.getItem(FORM_KEY);

    if (saveOutPut) {
        const parsInput = JSON.parse(saveOutPut);
        // console.log(parsInput)
        message.value = parsInput.messageEl;
        email.value = parsInput.emailEl;
    }
}


// вариант без тротла
// feedBackForm.addEventListener('input', messageInInput);

// function messageInInput(event) {

//     const emailEl = event.currentTarget.email.value;
//     const messageEl = event.currentTarget.message.value;

//     const formDataInput = {
//         emailEl,
//         messageEl
//     }

//     localStorage.setItem(FORM_KEY, JSON.stringify(formDataInput));
// }