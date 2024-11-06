//Declaração de variáveis
let bt = document.querySelector('#bt_senha');
let bt_cfm = document.querySelector('#bt_cfm_senha');

let nome = document.querySelector("#nome");
let label_nome = document.querySelector("#label_nome");
let vld_nome = false;

let usuario = document.querySelector("#usuario");
let label_usuario = document.querySelector("#label_usuario");
let vld_usuario = false;

let senha = document.querySelector("#senha");
let label_senha = document.querySelector("#label_senha");
let vld_senha = false;

let cfm_senha = document.querySelector("#cfm_senha");
let label_cfm_senha = document.querySelector("#label_cfm_senha");
let vld_cfm_senha = false;

let deu_ruim = document.querySelector("#deu_ruim");
let deu_bom = document.querySelector("#deu_bom");

// Validação do campo Nome
nome.addEventListener("keyup", () => {
    if (nome.value.length <= 2) {
        label_nome.setAttribute("style", "color:red");
        label_nome.innerHTML = "Nome Insira no mínimo 3 caracteres";
        nome.setAttribute("style", "border-color:red");
        vld_nome = false;
    } else {
        label_nome.setAttribute("style", "color:green");
        label_nome.innerHTML = "Nome";
        nome.setAttribute("style", "border-color:green");
        vld_nome = true;
    }
});

// Validação do campo Usuário
usuario.addEventListener("keyup", () => {
    if (usuario.value.length <= 3) {
        label_usuario.setAttribute("style", "color:red");
        label_usuario.innerHTML = "Usuário Insira no mínimo 4 caracteres";
        usuario.setAttribute("style", "border-color:red");
        vld_usuario = false;
    } else {
        label_usuario.setAttribute("style", "color:green");
        label_usuario.innerHTML = "Usuário";
        usuario.setAttribute("style", "border-color:green");
        vld_usuario = true;
    }
});

// Validação do campo Senha
senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
        label_senha.setAttribute("style", "color:red");
        label_senha.innerHTML = "Senha Insira no mínimo 6 caracteres";
        senha.setAttribute("style", "border-color:red");
        vld_senha = false;
    } else {
        label_senha.setAttribute("style", "color:green");
        label_senha.innerHTML = "Senha";
        senha.setAttribute("style", "border-color:green");
        vld_senha = true;
    }
});

// Validação do campo Confirmar Senha
cfm_senha.addEventListener("keyup", () => {
    if (senha.value !== cfm_senha.value) {
        label_cfm_senha.setAttribute("style", "color:red");
        label_cfm_senha.innerHTML = "Confirmar Senha Senhas não conferem";
        cfm_senha.setAttribute("style", "border-color:red");
        vld_cfm_senha = false;
    } else {
        label_cfm_senha.setAttribute("style", "color:green");
        label_cfm_senha.innerHTML = "Confirmar Senha";
        cfm_senha.setAttribute("style", "border-color:green");
        vld_cfm_senha = true;
    }
});

// Função para cadastrar
function cadastrar() {
    if (vld_nome && vld_usuario && vld_senha && vld_cfm_senha) {
        let lst_user = JSON.parse(localStorage.getItem("lst_user") || "[]");
        lst_user.push(
            {
                nome_cd: nome.value,
                user_cd: usuario.value,
                senha_cd: senha.value
            }
        );
        localStorage.setItem("lst_user", JSON.stringify(lst_user));

        deu_bom.setAttribute("style", "color:green");
        deu_bom.innerHTML = "<strong>Cadastrou o usuário... Aguarde para ser redirecionado para login</strong>";
        deu_ruim.setAttribute("style", "display:none");

        setTimeout(()=>{
            window.location.href = "../html/acesso.html"
        },2500)
    } else {
        deu_ruim.setAttribute("style", "color:red");
        deu_ruim.innerHTML = "<strong>Preencha os campos corretamente!</strong>";
        deu_bom.setAttribute("style", "display:none");
    }
}

// Função para exibir e ocultar a senha
bt.addEventListener('click', () => {
    if (senha.type === 'password') {
        senha.type = 'text';
    } else {
        senha.type = 'password';
    }
});

// Função para exibir e ocultar a confirmação de senha
bt_cfm.addEventListener('click', () => {
    if (cfm_senha.type === 'password') {
        cfm_senha.type = 'text';
    } else {
        cfm_senha.type = 'password';
    }
});