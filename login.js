let btn = document.querySelector(".fa-eye");

let msgError = document.querySelector("#msgError");

let userLabel = document.querySelector("#userLabel");
let usuario = document.querySelector("#usuario");

let senhaLabel = document.querySelector("#senhaLabel");
let senha = document.querySelector("#senha");

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

function Entrar() {
  let listaUser = [];

  let userValid = {
    nome: "",
    user: "",
    senha: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));

  listaUser.forEach((item) => {
    if ((usuario.value == item.usuarioCad) & (senha.value == item.senhaCad)) {
      userValid = {
        nome: item.nomeCad,
        user: item.usuarioCad,
        senha: item.senhaCad,
      };
    }
  });

  if (usuario.value == userValid.user && senha.value == userValid.senha) {
    // window.location.href = "https://rohuldson.github.io/responsive-sideMenu-Dashboard/";

    /*  window.location.href =
      "https://cdpn.io/pen/debug/mdqymzK?authentication_hash=dGrXWjvqNWeM"; */

    window.location.href = "./dashboard.html";

    /* Criando token randomico para auth o usuário
     
    */
    let token =
      Math.random().toString(16).substr(2) +
      Math.random().toString(16).substr(2);
    /* mandando o Token para ser armazenado no LocalStorage */
    localStorage.setItem("token", token);

    localStorage.setItem("userLogado", JSON.stringify(userValid));
  } else {
    userLabel.setAttribute("style", "color: red");
    usuario.setAttribute("style", "border-color: red");
    senha.setAttribute("style", "border-color: red");
    senhaLabel.setAttribute("style", "color: red");
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Usuário ou senha incorretos";
    usuario.focus();
  }
}
