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

// let name = prompt("Твое имя?");
// let address = prompt("Твой адрес?");
// let phone = prompt("Твой номер?");

// console.log(
//   `Cтудент ${name}, Адрес проживания: ${address}, Номер телефона: ${phone}.`
// );

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

// let name = "Mansur"; // string;
// const age = 23; // number;
// if (age < 15) {
//   console.log("Доступ запрещен!");
// } else {
//   console.log(`Привет ${name}!`);
// }

// function viewMoney() {
//   console.log("Вот вам 10$");
// }
// viewMoney();

// function getMoney() {
//   return "Вот вам 10$";
// }

// let cash;
// function getMoney(cash) {
//   return `Вот вам ${cash}$`;
// }
// console.log(getMoney(1000));

// console.log(Math.pow(3, 4));

// function squared(x) {
//   return x * x;
// }
// console.log(squared(3));

// Math.max(10, 20, 50);
// console.log(Math.max(10, 20, 50));

// function showMaxNumber(a, b, c) {
//   console.log(Math.max(a, b, c));
// }
// showMaxNumber(10, 20, 50);

// function evenOdd(x, y) {
//   if (x % 2 === 0 && y % 2 === 0) {
//     return x * y;
//   } else if (x % 2 !== 0 && y % 2 !== 0) {
//     return x + y;
//   } else if (x % 2 === 0) {
//     return y;
//   } else {
//     return x;
//   }
// }

// console.log(evenOdd(11, 10));

// function discriminant(a, b, c) {
//   return b ** 2 - 4 * a * c;
// }
// console.log(`Дискриминант: ${discriminant(1, 2, 3)}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = ["lorem", 123, true, "ipsum"];
// console.log(a);
// console.log(a.length);
// console.log(a.shift());
// console.log(a.pop());

// let em = [];
// em = ["A", "B", "C", true, 5];
// em.push("name");
// em.push("age");
// em.push("size");
// em.shift();
// em.splice(em.length - 2);
// console.log(em);

// let number = [1, 3, 5, 7, 9];
// console.log(number);

// for (let index = 0; index < number.length; index++) {
//   number[index]++;
// }
// console.log(number);

// number[2] = "A";
// console.log(number);

// let number2 = [];
// for (let x = 0; x < 11; x++) {
//   number2.push(x);
// }
// console.log(number2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array);
// array.forEach(function (item, index, array) {
//   console.log("item - " + item, "ind:" + index, array);
// });

// let cars = ["bmw", "mers", "toyota"];
// cars.forEach(function (car, index) {
//   console.log(car, index);
// });

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = arr.filter(function (item) {
//   if (item > 4) {
//     return true;
//   }
// });
// console.log(arr2);

// let array = [1, 2, 3, 4, 5, 6, 7];

// let array2 = array.filter(function (item) {
//   if (item > 3) {
//     return true;
//   }
// });
// let array3 = array2.map(function (item) {
//   return item + " + expo";
// });

// let array4 = array2.reduce(function (sum, item) {
//   return item + sum;
// }, 5);

// console.log(array);
// console.log(array2);
// console.log(array3);
// console.log(array4);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let array = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
// array = array.filter(function (item) {
//   if (item % 2 !== 0) {
//     return true;
//   }
// });
// console.log(array);

// let array2 = [
//   "lorem ipsum",
//   "javascript",
//   "php2",
//   "css",
//   "react",
//   "git",
//   "html",
//   "mysql",
// ];
// array2 = array2.filter(function (item) {
//   if (item.length <= 4) {
//     return true;
//   }
// });
// console.log(array2);

// let array3 = [1, -3, 5, 6, -7, 8, 9, -11];
// array3 = array3.filter(function (item) {
//   if (item < 0) {
//     return true;
//   }
// });
// console.log(array3);

// let array4 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
// array4 = array4.filter(function (item) {
//   if (item % 2 == 0) {
//     return true;
//   }
// });
// console.log(array4);

// let array5 = [
//   "lorem ipsum",
//   "javascript",
//   "php2",
//   "css",
//   "react",
//   "git",
//   "html",
//   "mysql",
// ];

// array5 = array5.filter(function (item) {
//   if (item.length !== 3) {
//     return true;
//   }
// });
// console.log(array5);

// let array6 = [5, 6, 7, 8, 9];
// array6 = array6.map(function (item) {
//   return item * item;
// });
// console.log(array6);

// let array7 = [
//   { a: 10, b: 5 },
//   { a: 20, b: 22 },
//   { a: 131, b: 55 },
// ];
// array7 = array7.map(function (item) {
//   return item.a + item.b;
// });
// console.log(array7);

// let array8 = [-13, 0, 12, 1662, -0.32, -102, -2];
// console.log(array8);
// array8 = array8.filter(function (item) {
//   return item < 0;
// });
// console.log(array8);
// array8 = array8.reduce(function (sum, item) {
//   return item + sum;
// }, 0);
// console.log(array8);

// let array9 = [
//   { x: 10, y: "lorem" },
//   { x: 21, y: "lorem" },
//   { x: -17, y: "lorem" },
//   { x: 156, y: "lorem" },
// ];
// array9 = array9.reduce(function (sum, item) {
//   return sum + item.x;
// }, 0);
// console.log(array9);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const cities = [
//   { name: "Москва", population: 12506468 },
//   { name: "Санкт-Петербург", population: 5351935 },
//   { name: "Новосибирск", population: 1612833 },
//   { name: "Калиниград", population: 482443 },
//   { name: "Калуга", population: 336726 },
// ];
// cities.unshift({ name: "Ачхой-Мартан", population: 30000 });
// cities.push({ name: "Мекка", population: 2300000 });

// cities.forEach(function (item) {
//   console.log(`Город: ${item.name}, Население: ${item.population} `);
// });

// const citiesPopulation = cities.filter(function (city) {
//   if (city.population > 1000000) {
//     return true;
//   }
// });
// console.log(citiesPopulation);

// const growthPopulation = cities.map(function (city) {
//   return {
//     name: city.name,
//     population: city.population * 1.5,
//   };
// });
// console.log(growthPopulation);

// const sumPopulation = growthPopulation.reduce(function (sum, city) {
//   return sum + city.population;
// }, 0);
// console.log(sumPopulation);

// let array = [
//   {
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "qui est esse",
//     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "eum et est occaecati",
//     body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "nesciunt quas odio",
//     body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "dolorem eum magni eos aperiam quia",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//   },
//   {
//     userId: 1,
//     id: 7,
//     title: "magnam facilis autem",
//     body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
//   },
//   {
//     userId: 1,
//     id: 8,
//     title: "dolorem dolore est ipsam",
//     body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
//   },
//   {
//     userId: 1,
//     id: 9,
//     title: "nesciunt iure omnis dolorem tempora et accusantium",
//     body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
//   },
//   {
//     userId: 1,
//     id: 10,
//     title: "optio molestias id quia eum",
//     body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
//   },
// ];

// console.log(array);

// array = array.filter(function (item) {
//   if (item.id > 5) {
//     return true;
//   }
// });
// console.log(array);

// array = array.map(function (item) {
//   item.title = "Expovision";
//   return item;
// });

// array = array.forEach(function (item) {
//   console.log(item.title);
//   console.log(item.body);
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let arr1 = [101, 202, 303, 404, 505];
// let arr2 = [606, 707, 808, 909];
// let superArr = [...arr1, ...arr2];
// console.log(superArr);

// console.log(Math.min(...superArr));

// let obj = {
//   width: 300,
//   height: 550,
// };

// let obj2 = {
//   ...obj,
//   area: function () {
//     return this.width + this.height;
//   },
// };

// console.log(obj);
// console.log(obj2);
// console.log(obj2.area());

// function sum(...total) {
//   return total.reduce((sum, item) => sum + item, 0);
// }
// console.log(sum(10, 20, 30, 40, 50));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
