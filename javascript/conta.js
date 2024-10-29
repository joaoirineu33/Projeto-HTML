// Verifica se o usuário está logado ao carregar a página
let user_logado = JSON.parse(localStorage.getItem("user_logado"));
let Usuario = document.querySelector("#Usuario");

// Verifica se o token existe no localStorage
if (localStorage.getItem("token") === null) {
    alert("Você precisa estar logado para acessar essa página.");
    window.location.href = "../html/acesso.html";
} else if (user_logado && user_logado.nome) {
    // Exibe o nome do usuário na página
    Usuario.innerHTML = "Bem-vindo à sua conta, " + user_logado.nome;
}

// Função para sair da página
function sair() {
    localStorage.removeItem("user_logado");
    localStorage.removeItem("token");
    window.location.href = "../html/acesso.html";
}
