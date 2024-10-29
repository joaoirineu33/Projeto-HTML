//Declaração de variáveis
let senha = document.querySelector("#senha");
let label_senha = document.querySelector("#label_senha");
let bt = document.querySelector('#bt_senha');

// Função de login
function login() {
    let usuario = document.querySelector("#usuario");
    let usuario_label = document.querySelector("#user_label");
    
    let senha = document.querySelector("#senha");
    let senha_label = document.querySelector("#senha_label");

    let deu_ruim = document.querySelector("#deu_ruim");
    let lst_user = [];

    let user_vld = {
        nome: "",
        user: "",
        senha: ""
    };

    lst_user = JSON.parse(localStorage.getItem("lst_user")) || [];

    // Verifica se o usuário existe
    lst_user.forEach((item) => {
        if (usuario.value === item.user_cd && senha.value === item.senha_cd) {
            user_vld = {
                nome: item.nome_cd,
                user: item.user_cd,
                senha: item.senha_cd
            };
        }
    });

    // Se as credenciais estão corretas
    if (usuario.value === user_vld.user && senha.value === user_vld.senha) {
        window.location.href = "../html/conta.html";

        let token = Math.random().toString(16).substring(2);
        localStorage.setItem("token", token);
        localStorage.setItem("user_logado", JSON.stringify(user_vld));
    } else {
        usuario.setAttribute("style", "border-color: red");
        senha.setAttribute("style", "border-color: red");
        deu_ruim.innerHTML = "Usuário ou senha incorretos";
        deu_ruim.style.color = "red";
        usuario.focus();
    }
}

// Função para exibir e ocultar a senha
bt.addEventListener('click', () => {
    senha.type = senha.type === 'password' ? 'text' : 'password';
});