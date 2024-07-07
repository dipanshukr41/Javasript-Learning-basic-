const student ={    // write in console student to get output
    name:"dipanshu kumar",
    marks:98.8,
    printmarks:function(){
        console.log("marks= ",this.marks)
    },
    //or
    printmarks1(){
        console.log("hello")
    }
}
//student.marks in console to only get marks output
//student.name ----- for name only

const emp = {
    calctax() {
        console.log("tax rate is 10%");
    },
};

const anshu = {
    salary: 10000000,
};

// Setting the prototype of anshu to emp
anshu.__proto__ = emp;

// Now you can call calctax on anshu
anshu.calctax(); // Output: "tax rate is 10%"


//class in js

class car{ // type car in console
    constructor(){
        console.log("creating new object")
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
    setBrand(brand){
        this.brandName=brand;
    }

}

let wcar =new car(); //typewcar in console
wcar.setBrand("tata")


//Error Handling

//try{
//    ....noraml code
 //   }catch(err){
 // console.log(err)
 //  }



 // for example
 let a=13
 let b=12
 console.log(a+b)  //whenever we are in doubt that this code can show error then we can use this error handling
 try{
    console.log(a+c)
 }catch(err){
    console.log(err)
 }


