const item = document.querySelector('.input-item');
const listaDeCompra = document.querySelector('#listaDeCompras');
const listaComprados = document.querySelector('#comprados');
let contador = 0;

export function addItem(e) {
    e.preventDefault();
    const itemValue = item.value;
    if (!itemValue) return;

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
    checkboxInput.id = "checkbox" + contador++;

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

    // Exibir data e hora atuais ao lado do item
    let dataAtual = new Date();
    let itemDate = document.createElement('p');
    itemDate.innerText = `${dataAtual.toLocaleDateString('pt-BR', { weekday: 'long' })} (${dataAtual.toLocaleDateString()}) às ${dataAtual.toLocaleTimeString()}`;
    itemDate.setAttribute("class", "data");

    // Botões
    const containerBtn = document.createElement('div');

    const btnRemover = document.createElement('button');
    btnRemover.classList.add('item-lista-button');
    const imgRemover = document.createElement('img');
    imgRemover.src = "./assets/img/delete.svg";
    imgRemover.alt = "Remover";
    btnRemover.appendChild(imgRemover);
    btnRemover.addEventListener('click', function () {
        novoItem.remove();
    });

    const btnEditar = document.createElement('button');
    btnEditar.classList.add('item-lista-button');
    const imgEditar = document.createElement('img');
    imgEditar.src = "./assets/img/edit.svg";
    imgEditar.alt = "Editar";
    btnEditar.appendChild(imgEditar);
    btnEditar.addEventListener('click', function () {
        const novoInput = prompt('Editar o item:', nomeDoItem.textContent);
        if (novoInput) nomeDoItem.textContent = novoInput;
    });

    containerBtn.appendChild(btnRemover);
    containerBtn.appendChild(btnEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBtn);

    novoItem.appendChild(containerItemLista);

    listaDeCompra.appendChild(novoItem);
    containerItemLista.appendChild(itemDate);

    // Limpar o valor do input
    item.value = "";

    // Ouvinte para o checkbox
    checkboxInput.addEventListener('change', function () {
        const currentCheckbox = checkboxInput;
        const currentCustomCheckbox = checkboxCustomizado;
        const currentItemText = nomeDoItem;
        const listItem = novoItem;

        if (currentCheckbox.checked) {
            currentCustomCheckbox.classList.add('checked');
            currentItemText.style.textDecoration = 'line-through';
            listaComprados.appendChild(listItem);
        } else {
            currentCustomCheckbox.classList.remove('checked');
            currentItemText.style.textDecoration = 'none';
            listaDeCompra.appendChild(listItem);
        }
    });
}