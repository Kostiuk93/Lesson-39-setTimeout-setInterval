/* const timerId = setTimeout(function (){
    console.log('Hello');
}, 2000); */

/* const timerId = setTimeout(function (text){
    console.log(text);
}, 2000, 'Hello'); */

/* const timerId = setTimeout(logger, 2000);

clearInterval(timerId); //отсановка setTimeout

function logger () {
    console.log('Hello');
} */


const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation () {
    const elem = document.querySelector('.box'); // элемент с которым происходит взаимодействие
    let pos = 0; //переменная с которой будет начинаться старт и будет изменяться

    const id =setInterval(frame, 10);
    // функция которая будет запускаться через определенный промежуток времени
    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
btn.addEventListener('click', myAnimation);

/* btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
});

function logger () {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('Hello');
    i++;
} */

/* let id = setTimeout(function log () {
    console.log('hello');
    id = setTimeout(log, 500);
}, 500); */