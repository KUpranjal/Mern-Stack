// let p1=new Promise((resolve,reject)=>{
//     const data=true
//     if(data==true){
//         resolve("Promise resolved")
//     }else{
//         reject("Promise rejected")
//     }
// })
// console.log(p1)






// let p1=new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello ji")
//     },5000)
// })
// console.log(p1)






//Every Async function return a promise
async function abc() {
    console.log("OKK")
}
console.log(abc())