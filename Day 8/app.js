//ABSTRACTION 


// class User{
//     #password
//     constructor(un, pass){
//         this.username=un
//         this.#password=pass
//     }
//     changePassword(newPassword){
//         if(newPassword=="" || newPassword<8){
//             alert("Password cannot be empty / lesser than 8 characters")
//             return 
//         }
//         this.#password=newPassword
//     }
// }
// let user1=new User("Pranjal","Pranjksdk")
// console.log(user1)
// user1.changePassword("ksjdfhksj")
// console.log(user1)





//POLYMORPHISM


// class Parent{
//     constructor(n,p){
//         this.name=n
//         this.property=p
//     }
//   greet(){
//     console.log("Namaste")
//   }
// }
//   class child extends Parent {
//         constructor(n,p,c) {
//             super(n,p)
//             this.cycle=c
//         }
//         greet(){
//             console.log("Hello")
//         }
//     }
//     let child1=new child("Pranjal",0,"Ubicycle")
//     console.log(child1)
//     child1.greet




//   overriding 


// class Person{
//     constructor(n,a){
//         this.name=n
//         this.age=a
//     }
//     greet(){
//         console.log("Hello how are you")
//     }
//     greet(name){
//         console.log(`Hello ${name}, how are you doing??`)
//     }
// }
// let p1=new Person("Pranjal",21)
// p1.greet("Akash")
// p1.greet()