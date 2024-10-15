var btn = document.getElementById("btn");

btn.addEventListener("click", function operation() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var result = document.getElementById("result");
  var radio_val = document.querySelector("input[type=radio]:checked").value;
//   console.log(radio_val);
  if (radio_val == 1) {
    total = num1 + num2;
  } else if (radio_val == 2) {
    total = num1 - num2;
  } else if (radio_val == 3) {
    total = num1 * num2;
  } else if (radio_val == 4) {

    // if()
    total = num1 / num2;
  }

console.log(total);
  return result.innerText = "The operation result is "+ total;
});

let string = "Thet Zan";
console.log(string.toLocaleLowerCase());
console.log(string.toLocaleUpperCase());
console.log(string.charAt(3));
console.log(string.indexOf("a"));
console.log(string.lastIndexOf("e"));
console.log(string.split(","));

let number = "1.5";
// Number("2");
// parseInt("3");
console.log(number);
let pi = Math.PI;
console.log(pi.toFixed("2"));

if (isNaN(number)) {
    console.log("it is a number");
 
} else {
    console.log("it is not a number");
}

//call back function
(()=>{
    console.log("HI");
})();


// function
function add(x,y){
    return x+y;
}
console.log(add(1,2));

// arrow function
let minus = (x,y)=>{
    return x-y;
}
console.log(minus(10,3));


//one line arrow function
let square = x=> x*x;
console.log(square(10));