// class Animals{
//     constructor(s,l,f){
//         this.species=s
//         this.legs=l
//         this.fur=f
//     }
//     // greet(){
//     //     console.log("Hello")
//     // }
//     introduce(){
//         console.log(`Hello my name is ${this.species} `)
//     }
// }
// let a1=new Animals("Human",2,false)
// let a2=new Animals("Elephant",4,true)
// // a1.greet()
// // a2.greet()
// a1.introduce()
// a2.introduce()












class Vehicle{
    constructor(m,c,f,b){
        this.mode=m
        this.color=c
        this.fuel=f
        this.brand=b
    }
}
class Car extends Vehicle{
    constructor(t,d,bt,m,c,f,b){
        super(m,c,f,b)
        this.tyres=t
        this.doors=d
        this.bluetooth=bt
    }
}
let car1=new Car(4,4,true,"Land","White","CNG","Hyundai")
console.log(car1)
class Aeroplane extends Vehicle{
    constructor(isCom,isLar,hah,m,c,f,b){
        super(m,c,f,b)
        this.isCommercial=isCom
        this.isLarge=isLar
        this.haveAirHostess=hah
    }
}
let ap1=new Aeroplane(true, true, true,"Air","White","Jet")
console.log(ap1)
class Boat extends Vehicle{
    constructor(isCar,eng,sp,m,c,f,b){
        super(m,c,f,b)
        this.isCargo=isCar
        this.engine=eng
        this.haveSwimmingPool=sp
    }
}
let b1=new Boat(true,true,true,"Water","Grey","Diesel")
console.log(b1)7