//BIND METHOD

let obj={
    naam:"{Pranjal",
    age:23


}
function sayHii(color,sport){
    console.log(`Hii, my name is ${this.naam} and i am ${this.age} years old and my favroute  color is ${color} and my av sport is ${sport}`)
}
sayHii()
sayHii.call(obj,"Red","Cricket")
sayHii.apply(obj,["Balck","Cricket"])           // same as call, hust pass argument un an array
const fn=sayHii.bind(obj,"Purple","Golf")         // dont pass arfument in arrays,
// but the vinf method return a fn  whose  "this"  points to the ovjets , we havce to call the fn ourselves
 fn()