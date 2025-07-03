
const sidebar = document.getElementById("sidebar")
const spans = document.getElementsByClassName("text")
const navbar=document.getElementById("nav-main")
const body=document.getElementById("body")
sidebar.addEventListener("mouseenter", () => {
    sidebar.style.width = "20vw"
    for(let item of spans)
    {
        item.style.display = "inline"
    }

})


sidebar.addEventListener("mouseleave", () => {
    sidebar.style.width = "2vw"
        for(let item of spans)
    {
        item.style.display = "none"
    }
})
   function darkMode(){
        body.style.backgroundColor="black"
for(let item of navbar){
    item.style.backgroundColor="white"
}
    }
    function whiteMode(){
        body.style.backgroundColor="white"
for(let item of navbar){
    item.style.backgroundColor="black"
}
    }

