 window.addEventListener("load", () => {
    console.log("Website Loaded")
})
 const grid = document.getElementById("grid");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
      fetch("https://api.thecatapi.com/v1/images/search?limit=6") 
        .then((res) => res.json())
        .then((finalData) => {
          console.log(finalData);

          grid.innerHTML = "";

          for (let item of finalData) {
            let card = document.createElement("div");
            card.setAttribute("id", "card");

            let image = document.createElement("img");
            image.setAttribute("id", "img");
            image.src = item.url;

            let name = document.createElement("p");
            name.setAttribute("id", "name");
            name.innerText = "Random Cat";

            card.appendChild(image);
            card.appendChild(name);
            grid.appendChild(card);
          }
        })
       
    });
    
