/*1. Завантажити json  файл, отримати від нього дані та завантажити
їх у функцію showAdminName(data), яка виведе ім'я адміна у консоль*/

fetch('http://127.0.0.1:5501/data.json')
    .then(response => response.json())
    .then(function showAdminName(data) {
        let val = Object.values(data);
        val.map(function (element) {
            if (element.isAdmin == true) {
                console.log(element.name)
            }
        })
    });

/*2. Зробити proxy функції getFullName(), щоб не повертало underfind обгорнувши в proxy*/
let nikola = { firstName: 'Nikola', lastName: 'Tesla' };
let bob = { firstName: 'Bob' };
let mike = { lastName: 'Smith' };
let michael = {};

let getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
};

getFullName = new Proxy(getFullName, {
    apply(_target, _thisArgs, args) {
        let vall;
        args.map((el) => vall = el);
        if (Object.keys(vall).length === 0) {
            return `No name`;
        } else {
            switch (undefined) {
                case vall.firstName:
                    return `${vall.lastName}`;
                case vall.lastName:
                    return `${vall.firstName}`;
                default:
                    return `${vall.firstName} ${vall.lastName}`;
            }
        }
    }
});

console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michael));
console.log(getFullName(nikola));

/*3.Масив додати у localStorage та написати функції виводу імені по id*/

let users = [
    { name: 'Nikola', age: 18, id: 1 },
    { name: 'Bob', age: 25, id: 2 },
    { name: 'Mike', age: 32, id: 3 },
];

localStorage.setItem('users', JSON.stringify(users));
let lsObject = localStorage.getItem('users');
let lsNewObject = JSON.parse(lsObject);

let arr = Object.values(lsNewObject);
function sayHelloToUser(idUser) {

    arr.map((el) => {
        if (el.id == idUser) {
            console.log(`Hello: ${el.name}`)
        }
    })
}
sayHelloToUser(3);

/*Є input. Зробити так, щоб при відкритті сторінки input містив той самий текст,
що вів користувач минулого разу*/

let textUser = document.getElementById("text-user");
let buttonU = document.querySelector(".button");

buttonU.addEventListener("click", function () {
    let textFor = textUser.value;
    localStorage.removeItem('user text');
    localStorage.setItem('user text', JSON.stringify(textFor));
    return textFor
});
window.addEventListener("load", function () {
    let valf = localStorage.getItem('user text');
    console.log(valf);
    console.log(typeof (valf));
    valNew = valf.replace(/[^a-zа-яё]/gi, '');
    console.log(valNew)
    textUser.value = valNew;

});

