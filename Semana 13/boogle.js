let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {        
        busqueda = e.target.value;       
        window.location.href = "https://www.google.com/search?q=" + busqueda;
    }
});