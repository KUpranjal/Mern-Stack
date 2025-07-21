const grid = document.getElementById("grid"); // ✅ Make sure your div has id="grid"
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    async function getData() {
        const retVal = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await retVal.json();

        for (let item of data) { 
            let card = document.createElement("div");
            card.setAttribute("id", "card");

            let postId = document.createElement("p");
            postId.setAttribute("id", "p");
            postId.innerText = "Post ID = " + item.postId;

            let name = document.createElement("p");
            name.setAttribute("id", "p");
            name.innerText = "Name = " + item.name;

            let email = document.createElement("p");
            email.setAttribute("id", "race");
            email.innerText = "Email = " + item.email;

            let body = document.createElement("p");
            body.setAttribute("id", "p"); 
            body.innerText = "Body = " + item.body;

            card.appendChild(postId);
            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(body);

            grid.appendChild(card);
        }
    }

    getData();
});
