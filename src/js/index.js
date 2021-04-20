let age = prompt("How o;d are you?", "100")

alert(`yau age is ${age}`)


let isBoss = confirm("Are you boss?")

alert(isBoss)


let nameUser = prompt("Whot is you name?", "Rik")

alert(`You are suck my dick, ${nameUser}`)  


let nameFirst = null

let lastName = String(nameFirst)
let lastName = Number(nameFirst)
let lastName = Boolean(nameFirst)

alert(lastName)

if (isBoss === true) {
    alert("OK")
} else {
    alert("Fuck off")
}

let message = prompt("Какое официальное название?", "");

if (message === "ECMAScript") {
    alert("Правильно")
} else {
    alert("Ты лох!")
}


let value = prompt("Enter you value", "");

// (value > 0) ? alert(1) :
// (value < 0) ? alert(-1) :
// alert(0)

if (value > 0) {
    alert(1)
} else if (value < 0) {
    alert(-1)
} else {
    alert(0)
}

let result;

let a = 7;
let b = 1;

(a + b < 4) ? result = "Мало" : result = "Много"

alert(result)


let message;
let login = prompt("введите вашу должность", "");

(login == "Сотрудник") ? message = "Привет" : 
(login == "Директор") ? message = "Здравствуйте" :
(login == "") ? message = "Нет логина" :
message = "";

alert(message);


let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

if (a > 0) {
    alert(">0")
} else if (a<0) {
    alert("<0")
} else {
    alert("dick")
}

let age = 91;

if (age >= 14 && age <= 90) {
    alert("OK")
} else {
    alert("Kal")
}


let age = 13;

if (age <= 14 || age >= 90) {
    alert("OK")
} else {
    alert("Kal")
}

if (!(age >= 14 && age <= 90)) {
    alert("OK")
} else {
    alert("Kal")
}


let message = prompt("Кто там?", "");

if (message === "Админ") {
    
    let pass = prompt("Пароль?", "") 
    
    if (pass === "Я главный") {
        alert("Здравствуйте!")
    } else if (pass === "" || pass === null) {
        alert("Отменено")
    } else {
        alert("Неверный пароль!")
    }

} else if (message === "" || message === null) {
    alert("Отменено")
} else {
    alert("Я вас не знаю!")
}


let i = 0;

while (i <= 3) {
    alert(i);
    i++;
}


for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Значение на координатах (${i},${j})`, '');
  
      // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
  
    }
  }
  
  alert('Готово!');


for (let i = 2; i <=10; i++) {
    if (i % 2 == 0) {
        alert(i)
    } 
}


for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }


let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}


while (true) {

    let message = prompt("Введите число большее 100!", "");

    if (message > 100) {
        alert("OK");
        break
    } else if (message <= 100) {
        alert("Введите число больше 100!")
    } else {
        break
    }
}


let num;

do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);


// Алгоритм поиска простых чисел
let message = +prompt("Введите верхний порог простых чисел?", 2);

next: 
for (let i = 2; i <= message; i++) {

    for (let j = 2; j < i; j++) {
        
        if(i % j == 0) continue next; 
    }

    alert(i);
}


let browser = "Opera";
if (browser == "Edge") {
    alert("Opera")
} else if (browser == "Chrome" 
    || browser ==  "Safari" 
    || browser ==  "Opera") {
    alert("Normal")
} else {
    alert("Hope")
}


const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}


switch (number) {
    case 0: 
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    default:
        alert("XUI")
}


let name = "Kola";

function showMessage () {
    let name = "Ivan";
    alert("Hello " + name);
}

showMessage()
alert(name)


function checkAge (age) {
    if (age >= 18) {
        return true
    } else {
        return confirm("Are you parents gey's?")
    }
}

let age = prompt("How old are you?");

if (checkAge(age)) {
    alert("OK")
} else {
    alert("Kal")
}


function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }


function checkAge(age) {
    return (age > 18) ? true : confirm("Parents?");
}

function checkAge(age) {
    return (age >18) || confirm("parent?")
}
  

function minNumb(a, b) {
    if (a > b) {
        return b
    } else if (a < b) {
        return a
    }   else {
        return "Fuck off"
    }
}


let x = +prompt("X?", "");
let n = +prompt("N?", "");

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

if (n > 0) {
    alert(pow(x, n))
} else {
    alert(`Ты ввел ${n}, а это - хуйня`)
}



let x = +prompt("X?", "");
let n = +prompt("N?", "");

function pow(x, n) {
    return alert(x ** n);
}

pow(x, n)


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );


let ask = (question, yes, no) => {
    (confirm(question)) ?  yes() : no()
};

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );


const user = {
    name: "John",
    age: 30,
    isAdmin: true,
}

for (let key in user) {
    alert(key)
}


Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.


const user = {};

user.name = "John";
user.surname = "Smith";


user.name = "Pete";

delete user.name;

console.log(user.name)


Напишите функцию isEmpty(obj), которая возвращает true, 
если у объекта нет свойств, иначе false.

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


const user = {
    // name: "Johny",
};

if (user.noSuchProperty === undefined) {
    alert ("Empty") 
} else {
    alert ("notEmpty")
}


const user = {
    age: 30
};

function isEmpty(obj) {
    for (let key in obj) {
      return console.log("false");
    }
    return console.log("true");
}

isEmpty(user);


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

alert(salaries.John + salaries.Ann + salaries.Pete)

let sum = 0;

for (let prop in salaries) {
    sum += salaries[prop]
}

alert(sum)


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;  
        }   
    } 
}

multiplyNumeric(menu);
console.log(menu);


#Клонирование объекта

let user = {
    name: "john",
    age: 30,
};

let clone = {};

#1

for (let key in user) {
    clone[key] = user[key];
};

user.name = "Hot"
console.log(user.name)
console.log(clone.name)

#2

Object.assign(clone, user);

console.log(clone)


const user = {
    name: "johny",
    age: 30,
    sayHi: function () {
        alert("Hello!")
    }
}
user.sayHi()

OR

const user = {
    name: "johny",
    age: 30,
    sayHi () {
        alert("Hello!")
    }
}

user.sayHi()

