let outer=document.getElementById("outer")
let middle=document.getElementById("middle")
let inner=document.getElementById("inner")





// outer.addEventListener("click",()=>{
//     console.log("Outer was clicked")
// })


// middle.addEventListener("click",()=>{
//     console.log("middle was clicked")
// })


// inner.addEventListener("click",()=>{
//     console.log("inner was clicked")
// })






outer.addEventListener("click",()=>{
    console.log("Outer was clicked")       
},true)                                                               // use capture by default


middle.addEventListener("click",()=>{
    console.log("middle was clicked")
},true)


inner.addEventListener("click",()=>{
    console.log("inner was clicked")
},true)