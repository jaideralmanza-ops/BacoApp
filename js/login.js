
const params = new URLSearchParams(window.location.search);
const rol = params.get("rol");


const linkCliente = document.getElementById("link-cliente");
const linkAdmin = document.getElementById("link-admin");


linkCliente.style.display = "none";
linkAdmin.style.display = "none";


if (rol === "cliente") {
    linkCliente.style.display = "inline";
} 
else if (rol === "admin") {
    linkAdmin.style.display = "inline";
}


document.getElementById("form-login").addEventListener("submit", function(e) {
    e.preventDefault();

    if (rol === "cliente") {
        window.location.href = "tienda.html";
    } 
    else if (rol === "admin") {
        window.location.href = "administrador.html";
    } 
    else {
        alert("Debes ingresar desde un rol: cliente o admin");
    }
});
