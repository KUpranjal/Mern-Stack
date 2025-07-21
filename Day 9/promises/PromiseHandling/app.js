// let p1=new Promise((resolve,reject)=>{
//     let data=false
//     let arr=[{name:"Pranjal"},{name:"Kushwaha"}]
//     if(data){
//         resolve(arr)
//     }else{
//         reject("Not Okay")
//     }
// })
// p1
// .then((d)=>{                                         //it is run when the promise is resolve
//     console.log(d)                     
// })
// .catch(()=>{                                         // it is run when the promise is rejected
//     console.log("Promise Rejected")
// })
// .finally(()=>{                                         // it is always run in the last
//     console.log("Finally chala")
// })









// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve([1,2,3,4,5,6])
//     },5000)
// })
// p2
// .then((arr)=>{
//     console.log(arr)
// })
// .catch(()=>{
//     console.log("Promise failed")
// })
// .finally(()=>{
//     console.log("Finally chala")
// })









const api="https://hp-api.onrender.com/api/characters"
const data=fetch(api)
data
.then((val)=>{
    let ans=val.json()
    return ans
})
.then((finalData)=>{
    console.log(finalData)
})