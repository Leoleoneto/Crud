'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFilds()
    document.getElementById('modal').classList.remove('active')
}

// document.getElementById('cadastrarCliente')
//     .addEventListener('click', openModal)

// document.getElementById('modalClose')
//     .addEventListener('click', closeModal)

const tempClient = {
    name: 'ana',
    email:'ana@gmail.com',
    celular:'01199560345',
    cidade: 'santos'
}
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client)')) ?? []
const setLocalStorage = (db_client) => localStorage.setItem("db_client", JSON.stringify(db_client))

// CRUD - create read update delete

//Create
const createClient = (client) => {
    const db_client = getLocalStorage()
    db_client.push (client)
    setLocalStorage (db_client)

}
//Read
const readClient = () => getLocalStorage()

//Update
const updateClient = (index, client) => {
    const db_client = readClient()
    db_client[index] = client;
    setLocalStorage(db_client)
    
}
//Delete
const deleteClient = (index) => {
    const db_client = readClient()
    db_client.splice(index, 1)
    setLocalStorage (db_client)
}

const isValidFilds = () => {
   return document.getElementById ('form').reportValidity() // Funçao que retorna Tru para todos os requisitos do HTML

}

//Layout Interaction
const clearFilds = () => {
    const filds = document.querySelectorAll('.modal-field')
    fields.forEach (field => field.value = "")

}
const saveClient = () => {
    if (isValidFilds()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value,
        };
        const index = document.getElementById("nome").dataset.index;

        if (index == "new") {
            createClient(client);
            updateTable();
            closeModal();
        } else {
            updateClient(index, client);
            updateTable();
            closeModal();
        }
    }
};
        
const createRow = (client, index) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}"> 
                Editar
            </button>
            <button type="button" class="button red" id="delete-${index}"> 
                Excluir
            </button>
        </td>
    `;
    document.querySelector("#tableClient>tbody").appendChild(newRow);
};

const clearTable = () => {
    const rows = document.querySelectorAll("#tableClient>tbody tr");
    rows.forEach((row) => row.parentNode.removeChild(row));
};

const updateTable = () => {
    const dbClient = readClient();
    clearTable();
    db_Client.forEach(createRow);
};

const fillFields = (client) => {
    document.getElementById("nome").value = client.name;
    document.getElementById("email").value = client.email;
    document.getElementById("celular").value = client.celular;
    document.getElementById("cidade").value = client.cidade;
    document.getElementById("nome").dataset.index = client.index;
};

const editClient = (index) => {
    const client = readClient()[index];
    client.index = index;
    fillFields(client);
    openModal();
};

const editDelete = (event) => {
    if (event.target.type === "button") {
        const [action, index] = event.target.id.split("-");
        if (action == "edit") {
            editClient(index);
        } else {
            const client = readClient()[index];
            const response = confirm(
                `Deseja realmente excluir o cliente ${client.name}`
            );
            if (response) {
                deleteClient(index);
                updateTable();
            }
        }
    }
};

updateTable();
//Events
document
    .getElementById("cadastrarCliente")
    .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("salvar").addEventListener("click", saveClient);

document
    .querySelector("#tableClient>tbody")
    .addEventListener("click", editDelete);
