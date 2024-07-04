// we use function in day to day life...how?? we use push(), log,touppercase() they all are type of function

 /*
Function defination

function functionname(){
your work
}


function functionname(param1,param2){
your work
}


Function call

functionname()

 */

function myfunction(){
    console.log("welcome to my world")
    

}

myfunction();
myfunction(); //i can use it as many as time i want

//----------------------------------------------------------------------------


function myfunction2(msg){
    console.log(msg);
}

myfunction2("hello herooo");


//--------------------------------------------------------------------------------

// function--> 2number,sum

function sum(a,b){
console.log(a+b)
}
sum(4,5)

//function parameter--> like a local variable menas only alive in block scope{}

//arrow function-----> modern js

//sum
const arrowsum=(a,b)=>{
    console.log(a+b)
}
arrowsum(8,9)


//foreach loop in array

//js function easily pass and return 

let arr=["pune","jamshedpur","mumbai"]

arr.forEach((val)=>{
    console.log(val)
})



//OR


let arr1 = [1, 3, 2, 1, 3];

arr1.forEach(function myfunction3(va) {
    console.log(va);
});
