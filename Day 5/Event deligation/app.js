const bodyTag=document.getElementById("body")
const box =document.getElementById("box")




box.addEventListener("click",(e)=>{
  
 if(e.target.tagName=="DIV"){
    bodyTag.style.backgroundColor=e.target.style.backgroundColor
 }
})