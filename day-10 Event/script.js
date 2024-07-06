//js mein event use krne ka tarika
//    node.event=()=>{
//    handle here
//    }

let btn1=document.querySelector('#btnn')

btn1.onclick=()=>{
    console.log("dekha bhai ye wala tarika bhi accha hai")

}


//event object
//    node.event=(e)=>{  --------e.target,e.type,e.clientx,etc
//    handle here
//    }
btn1.onclick=(e)=>{
    console.log(e)
    console.log("dekha bhai ye wala tarika bhi accha hai")

}

//Event Listeners
//node.addeventlisteners(event,callback)
//node.removeeventlisteners(event,callback)
//note---> the callback reference should be same to remove

bt.addEventListener("click",()=>{
    console.log("hello aa gya new trick use krne")
})