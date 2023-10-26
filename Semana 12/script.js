let button = document.getElementById("myButton");
let isBlack = false;
button.addEventListener("click",function(){  
    if(isBlack === true){
     document.body.style.background = 'white';
     document.body.style.color = "black";
     button.innerHTML = 'Modo Oscuro';
     isBlack = false
   } else {    
     document.body.style.background = "black";
     document.body.style.color = '#ccc';
     button.innerHTML = 'Modo Claro';
     isBlack = true
   }
});
let button2 = document.getElementById("myButton2");
let span = document.getElementById("message");
button2.addEventListener("click",function(){
  let name = document.getElementById("name").value;   
  span.innerHTML = "Gracias "+name+" por votar";
});

