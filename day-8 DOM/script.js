//window (type in console tab in website to see there are many data)
//we can also print window for example

console.log(window)

// magic of window tag
console.log("hello")
window.console.log("hello2")

//window.alert("kyu bhai kya karega website khul kar :)")    just an example for fun

//console.log---simple print
//console.dir-----document ke sare sare property methods ko print krwa deta hai

console.dir(document)

//dom structure == tree
//window---document---html---head----meta--meta--title--link
                        //---body--div-----img--h1--p--div
                               //--script
console.dir(document.body)
console.log(document.body)  // body mein kaun kaun sa tag use hua hai wo hm ab js ke help se dekh sakte hai
console.dir(document.head) //same for head



//dom access krne ka tarika hai html ko

//console.dir(document.body.childnodes)-----simple ab body ke andar jitne bhi child honge unsabko access krne ka tarika



//change body background color
document.body.style.background ="red"  //run time pe change krne ka power haii

//koi agar line change krna hoga to  document.body.childnodes[3].innerText ="xyz";   ---------------change kr dega or replace with that text

//dynamic changes or we can say manipulation of anything we use DOM *******



//DOm Manipulation

//selecting with ID---- let aa=document.getElementbyld("myid")----console.dir(aa)------------------heading is my id name
//selecting with class-- same krna hai bass document.getElementsbyclassname("myclass")
//selecting with tag -- document.getelementbytagname("p")

//Query Selector
//document.queryselector("myid/myclass/mytag")-------------returns first element
//document.queryselectorall("myid/myclass/mytag")----------------returns a nodelist




//Propeties---get,set,change/update 

//tagname
//innertext
//innerhtml
//textcontent


//div

let div=document.querySelector("div")
console.dir(div)   
//write in console----div.innerText--------if u want all html tag also just write---div.interHtml
//set krna hai to div.innertext="abcd"     ----all text replaace by abcd just check in console


