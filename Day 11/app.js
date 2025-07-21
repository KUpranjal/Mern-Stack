// const grid=document.getElementById("grid")


// window.addEventListener("load",()=>{
//     fetch("https://dragonball-api.com/api/characters")
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data)
//          let cha = data.items 
//         for(let item of cha){
//             let card=document.createElement("div")
//             card.setAttribute("id","card")

//             let image=document.createElement("img")
//             image.setAttribute("id","img")
//               image.src = item.image;
//             let name=document.createElement("p")
//             name.setAttribute("id","p")
//                       name.innerText=item.name
//             let gender=document.createElement("p")
//             gender.getAttribute("id","p")
// gender.innerText=item.gender
//             let race=document.createElement("p")
//             race.setAttribute("id","race")
// race.innerText=item.race
//             let description=document.createElement("p")
//             description.setAttribute("id","p")
//             description.innerText=item.description
//             card.appendChild(image)
//             card.appendChild(name)
//             card.appendChild(gender)
//             card.appendChild(race)
//             grid.appendChild(card)
//         }
//     })
// })











// window.addEventListener("load", () => {
//     async function getData()
//     {
//         const retVal = await fetch("https://dragonball-api.com/api/characters")
//         const data = await retVal.json()
//         for (let item of data.items) {
//             let card = document.createElement("div")
//             card.setAttribute("id", "card")

//             let image = document.createElement("img")
//             image.setAttribute("id", "img")
//             image.src = item.image;
//             let name = document.createElement("p")
//             name.setAttribute("id", "p")
//             name.innerText = item.name
//             let gender = document.createElement("p")
//             gender.getAttribute("id", "p")
//             gender.innerText = item.gender
//             let race = document.createElement("p")
//             race.setAttribute("id", "race")
//             race.innerText = item.race
//             let description = document.createElement("p")
//             description.setAttribute("id", "p")
//             description.innerText = item.description
//             card.appendChild(image)
//             card.appendChild(name)
//             card.appendChild(gender)
//             card.appendChild(race)
//             card.appendChild(description)
//             grid.appendChild(card)
//         }
//     }
//     getData()
// })






































window.addEventListener("load", () => {
    async function getData()
    {
        const retVal = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await retVal.json()
        for (let item of data) {
            let card = document.createElement("div")
            card.setAttribute("id", "card")

            let image = document.createElement("img")
            image.setAttribute("id", "img")
            image.src = item.image ||  "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

            let name = document.createElement("p")
            name.setAttribute("id", "p")
            name.innerText ="Name ="+ item.name
            let username = document.createElement("p")
            username.getAttribute("id", "p")
            username.innerText ="Username ="+ item.username
            let email = document.createElement("p")
            email.setAttribute("id", "race")
            email.innerText ="Email ="+ item.email
           
            card.appendChild(image)
            card.appendChild(name)
            card.appendChild(username)
            card.appendChild(email)
         
            grid.appendChild(card)
        }
    }
    getData()
})