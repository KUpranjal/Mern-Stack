// // OBJECTS



// let obj={
//     fn1:function(){
//         console.log(this)
//     },
//     fn2:()=>{
//         console.log(this)
//     },fn3:function(){
//         console.log(this)
//         const temp=()=>{
//             console.log(this)
//         }
//         temp()
//     },
//     fn4:()=>{
//         console.log(this)
//         function temp(){
//             console.log(this)
//         }
//         temp()
//     }
// }

// // obj.fn1()
// // obj.fn2()
// // obj.fn3()
// obj.fn4()






let p1={
    naam:"Pranjal",
    age:23,
    introduce:function(){
        console.log(`hi i am ${this.naam} and my age is ${this.age}`)
    }
}
let p2={
    naam:"Pankaj",
    age:24,
    
}
p1.introduce.call(p2)
namaste.call(p2,"Fish")
namaste.call(p1,"Dog")

p1.introduce()
p2.introduce()


function namaste(pet){
    console.log(`Namaste mera naam hai ${this.naam} and i have a pet: ${pet}`)
}