// Adicionar ID nos botões
// Selecionar botões
// Interceptar evento no clique
// Recuperar o ID adicionado

//Selecionando ul
const listaOpcoes = document.querySelector(".detalhesConta_transacoes")

//Adicionando escutador de eventos
listaOpcoes.addEventListener("click", identificarOpcoes)

//Executando ação depois do click
function identificarOpcoes(event){
    
    //Identificando onde ocorreu o click
    const elemento = event.target

    //Verificando se é o li
    if (elemento.tagName == "LI"){
        
        //Recuperando o ID
        const id = elemento.id
        
        //Selecionando uma seção utilizando o ID que o usuátio clicou
        const secaoEscolha = document.querySelector(`div [data-id="${id}"]`)
        
        //Removendo classe mostrar 
        removerMostrar()

        //Adicionar classe
        secaoEscolha.classList.add("mostrar")
    }
}

//Função para remover as classes ds divs
function removerMostrar(){
    const divs = document.querySelectorAll(".transacoes .container div")
    
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("mostrar")
    }
}