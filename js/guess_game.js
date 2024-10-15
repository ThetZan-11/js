var ran_num = Math.ceil(Math.random() * 100);
var input = document.getElementById("input");
var result = document.getElementById("result");
var btn = document.getElementById("guess");
var result = document.getElementById("result");
var reset = document.getElementById("reset");

console.log("random num :"+ ran_num);

btn.addEventListener("click", function () {

  var guess_num = input.value;
  var range = ran_num - guess_num;

  console.log("input value :" +guess_num);
//   console.log(range);

  if(0 < range && range < 10){
    result.innerText = guess_num+  " is closer but still small";
    result.classList.remove("text-success", "text-danger");
    result.classList.add("text-primary");
    
  } else if( 0 > range && range > -10 ){
    result.innerText = guess_num+  " is closer but still big";
    result.classList.remove("text-success", "text-danger");
    result.classList.add("text-primary");
  }
  else if (guess_num < ran_num) {
    result.innerText = guess_num + " is smaller than random number.";
    result.classList.remove("text-success", "text-primary");
    result.classList.add("text-danger");
  } else if (guess_num > ran_num) {
    result.innerText = guess_num + " is bigger than random number.";
    result.classList.remove("text-success", "text-primary");
    result.classList.add("text-danger");
  } else if(guess_num == ran_num){
    result.innerText = guess_num+  " is correct answer. YOU WIN.";
    result.classList.remove("text-primary", "text-danger");
    result.classList.add("text-success");
  }
});

function resetAgain() {
    input.value = '';
    ran_num = Math.ceil(Math.random() * 100);
    console.log("new random num :"+ran_num);
    return ran_num;
}
reset.addEventListener("click", resetAgain);


