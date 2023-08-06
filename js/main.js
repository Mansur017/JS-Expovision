// // Инициализация
// let number1 = 1,
//   number2 = 2,
//   number3 = 3;
// // Я изменил let a. let - меняется.
// number1 = 2;

// // Сonst - результат a + b - c, Const не меняется.
// const resultat = number1 + number2 - number3;

// console.log(resultat);

// // Переменные с неправильным именем
// let number = "name",
//   name = 3;
// console.log(number, name);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const a = "28.02.1999"; // string
// const b = 3.14; // number
// const c = 10;
// // c = 20; //  ошибка, const не меняется

// // let name = prompt("Твое имя?");
// // let address = prompt("Твой адрес?");
// // let phone = prompt("Твой номер?");

// // console.log(
// //   `Cтудент ${name}, Адрес проживания: ${address}, Номер телефона: ${phone}.`
// // );

// // let rubleToDollar = 0.011;
// // let moneyRuble = 10500;

// // let capital = moneyRuble * rubleToDollar;
// // console.log(capital);

// // let moneyLira = prompt("How match?");
// // let liraToDollar = 0.037;
// // let cash = moneyLira * liraToDollar;
// // console.log(cash);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const a = 15;
// if (a < 10) {
//   console.log("константа меньше 10");
// } else {
//   console.log("константа не меньше 10");
// }

// let x = 10;
// y = 7;
// let c = x > y ? "x больше, чем y" : "x не больше, чем y";
// console.log(c);

// const num = prompt("Введите число");
// if (num % 2 === 0) {
//   console.log(`Число ${num} четное`);
// } else {
//   console.log(`Число ${num} нечетное`);
// }

// let num1 = prompt("number1?");
// let num2 = prompt("number2?");
// let num3 = prompt("number3?");

// // if (num1 > num2) {
// //   if (num1 > num3) {
// //     console.log(`${num1} больше всех`);
// //   } else {
// //     console.log(`${num3} больше всех`);
// //   }
// // } else {
// //   if (num2 > num3) {
// //     console.log(`${num2} больше всех`);
// //   } else {
// //     console.log(`${num3} больше всех`);
// //   }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function evenOrOdd(chifre) {
//   if (chifre % 2 === 0) {
//     console.log(`even`);
//   } else {
//     console.log(`odd`);
//   }
// }
// evenOrOdd(123);
// evenOrOdd(57);
// evenOrOdd(98);

// function isMajor(number) {
//   if (number > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isMajor(28));

// function isLowerThanTen(number) {
//   if (number < 10) {
//     console.log("константа меньше 10");
//   } else {
//     console.log("константа не меньше 10");
//   }
// }
// isLowerThanTen(50);

// function showAlert() {
//   alert("Привет, Мир");
// }
// showAlert();

// function showconsole() {
//   console.log("Javascript");
// }
// showconsole();

// let text = "freedom";
// function showText(text) {
//   if (text === "lorem") {
//     console.log("У вас ошибка в тексте");
//   } else {
//     console.log(`Содержимое переменной: ${text}`);
//   }
// }
// showText(text);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const man = {
//   name: "Ali",
//   surname: "Aliev",
//   age: "23",
//   height: "185",
//   login: 1234,
//   password: "ABCD",
//   cash: "100$",
//   address: {
//     city: "Boston",
//     street: "Timesquare",
//     number: 34,
//   },
// };

// let password = prompt("Password?");

// if (man.password === password) {
//   console.log(
//     `Добро пожаловать, ${man.name} ${man.surname}.  Ваш логин ${man.login}`
//   );
// } else {
//   console.log(`Указанный пароль ${password} не верен. Попробуйте еще раз`);
// }

// for (let num = 1; num < 3; num++) {
//   console.log(`4ucno: ${num}`);
// }

// num = 1;
// while (num < 3) {
//   console.log(`4ucno: ${num}`);
//   num++;
// }

// for (let x = 0; x < 11; x++) {
//   console.log(x);
// }

// for (let x = 1; x <= 10; x++) {
//   if (x % 2 === 0) {
//     console.log(`${x} is even `);
//   } else {
//     console.log(`${x} is odd `);
//   }
// }

let name = "Mansur"; // string;
const age = 23; // number;
if (age < 15) {
  console.log("Доступ запрещен!");
} else {
  console.log(`Привет ${name}!`);
}

function viewMoney() {
  console.log("Вот вам 10$");
}
viewMoney();

function getMoney() {
  return "Вот вам 10$";
}

let cash;
function getMoney(cash) {
  return `Вот вам ${cash}$`;
}
console.log(getMoney(1000));

Math.pow(3, 5);
console.log(Math.pow(3, 4));

function squared(x) {
  return x * x;
}
squared(10);

Math.max(10, 20, 50);
console.log(Math.max(10, 20, 50));

function showMaxNumber(a, b, c) {
  console.log(Math.max(a, b, c));
}
showMaxNumber(10, 20, 50);

function evenOdd(x, y) {
  if (x % 2 === 0 && y % 2 === 0) {
    return x * y;
  } else if (x % 2 !== 0 && y % 2 !== 0) {
    return x + y;
  } else if (x % 2 === 0) {
    return y;
  } else {
    return x;
  }
}

console.log(evenOdd(11, 10));

function discriminant(a, b, c) {
  return b ** 2 - 4 * a * c;
}
console.log(`Дискриминант: ${discriminant(1, 2, 3)}`);
