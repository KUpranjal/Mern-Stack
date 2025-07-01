const container= document.getElementById("root")
const products = [
  {
    name: "Wireless Headphones",
    price: 2999,
    desc: "High-quality wireless over-ear headphones with noise cancellation.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Smart Watch",
    price: 4999,
    desc: "Water-resistant smartwatch with fitness tracking and notifications.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Bluetooth Speaker",
    price: 1999,
    desc: "Portable speaker with rich bass and 10 hours of battery life.",
    image: "https://images.unsplash.com/photo-1512499617640-c2f999098c1c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Gaming Mouse",
    price: 1499,
    desc: "Ergonomic gaming mouse with customizable RGB lighting.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Mechanical Keyboard",
    price: 3499,
    desc: "Tactile mechanical keyboard with blue switches and backlight.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Full HD Monitor",
    price: 8999,
    desc: "24-inch full HD LED monitor with ultra-slim bezels.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "External SSD",
    price: 5799,
    desc: "500GB high-speed USB 3.1 solid-state drive for backups.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Smartphone Gimbal",
    price: 3999,
    desc: "3-axis handheld gimbal stabilizer for smooth video shots.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Wireless Charger",
    price: 1299,
    desc: "Fast wireless charger compatible with all Qi devices.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Laptop Stand",
    price: 999,
    desc: "Aluminum adjustable laptop stand for ergonomic use.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  }
];



for(let item of products){
    let card=document.createElement("div")
    card.setAttribute("class","card")
    let image=document.createElement("img")
    let textContainer=document.createElement("div")
    let nameTag=document.createElement("h2")
    let priceTag=document.createElement("h3")
    let descTag=document.createElement("p")
    image.src=item.image
    nameTag.innerText=`${item.name}`
    priceTag.innerText=`${item.price}`
    descTag.innerText=item.desc
    card.appendChild(image)
    card.appendChild(textContainer)
    textContainer.appendChild(nameTag)
      textContainer.appendChild(priceTag)
    textContainer.appendChild(descTag)
  
    container.appendChild(card)
}