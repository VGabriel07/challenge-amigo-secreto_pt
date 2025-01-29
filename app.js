//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomeAmigo;

function adicionarAmigo() {
    nomeAmigo = document.getElementById("amigo").value.trim();
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome");
        return;
    }
    amigos.push(nomeAmigo);
    exibirListaDeAmigos();
    limparInput();
}

function limparInput() { // limpa o campo de inserir os nomes
    nomeAmigo = document.getElementById("amigo");
    nomeAmigo.value = "";
}

function exibirListaDeAmigos() {
    let listaDeAmigos = document.getElementById("listaAmigos"); 
    listaDeAmigos.innerHTML = ""; // Limpa a lista

    for (let nomeDoAmigo of amigos) { 
        let itemDaLista = document.createElement("li"); 
        itemDaLista.textContent = nomeDoAmigo;
        listaDeAmigos.appendChild(itemDaLista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista! Adicione amigos para realizar o sorteio.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

function limparLista() { // Limpa os nomes adicionados na lista
    amigos = [];
    let limparListaAmigos = document.getElementById("listaAmigos");
    limparListaAmigos.innerHTML = "";
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
}



