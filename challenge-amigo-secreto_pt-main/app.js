let listaAmigos = []; //array vazio para armazenar os amigos



//função para desativar o botão sortear quando a lista tiver vazia
function atualizarBotaoSortear() {
    let botaoSortear = document.querySelector(".button-draw"); //pegar o botão sortear
    if (listaAmigos.length === 0){
        botaoSortear.disabled = true; //desabilitar o botão se a lista de amigos estiver vazia
    }else{
        botaoSortear.disabled = false; //habilitar o botão se a lista de amigos não estiver vazia
    }

}

///função para adicionar amigos
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

  atualizarAmigos(); //atualiza a lista de amigos
    atualizarBotaoSortear(); //atualiza o botão sortear

  document.getElementById("amigo").value = "";  //limpa o campo
}







function atualizarAmigos() {
  document.getElementById("listaAmigos").innerHTML = ""; //limpar a lista de amigos

  listaAmigos.forEach((amigo) => { //para cada amigo na lista de amigos
    let li = document.createElement("li"); //criar um elemento li
    li.innerHTML = amigo; //adicionar o nome do amigo no li
    document.getElementById("listaAmigos").appendChild(li); //adicionar o li na lista de amigos
  });
}



function sortearAmigo() {
  if (listaAmigos.length === 0) { //verificar se a lista de amigos está vazia
    alert("Adicione amigos antes de sortear!");
    return;
  }

  let amigoSorteado = 
    listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; //sortear um amigo
  document.getElementById( //pegar o elemento com id
    "resultado"
  ).innerHTML = `Amigo Sorteado: ${amigoSorteado}`; //mostrar o amigo sorteado na tela
}



// Adiciona um evento que executa a função 'atualizarBotaoSortear' assim que o documento HTML estiver completamente carregado.
document.addEventListener("DOMContentLoaded", atualizarBotaoSortear);
