 let div=document.querySelector("div")
 console.log(div)

 let id=div.getAttribute("id")  //---------------div mein koi idea ye class hoga to isse dekh sakte hai

 console.log(id)


console.log(div.setAttribute("id","nunu")) // js se clss id change krne ke liya html mein


//style dekhna ho to and and style change krna ho js ki help se run time pe

  let div1= document.querySelectorAll("div")
  console.log(div1)
  console.log(div.style)
  div.style.backgroundColor="green"
  div.style.fontSize="26px"
  div.innerText="hahahhahaha"

  //Dom manipulation


  //insert new element   

  //lets create a button
  let btn=document.createElement("button")
  btn.innerText="click me"
  console.log(btn)   //only show on js

  //screen pe show krna ho to

//pehle jo div mein chahiye usko access krna hoga

let p=document.querySelector("p")
p.append(btn)//div ke end mein show karega
p.prepend(btn)//div ke starting mein show karega
p.before(btn)// div start hone se pehle
p.after(btn)// div ke khtm hone ke just baad


//remove krna hoga to
//Node.remove()