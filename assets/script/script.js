const item = document.querySelector('.input-item');
const botaoSalvarItem = document.querySelector('.adicionarBtn');
const listaDeCompra = document.querySelector('.lista-de-compras');

botaoSalvarItem.addEventListener('click', adicionarBtn);

function adicionarBtn(e){
    e.preventDefault()

    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');

    const containerNomeDoItem = document.createElement('div');
    const nomeDoItem = document.createElement('p');
    nomeDoItem.innerHTML = item.value;
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBtn = document.createElement('div');

    const btnRemover = document.createElement('button');
    btnRemover.classList.add('item-lista-button');
    const imgRemover = document.createElement('img');
    imgRemover.src = "./assets/img/delete.svg";
    imgRemover.alt = "Remover"

    const btnEditar = document.createElement('button');
    btnEditar.classList.add('item-lista-button');
    const imgEditar = document.createElement('img');
    imgEditar.src = "./assets/img/edit.svg";
    imgEditar.alt = "Editar"
    
    btnRemover.appendChild(imgRemover)
    containerBtn.appendChild(btnRemover)

    btnEditar.appendChild(imgEditar)
    containerBtn.appendChild(btnEditar)
    
    containerItemLista.appendChild(containerNomeDoItem)
    containerItemLista.appendChild(containerBtn)

    itemDaLista.appendChild(containerItemLista)
    listaDeCompra.appendChild(itemDaLista)
}