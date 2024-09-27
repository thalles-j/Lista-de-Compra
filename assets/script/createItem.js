// assets/script/createListItem.js

export function createListItem(itemValue, contador, itemDate, onEdit, onRemove, listaDeCompra, listaComprados) {
    const novoItem = document.createElement('li');

    // Container principal do item
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');

    // Container para o nome e checkbox
    const containerNomeDoItem = document.createElement('div');

    // Checkbox
    const containerCheckbox = document.createElement('div');
    containerCheckbox.classList.add('container-checkbox');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add('input-checkbox');
    checkboxInput.id = "checkbox" + contador;

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkboxInput.id);

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxCustomizado);
    checkboxLabel.appendChild(checkboxInput);
    containerCheckbox.appendChild(checkboxLabel);

    // Nome do item
    const nomeDoItem = document.createElement('p');
    nomeDoItem.textContent = itemValue;
    nomeDoItem.classList.add('item-title');

    containerNomeDoItem.appendChild(containerCheckbox);
    containerNomeDoItem.appendChild(nomeDoItem);

    // Botões
    const containerBtn = document.createElement('div');

    const btnRemover = document.createElement('button');
    btnRemover.classList.add('item-lista-button');
    const imgRemover = document.createElement('img');
    imgRemover.src = "./assets/img/delete.svg";
    imgRemover.alt = "Remover";
    btnRemover.appendChild(imgRemover);
    btnRemover.addEventListener('click', onRemove);

    const btnEditar = document.createElement('button');
    btnEditar.classList.add('item-lista-button');
    const imgEditar = document.createElement('img');
    imgEditar.src = "./assets/img/edit.svg";
    imgEditar.alt = "Editar";
    btnEditar.appendChild(imgEditar);
    btnEditar.addEventListener('click', onEdit);

    containerBtn.appendChild(btnRemover);
    containerBtn.appendChild(btnEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBtn);
    novoItem.appendChild(containerItemLista);
    containerItemLista.appendChild(itemDate);

    // Ouvinte para o checkbox
    checkboxInput.addEventListener('change', function () {
        const currentItemText = nomeDoItem;

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add('checked');
            currentItemText.style.textDecoration = 'line-through';
            listaComprados.appendChild(novoItem); 
            listaDeCompra.removeChild(novoItem); 
        } else {
            checkboxCustomizado.classList.remove('checked');
            currentItemText.style.textDecoration = 'none';
            listaDeCompra.appendChild(novoItem); 
            listaComprados.removeChild(novoItem); 
        }
    });

    return novoItem;
}
