const url=""
//let promise =fetch(url)
//console.log(promise)
//const getfact=async()=>{   //console type getfact()---enter
  //  console.log("getting data......");
    //let promise1 =await fetch(url);
    //console.log(promise1);
//}



//understanding Terms
//AJAX:--> is asynchronouse js & xml
//JSON--> is js object notation
//json()--> method: returns a second promise that resolves with the result of parsing the response body text as json.(input is json,output is js object)


//pehle data jata tha xml form mein ab json mein jata hai


const getfact=async()=>{   //console type getfact()---enter
    console.log("getting data......");
    let promise1 =await fetch(url);
    console.log(promise1);
    let data=await promise1.json()
    console.log(data)
}