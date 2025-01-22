//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = []; //array vazio para armazenar os amigos

function adicionarAmigo() {
  let inputAmigo = document.getElementById("amigo").value.trim(); //input para adicionar amigos

  //verificar se o campo está vazio
  if (inputAmigo === "") {
    alert("Por favor, insira um nome!");
    return;
  }
  //verificar se o amigo já foi adicionado
  if (listaAmigos.includes(inputAmigo)) {
    alert("Este amigo já foi adicionado!");
  }

  listaAmigos.push(inputAmigo); //adiciona o nome do amigo no array

    atualizarAmigos(); //atualizar a lista de amigos

  //limpar o campo
  document.getElementById("amigo").value = "";
}

function atualizarAmigos() {
  document.getElementById("listaAmigos").innerHTML = ""; //limpar a lista de amigos
 
  listaAmigos.forEach((amigo) => {
    let li = document.createElement("li"); //criar um elemento li
    li.innerHTML = amigo; //adicionar o nome do amigo no li
    document.getElementById("listaAmigos").appendChild(li); //adicionar o li na lista de amigos
  });
  


}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Adicione amigos antes de sortear!");
    return;
  }

  let amigoSorteado =
    listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; //sortear um amigo
  document.getElementById(
    "resultado"
  ).innerHTML = `Amigo Sorteado: ${amigoSorteado}`; //mostrar o amigo sorteado na tela
}
