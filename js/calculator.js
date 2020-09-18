// getting all the buttons 
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btnClr = document.getElementById('btnClr');
let btnEql = document.getElementById('btnEql');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let res = document.getElementById('res');


// function that display values on response bar
function response(value){
    
    res.innerHTML += value;
}


// function that check if there any operator at the and of the res
function checkoperator(){
    if( res.innerHTML.endsWith("*") || res.innerHTML.endsWith("+") || res.innerHTML.endsWith("-") || res.innerHTML.endsWith("*") || res.innerHTML.endsWith("/") ){
        console.log("true");
        return true;
    }
    else {
        return false;
    }  
}


// function that clear the response screen when C is pressed
function clear(){
    res.innerHTML = "";
}


// adding event Listener for the click of the buttons
btn0.addEventListener('click',()=>{
    response("0");
});
btn1.addEventListener('click',()=>{
    response("1");
});
btnSum.addEventListener('click',()=>{
    if(!checkoperator() && res.innerHTML.length !=0){
        response("+");
    }
});
console.log(res.innerHTML);
btnSub.addEventListener('click',()=>{
    if(!checkoperator() && res.innerHTML.length !=0)
    response("-");
});
btnMul.addEventListener('click',()=>{
    if(!checkoperator() && res.innerHTML.length !=0)
    response("*");
});
btnDiv.addEventListener('click',()=>{
    if(!checkoperator() && res.innerHTML.length!=0)
    response("/");
});
btnClr.addEventListener('click',()=>{
    clear();
});


//calculating the result

btnEql.addEventListener('click',()=>{
    
    if(!checkoperator()){
        let re = /\d+/g;
        let re2 = /[\+\-\*\/]/g;
        let numbers = res.innerHTML.match(re);
        let operations = res.innerHTML.match(re2);
        
        while(operations.length>0){
            if(operations.includes("*")){
                let indexOfMul = operations.indexOf("*");
                let mul =parseInt(numbers[indexOfMul],2)* parseInt(numbers[indexOfMul+1],2);
                numbers.splice(indexOfMul,2);
                numbers.splice(indexOfMul,0,mul.toString(2));
                operations.splice(indexOfMul,1);
            }
            else if(operations.includes("/")){
                let indexOfDiv = operations.indexOf("/");
                let div = parseInt(numbers[indexOfDiv],2)/parseInt(numbers[indexOfDiv+1],2);
                numbers.splice(indexOfDiv,2);
                numbers.splice(indexOfDiv,0,div.toString(2));
                operations.splice(indexOfDiv,1);
            }
            else if(operations.includes("+")){
                let indexOfSum = operations.indexOf("+");
                let sum = parseInt(numbers[indexOfSum],2)+parseInt(numbers[indexOfSum+1],2);
                numbers.splice(indexOfSum,2);
                numbers.splice(indexOfSum,0,sum.toString(2));
                operations.splice(indexOfSum,1);
            }
            else if(operations.includes("-")){
                let indexOfSub = operations.indexOf("+");
                let sub = parseInt(numbers[indexOfSub],2)-parseInt(numbers[indexOfSub+1],2);
                numbers.splice(indexOfSub,2);
                numbers.splice(indexOfSub,0,sub.toString(2));
                operations.splice(indexOfSub,1);
            }
        }
        res.innerHTML = numbers[0].toString(2);


        
    }
 });