// // js is a interpreted language



// console.log(1)


// try{
//     const a=9
//     a=99
// }
// catch(error){
//     console.log(error,__proto__)
//     // console.log(error.message)
// }
// console.log("Important piece of code")












console.log("okk")
const myError=new Error("TUm pagal ho, codding chodh do")
throw myError
try {
    throw new Error("kuch bhi")
} catch (error) {
    console.log(error)
}
throw new Error("kuch bhi")