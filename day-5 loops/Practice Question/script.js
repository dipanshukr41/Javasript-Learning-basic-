// Q1:-- print all even number from 0 to 100

for(let i=0;i<=100;i++){
   if(i%2==0){
    console.log(i);
   }
}



//Q2:-- create a guessing number game

let a=6;
 let usernum =prompt("guess the number : ")
 while(usernum!=a){
    usernum=prompt("wrong pls guess again")
 }
 console.log("winner")