const body=document.getElementById("body")
const Button=document.getElementById("btn")

setInterval(()=>{
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);     
   const rgbColor = `rgb(${r}, ${g}, ${b})`;  
      document.body.style.backgroundColor = rgbColor;
},2000)
