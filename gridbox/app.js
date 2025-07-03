 const bodyTag = document.getElementById("body");
 const boxes = document.getElementsByClassName("box");




    
       for (let box of boxes) {
      box.addEventListener("click", function () {
        const color = this.style.backgroundColor;
        bodyTag.style.backgroundColor = color;
      });
    }