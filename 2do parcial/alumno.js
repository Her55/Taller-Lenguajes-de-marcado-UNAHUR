let formulario = document.getElementById("inscripcion");
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert('Asistencia reservada correctamente'); 
    formulario.reset();
});