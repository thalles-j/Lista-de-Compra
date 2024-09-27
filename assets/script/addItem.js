// assets/script/addItem.js
import { createListItem } from './createItem.js';
import { msgValue } from './msgValue.js';

const itemInput = document.querySelector('.input-item');
const listaDeCompra = document.querySelector('#listaDeCompras');
const listaComprados = document.querySelector('#comprados');
let contador = 0;

export function addItem(e) {
    e.preventDefault();
    const itemValue = itemInput.value;
    if (!itemValue) return;

    let dataAtual = new Date();
    let itemDate = document.createElement('p');
    itemDate.innerText = `${dataAtual.toLocaleDateString('pt-BR', { weekday: 'long' })} (${dataAtual.toLocaleDateString()}) às ${dataAtual.toLocaleTimeString()}`;
    itemDate.setAttribute("class", "data");

    // Função de remoção
    const onRemove = function () {
        novoItem.remove();
    };

    // Função de edição
    const onEdit = function () {
        const novoInput = prompt('Editar o item:', nomeDoItem.textContent);
        if (novoInput) nomeDoItem.textContent = novoInput;
    };

    const novoItem = createListItem(itemValue, contador++, itemDate, onEdit, onRemove, listaDeCompra, listaComprados);

    listaDeCompra.appendChild(novoItem);
    msgValue(listaDeCompra)

    // Limpar o valor do input
    itemInput.value = "";
}
