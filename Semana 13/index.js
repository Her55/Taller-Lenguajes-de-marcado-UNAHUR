document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ((username=== 'test' && password==='123')||(username==='hernan' && password==='12345')||(username==='javier' && password==='viltez')) {
        var url = "cuenta.html?usuario=" + username;
        window.location.href = url;
    } else {
        alert("Usuario o contraseña invalido");
    }
});

