/*1. Створити HTML-сторінку з кнопкою "Відкрити" та модальним вікном. 
На модальному вікні має бути текст та кнопка "Закрити". Спочатку модальне
 вікно не відображається. При натисканні на кнопку "Відкрити" з'являється
  модальне вікно, на кнопку "Закрити" - зникає.*/

let open = document.querySelector(".open");
let close = document.querySelector(".close");
let textFor1 = document.querySelector(".text-for1");
let modal = document.querySelector(".modal");

open.addEventListener('click', function () {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
})

close.addEventListener('click', function () {
    modal.style.display = 'none';
    document.body.style.overflow = '';
})
/*2. Створити HTML-сторінку зі світлофором та кнопкою, яка перемикає світлофор на наступний колір.*/
const btnNode = document.querySelector('.js-btn');
const trafficLightNode = document.querySelector('.js-traffic-light');
const Lights = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
};

const Cl_lights = {
    [Lights.red]: 'traffic-light_red',
    [Lights.yellow]: 'traffic-light_yellow',
    [Lights.green]: 'traffic-light_green',
};

const next_light = {
    [Lights.red]: Lights.green,
    [Lights.yellow]: Lights.red,
    [Lights.green]: Lights.yellow,
}

let currentLight = Lights.red;

function switchLight(node) {
    const currentClass = Cl_lights[currentLight];
    const nextLight = next_light[currentLight];
    const nextClass = Cl_lights[nextLight];

    currentLight = next_light[currentLight];

    node.classList.replace(currentClass, nextClass);
}

function initLight(node) {
    node.classList.add(Cl_lights[currentLight]);
}

initLight(trafficLightNode);

btnNode.addEventListener('click', function () {
    switchLight(trafficLightNode);
});

/*3. Створити HTML-сторінку для відображення/редагування тексту.
 При відкритті сторінки текст відображається за допомогою div тега.
  При натисканні Ctrl + E замість div з'являється textarea з тим же текстом, 
  який тепер можна редагувати. При натисканні Ctrl + замість textarea 
  з'являється div з вже зміненим текстом. Не забудьте вимкнути стандартну 
  поведінку для цих комбінацій клавіш.*/
  //let ctrE = document.querySelector('.ctrE');
//let ctrB = document.querySelector('.ctrB');

let textFor3 = document.querySelector('.textFor3');
let textteria = document.querySelector('#textRedact');
let body = document.querySelector("body")

let textFor;
let valf;

//ctrE.addEventListener('click', function () {
body.addEventListener("keydown", function (event) {
    if (event.which == 69 && event.ctrlKey) {
        textFor = textFor3.innerHTML;
        textteria.style.display = "block";
        textFor3.style.display = "none";
        textteria.innerHTML = textFor;
        event.preventDefault(event);
        return textFor;
    }

}, false);
//})

//ctrB.addEventListener('click', function () {
body.addEventListener("keydown", function (event) {
    if (event.which == 107 && event.ctrlKey) {
        valf = textteria.value;
        textteria.style.display = "none";
        textFor3.style.display = "block";
        textFor3.innerHTML = '';
        textFor3.innerHTML = valf;
        return valf;
    }

}, false);
//})

