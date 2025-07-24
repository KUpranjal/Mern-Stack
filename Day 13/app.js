const inputBar=document.querySelector("#ip")
function inputHandler(e){
    console.log("API called for : "+e.target.value)
}
function debounce(fn,timer){
    let timeoutId=null
    return (...args)=>{
        clearTimeout(timeoutId)
        timeoutId=setTimeout(()=>{
            fn(...args)
        },timer)
    }
}
const debouncedInputHandler=debounce(inputHandler,500)
inputBar.addEventListener("input",debouncedInputHandler)