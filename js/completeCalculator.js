var cal_input = document.getElementById("cal-input");
var show_result = document.getElementById("show-result");
var current_num = "";
var previous_num = "";
var operator = "";
var display = "";
var result = "";

function displayNumOp(num_sign){
    cal_input.value = "";
    display = display + num_sign;
    cal_input.value = display;
}

function insert(num){
    current_num = current_num + num; 
    console.log(current_num);
    // allClear();
}

function insertOperator(op_sign){
    previous_num = current_num;
    current_num = "";
    operator = op_sign;
    console.log(operator);
    console.log(previous_num);
    // allClear();
}

function operation(){

    if (operator == "+") {
        result = Number(previous_num) + Number(current_num);
        // console.log(result);
        show_result.value = result;
        current_num = result;
    } else if(operator == "-"){
        result = Number(previous_num) - Number(current_num);
        // console.log(result);
        show_result.value = result;
        current_num = result;
    } else if(operator == "x"){
        result = Number(previous_num) * Number(current_num);
        // console.log(result);
        show_result.value = result;
        current_num = result;
    } else if(operator == "/"){
        result = Number(previous_num) / Number(current_num);
        // console.log(result);
        show_result.value = result;
        current_num = result;
    }
    // allClear();
}

function allClear(){
    result = null;
    previous_num =  null;
    current_num = null;
    cal_input.value = '';
    show_result.value = '';
}



