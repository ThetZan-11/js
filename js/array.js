let arr = [10, 20, 30];
let arr2 = [1,2,3];


let mergearr = [[1,2,3,], ["one","two","three"]];

mergearr.forEach((first)=>{
    first.forEach((val)=>console.log(val));
});


let arr3= [1,2,3,4,5,6,7,8];

let even = arr3.filter((val)=> val % 2 ===0);
console.log(even);

let odd = arr3.filter((val)=> val % 2 === 0);
console.log(odd);

let errorarr = arr3.forEach((val)=> val % 2 === 0);
console.log(errorarr);

let find7 = arr3.find((val)=> val === 7);
console.log(find7);

let double = arr3.map((val)=> val *2);
console.log(double);

// for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) !== "number") {
//         arr[i] = 0;
//     }
//     console.log(arr[i]);
// }
// console.log(arr);


// arr.forEach((val, index) => {
//   if (typeof (val) !== "number") {
//     arr[index] = 0;
//   }
// });
// console.log(arr);


// const log = (val)=>{
//     console.log(val);
// }
// arr.forEach(log);


