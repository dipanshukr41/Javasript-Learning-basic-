    console.log("one")
    console.log("two")
    console.log("three")
    // 3oooo line by line show hoga pehle one fir two fir three isko hm bolte hai synchronous 

   //Asynchronous:-->
    

   function hello(){
    console.log("hello")
   }

   setTimeout(hello,2000) //2000 time hai itne der baad ye print karega 2sec=2000ms
   //or
   setTimeout(() => {
    console.log("hello hello")
   },2000);


   //one more example
   console.log("one")
   console.log("two")
   setTimeout(() => {
    console.log("hello my friend")    //thats why Asynchronous:--> is best
   },4000);
   console.log("three")
   console.log("four")


   //Callbacks--> a callback is a function passed as an argument to another function

   //callback hell--> nested callbacks stacked below one another forming a pyramid structure
   // this style of programming becomes difficult to understand & manage



   function getData(dataid){  //write in console -->getData(xyz) press enter
    setTimeout(() => {
        console.log("data",dataid)
    },2000);
   }

//------------------------------------------------------------------------
   //data 1
   //data 2
   //data 3
   //ek ek krke data aaye for example insta userid and password first check userid is valid or not then password

function getdata(dataid,getNextdata){
    setTimeout(() => {
        console.log("data",dataid)
        if(getNextdata){
            getNextdata()
        }
    },2000);
   

}

getdata(1,()=>{
    getdata(2,()=>{
        getdata(3)
    })
})

//------------------------------------------------------------
   //callback hell ko solve krne aaya promises

    
   let promise = new Promise((resolve, reject) => {
    console.log("promise is working");
    resolve("done")  //same goes for reject
});

//promises
//a js promise object can be:
//pending:->the result is undefined
//resolved:-> the result is a value fulfilled
//rejected:-> the result is an error object

//.then() & .catch()
//promise.then((res)=>{{....}})   ------------jab resolve hoga tab use hoga
//promise.catch((err)=>{{....}})

/*
const getpromise=()=>{
    return new promise=((resolve,reject)=>{
        console.log("i am promises");
        //resolve("success")
        reject("error");
    });
};

let promise=getpromise();
promise.then(()=>{
    console.log("fullfilled");
});

promise.catch((err)=>{
    console.log("error")
});
*/
//async-Await--> async function always return a promise
async function hello(){ // condole type...hello()
    console.log("hello")
}

//await--> pauses the execution of its surroundind async function untill the promise is settled



//little bit confusing topic in this file so practise more 