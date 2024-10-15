// let male = 1;
// let female = 0;

// switch (male) {
//   case 1:
//     console.log("female");
//     break;
//   case 0:
//     console.log("male");
//   default:
//     break;
// }

// try can catch the error of code line that have code line
// try {
//   console.log("hello");
//   male();
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("finally block");
// }

//promise object
// let pro = new Promise((resolve, reject) => {
//   if (0 === 1) {
//     resolve(1);
//   } else {
//     reject(2);
//   }
// });

// pro.then((para) => {
//   console.log("resolve");
// });

// pro.catch((para) => {
//   console.log("reject");
// });

// pro.then((para)=>console.log(para)).catch((para)=>console.log(para));

// const calculate = (val1, val2, callBack) => {
//   let pro = new Promise((resolve, reject) => {
//     resolve(1);
//     reject(2);
//   });
//   pro
//     .then((val1, val2) => console.log(val1, val2))
//     .catch((val1, val2) => console.log(val1, val2));
// };

// const add = (x, y) => x + y;
// const minus = (x, y) => x - y;
// const multi = (x, y) => x * y;
// const div = (x, y) => x / y;

// calculate();

// Looping
