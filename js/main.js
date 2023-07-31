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

function evenOrOdd(chifre) {
  if (chifre % 2 === 0) {
    console.log(`even`);
  } else {
    console.log(`odd`);
  }
}
evenOrOdd(123);
evenOrOdd(57);
evenOrOdd(98);

function isMajor(number) {
  if (number > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isMajor(28));

function isLowerThanTen(number) {
  if (number < 10) {
    console.log("константа меньше 10");
  } else {
    console.log("константа не меньше 10");
  }
}
isLowerThanTen(50);

function showAlert() {
  alert("Привет, Мир");
}
showAlert();

function showconsole() {
  console.log("Javascript");
}
showconsole();

let text = "freedom";
function showText(text) {
  if (text === "lorem") {
    console.log("У вас ошибка в тексте");
  } else {
    console.log(`Содержимое переменной: ${text}`);
  }
}
showText(text);
