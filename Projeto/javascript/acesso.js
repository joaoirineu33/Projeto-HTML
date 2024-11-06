// Declaração de variáveis
let senha = document.querySelector("#senha");
let bt = document.querySelector('#bt_senha');

// Função de login
function login() {
    let usuario = document.querySelector("#usuario");
    let senha = document.querySelector("#senha");
    let deu_ruim = document.querySelector("#deu_ruim");

    // Recupera a lista de usuários do localStorage
    let lst_user = JSON.parse(localStorage.getItem("lst_user")) || [];
    let user_vld = null;

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
    if (user_vld) {
        window.location.href = "../html/conta.html";
        let token = Math.random().toString(16).substring(2);
        localStorage.setItem("token", token);
        localStorage.setItem("user_logado", JSON.stringify(user_vld));
    } 
    // Se os campos estão vazios
    else if (usuario.value === "" || senha.value === "") {
        usuario.setAttribute("style", "border-color: red");
        senha.setAttribute("style", "border-color: red");
        deu_ruim.innerHTML = "Preencha todos os campos.";
        deu_ruim.style.color = "red";
        usuario.focus();
    } 
    // Se o usuário não está cadastrado
    else {
        usuario.setAttribute("style", "border-color: red");
        senha.setAttribute("style", "border-color: red");
        deu_ruim.innerHTML = "usuario não encontrado :)";
        deu_ruim.style.color = "red";
        usuario.focus();
    }
}

// Função para exibir e ocultar a senha
bt.addEventListener('click', () => {
    senha.type = senha.type === 'password' ? 'text' : 'password';
});