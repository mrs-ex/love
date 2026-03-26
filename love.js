let btn = document.querySelector(".no");

btn.addEventListener("mouseover" ,function (){
let x = Math.random() * (window.innerWidth - btn.offsetWidth);
  let y = Math.random() * (window.innerHeight - btn.offsetHeight);

  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
})

