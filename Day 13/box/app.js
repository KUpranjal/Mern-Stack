  const div = document.getElementById("box");

 
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

 
  setInterval(() => {
    div.style.top = `${Math.floor(Math.random() * 90)}vh`;
    div.style.left = `${Math.floor(Math.random() * 90)}vw`;
    document.body.style.backgroundColor = getRandomColor();  
  }, 2000);