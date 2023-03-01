/*1. Існує масив імен користувачів та пустий об'єкт users.
Використовуючи деструктуризацію, додати у об'єкт імена користувачів,
ключами об'єкта повинні бути імена користувачів. Ви повинні отримати
такий об'єкт*/

let usersNames = ['Mike', 'Bob', 'Nikola'];
let users = {};
let [mike, bob, nikola] = usersNames;

users = {mike, bob, nikola};

console.log(users);//{mike: "Mike", bob: "Bob", nikola: "Nikola"}

/*2. Існує об'єкт з заробітними платами користувачів. Створити
функцію, яка поверне ім'я співробітника, який отримує найвищу заробітну плату.
Використовувати Object.entries() та деструктурування для перебору пар ключ/значення*/

let salaries = {
    'Mike': 1500,
    'Bob': 1800,
    'Nikola': 1700
};

function maxSalary(salaries) {
    let MaxSal = 0,
        maxName;
    for (const [name, salary] of Object.entries(salaries)) {
        if (MaxSal < salary) {
            MaxSal = salary;
            maxName = name;
        }
    }
    return `Отримувач максимального окладу: ${maxName}`;
};
console.log(maxSalary(salaries));

/* Існує об'єкт users. Використовуючи деструктурізацію, створіть змінні userMike,
userBob та  userNikola  і додайте в них відповідні значення об'єкта.*/

// let users = {
//     mike: "Mike", 
//     bob: "Bob", 
//     nikola: "Nikola"
// };

let {mike: userMike, bob: userBob, nikola: userNikola } = users;

console.log (`userMike: ${userMike}`);
console.log (`userBob: ${userBob}`);
console.log (`userNikola: ${userNikola}`);

/*4. Існують два файли з JSX  кодом App.js, встановіть у проєкт бібдіотеку
React та запустіть ці файли, браузер повинен відобразити контент за завданням*/

//це завдання в іншому посиланні - іншій папці
