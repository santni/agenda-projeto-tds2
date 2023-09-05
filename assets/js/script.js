console.log("JS Linkado");

function verificarInputs() {
    let nomeCompleto = document.getElementById("input-nomeCompleto").value;
    let telFixo = document.getElementById("input-telFixo").value;
    let telCelular = document.getElementById("input-telCelular").value;
    let imgLink = document.getElementById("input-imgLink").value;
    let data = document.getElementById("input-data").value;
    let email = document.getElementById("input-email").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let instagram = document.getElementById("input-instagram").value;
    let github = document.getElementById("input-github").value;

    console.log(nomeCompleto);
    console.log(telFixo);
    console.log(telCelular);
    console.log(imgLink);
    console.log(data);
    console.log(email);
    console.log(cep);
    console.log(cidade);
    console.log(instagram);
    console.log(github);

    if (nomeCompleto == "" || telFixo == "" || telCelular == "" || imgLink == "" || data == "" || email == "" || cep == "" || cidade == "" || instagram == "" || github == "") {
        console.log("Os campos estão vazios!");
        envieMsg('Preencha todos os campos, por favor!', 'erro');
        return true;
    } else {
        console.log("Os dados não estão em branco e foram coletados.");
        return false;
    }
}

function envieMsg(msg, tipo) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}

class Pessoa {
    constructor(nomeCompleto, telFixo, telCelular, imgLink, data, email, cep, cidade, instagram, github) {
        this.nomeCompleto = nomeCompleto;
        this.telFixo = telFixo;
        this.telCelular = telCelular;
        this.imgLink = imgLink;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.instagram = instagram;
        this.github = github;
        this.aniversario = this.calculateAge(data);
        this.zodiacSign = this.getZodiacSign();
    }

    calculateAge() {
        let today = new Date();
        let data = new Date(this.data);
        let age = today.getFullYear() - data.getFullYear();
        let month = today.getMonth() - data.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < data.getDate())) {
            age--;
        }
        console.log("Passou pelo calculateAge() da class User");
        return age;
        
    }
    getZodiacSign() {
        let data = new Date(this.data);
        let day = data.getDate();
        let month = data.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
}

const PessoaTeste = new Pessoa("Nicolly Santos", "(19)76648-5636", "(12)78867-4563", "pnglink", "19/12/2006", "nicolly@gmail.com", "13987-134", "Valinhos", "@santnii", "@santni");

console.log(PessoaTeste);

function registrarPessoa() {
    let nomeCompleto = document.getElementById("input-nomeCompleto").value;
    let telFixo = document.getElementById("input-telFixo").value;
    let telCelular = document.getElementById("input-telCelular").value;
    let imgLink = document.getElementById("input-imgLink").value;
    let data = document.getElementById("input-data").value;
    let email = document.getElementById("input-email").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let instagram = document.getElementById("input-instagram").value;
    let github = document.getElementById("input-github").value;

    const nomePessoa = new Pessoa(nomeCompleto, telFixo, telCelular, imgLink, data, email, cep, cidade, instagram, github);

    bibliotecaPessoas.addPessoa(nomePessoa);
    renderizarConteudo();
}

class ListaPessoas {
    constructor() {
        this.listaPessoas = [];
    }

    addPessoa(param) {
        if (verificarInputs()) {
            envieMsg('Preencha todos os campos, por favor!', 'erro');
        } else if (!isURLValida(param.imgLink)) {
            envieMsg("URL inválido!", 'erro')
        }
        else {
            this.listaPessoas.push(param);
            limparInputs();
            console.log('Cadastrado com sucesso!');
        }
    }
}

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

function limparInputs() {
    document.getElementById("input-nomeCompleto").value = "";
    document.getElementById("input-telFixo").value = "";
    document.getElementById("input-telCelular").value = "";
    document.getElementById("input-imgLink").value = "";
    document.getElementById("input-data").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-cep").value = "";
    document.getElementById("input-cidade").value = "";
    document.getElementById("input-instagram").value = "";
    document.getElementById("input-github").value = "";
}

const bibliotecaPessoas = new ListaPessoas();

function renderizarConteudo() {
    const listaHTML = document.getElementById('containerLista');
    listaHTML.innerHTML = '';
    let array = bibliotecaPessoas.listaPessoas;
    console.log(array);

    array.forEach(nomePessoa => {
        content += `
    <div class='containerLista'>
                <img src="${nomePessoa.imgLink}" alt="${nomePessoa.nomeCompleto}">
                <h1>${nomePessoa.nomeCompleto}</h2>
                <p>Telefone Fixo: ${nomePessoa.telFixo}</p>
                <p>Telefone Celular: ${nomePessoa.telCelular}</p>
            </div>
            `
    });
    document.getElementById('containerLista').innerHTML = content;
}

function renderizarConteudo() {
    let content = '';
    let array = bibliotecaPessoas.listaPessoas;

    array.forEach(nomePessoa => {
        content += `
    <div class='containerLista'>
                <img src="${nomePessoa.imgLink}">
                <h1>${nomePessoa.nomeCompleto}</h2>
                <p>Telefone Fixo: ${nomePessoa.telFixo}</p>
                <p>Telefone Celular: ${nomePessoa.telCelular}</p>
            </div>
            `
    });
    document.getElementById('containerLista').innerHTML = content;
}





