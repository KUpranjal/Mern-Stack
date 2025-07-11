function outer(a){
    console.log("Hello from outer Fn")

    function inner(){
        console.log("Hello from inner function")
    }
    return inner
}






function sample(){
    console.log("Hello from sample fn")
}
let val=outer(sample)
// console.log(val)
val()