// Инициализация
let number1 = 1,
  number2 = 2,
  number3 = 3;
// Я изменил let a. let - меняется.
number1 = 2;

// Сonst - результат a + b - c, Const не меняется.
const resultat = number1 + number2 - number3;

console.log(resultat);

// Переменные с неправильным именем
let number = "name",
  name = 3;
console.log(number, name);
