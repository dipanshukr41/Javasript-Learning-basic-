let heros =["ironman","hulk","thor","batman"]
let num=[21,31,23,1,2,323,322]
let info=["rahul",86,"jamshedpur"]
console.log(num)


//Array indices

let name=["Dipanshu","priyanshu","shubham"]
console.log(name[0])
console.log(name[2])
name[1]="praveen"
console.log(name)

//in js string never change like this because it isimmutable but array change because it in mutable

//loops over an array

// for loop------ for(idx=0;idx<arr.length;idx++){}

//for example----

let stdroll=[1,2,3,4,5,65,6,4,3,24,5,2,5,25,4,3,24]
for(i=0;i<stdroll.length;i++){
    console.log(stdroll[i])
}

//for-of loop

cities=["jsr","ranchi","pune","mumbai"]
for(let city of cities){
    console.log(city)
}


//push() :-- add to end
//pop() :-- delete from end & return
//tostring() :-- converts array to string



let std=[2,3,11,3,1] // i want to add one more number 23
std.push(23,43)//----------------------push
console.log(std)

std.pop()//-------------pop
console.log(std)
console.log(typeof std)
std.toString()
console.log(std)
console.log(typeof std)


//concat() :------ joins multiple arrays and return result
//unshift() :------- add to start
// shift() :----- delete from start & return


let nam=['a',"b","c","d"]
let nam2=["e","f","g","h"]

let alpa=nam.concat(nam2)
console.log(alpa)

nam.unshift("z")
console.log(nam)

nam2.shift()
console.log(nam2)
