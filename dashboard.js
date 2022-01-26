let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

if (localStorage.getItem("token") == null) {
  alert("Você precisa realizar o LOGIN pra acessar está página");
  /*  window.location.href =
    "https://cdpn.io/pen/debug/RwLmBPG?authentication_hash=RBAOJRKZOJNr"; */
  window.location.href = "./index.html";
}

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  /*   window.location.href =
    "https://cdpn.io/pen/debug/RwLmBPG?authentication_hash=yYryLamjaNnM"; */
  window.location.href = "./index.html";
}
