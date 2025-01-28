let listaAmigos = []; //array vazio para armazenar os amigos
let amigosSorteados = []; // array para armazenar os amigos já sorteados



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
  amigosSorteados = []; //limpa a lista de amigos sorteados

  atualizarAmigos(); //atualiza a lista de amigos
    atualizarBotaoSortear(); //atualiza o botão sortear

  document.getElementById("amigo").value = "";  //limpa o campo
}







function atualizarAmigos() {
  document.getElementById("listaAmigos").innerHTML = ""; //limpar a lista de amigos

    listaAmigos.sort(); //ordenar a lista de amigos



  listaAmigos.forEach((amigo) => { //para cada amigo na lista de amigos
    let li = document.createElement("li"); //criar um elemento li
    li.innerHTML = amigo; //adicionar o nome do amigo no li
    document.getElementById("listaAmigos").appendChild(li); //adicionar o li na lista de amigos
  });
}



//função para sortear amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) { //verificar se a lista de amigos está vazia
      alert("Adicione amigos antes de sortear!");
      return;
    }
  
    //verifica se todos os amigos já foram sorteados
    if (amigosSorteados.length === listaAmigos.length) {
      alert("Todos os amigos já foram sorteados!");
      return;
    }
  
    let amigoSelecionado;
  
    //sorteia um amigo que ainda não foi sorteado
    do {
      amigoSelecionado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    } while (amigosSorteados.includes(amigoSelecionado)); //repete se o amigo já foi sorteado
  
    amigosSorteados.push(amigoSelecionado); //adiciona o amigo sorteado ao array de amigos sorteados
  
    //exibe o amigo sorteado
    document.getElementById(
      "resultado"
    ).innerHTML = `Amigo Sorteado: ${amigoSelecionado}`; //mostrar o amigo sorteado na tela
  
    atualizarBotaoSortear(); //atualiza o botão após o sorteio
  }


// Adicionando o evento para pressionar "Enter"
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada foi Enter
      adicionarAmigo(); // Adiciona o amigo ao pressionar Enter
    }
  });


  // Função para novo sorteio
function novoSorteio() {
    // Limpa o resultado atual (se houver)
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('amigo').value = '';

     // Limpa a lista de amigos e sorteios
     listaAmigos = [];
     amigosSorteados = [];
    atualizarBotaoSortear(); // Atualiza o botão de sorteio

    // Se você precisar reiniciar a lista de amigos ou realizar outra ação, você pode fazer aqui
    alert('Novo sorteio iniciado!');
}


// Adiciona um evento que executa a função 'atualizarBotaoSortear' assim que o documento HTML estiver completamente carregado.
document.addEventListener("DOMContentLoaded", atualizarBotaoSortear);
