const inputtag=document.getElementById("ip")
const button=document.getElementById("btn")
const myList=document.getElementById("list")

const body=document.getElementById("body")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")




// inputtag.addEventListener("change", (e)=>{
//     console.log(e)
// })


button.addEventListener("click",()=>{
    let val=inputtag.value
    if(val==""){
        alert("input cannot be empty")
        return
    }
    let listitem=document.createElement("li")
    listitem.innerText=val
    myList.appendChild(listitem)
    inputtag.value=""
})
window.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
    let val=inputtag.value
    if(val=="")return
    let listitem=document.createElement("li")
    listitem.innerText=val
    myList.appendChild(listitem)
    inputtag.value=""
    }
})

window.addEventListener("scroll",(e)=>{
    if(window.scrollY>105){
      body.style.backgroundColor="black"  
    }else{
        body.style.backgroundColor="white"
    }
})

btn2.addEventListener("click",()=>{
    window.scrollBy(
        {
            top:3000,
            behavior:"smooth"
        }
    )
})
btn3.addEventListener("click", () => {
    window.scrollTo(0,0)
    window.location.reload()
})
