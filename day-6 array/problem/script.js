// for a given array with marks of student ->[85,97,44,37,76,60]
//find the average marks of entire class

let mark=[85,97,44,37,76,60]
avg=mark[0]+mark[1]+mark[2]+mark[3]+mark[4]+mark[5]
console.log(avg/6)


//OR

let sum=0
for(let Val of mark){
    sum= sum+ Val; // or  sum+=val

}
let avg2 =sum/mark.length;
console.log(avg2)


