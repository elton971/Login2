var usr = document.getElementById("user");
var pass = document.getElementById("pass");
let forma = document.createElement("a")

function entrar() {
    if (usr.value === "elton") {

        if (pass.value == "1234") {
            alert("Acessado")
            window.location.href = "somando.html";
        } else {
            alert("password errado");
        }
    } else {
        alert("User nao encontrado");
    }
}