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

/////////// CRUD - create read update delete

//delete
const deleteClient = (index) => {
    const db_client = readClient()
    db_client.splice(index, 1)
    setLocalStorage (db_client)
}
//update
const updateClient = (index, client) => {
    const db_client = readClient()
    db_client[index] = client
    setLocalStorage(db_client)
    
}
//read

const readClient = () => getLocalStorage()

//create

const createClient = (client) => {
    const db_client = getLocalStorage()
    db_client.push (client)
    setLocalStorage (db_client)

}

const isValidFilds = () => {
   return document.getElementById ('form').reportValidity() // Funçao que retorna Tru para todos os requisitos do HTML

}

// Interaçao com Layout

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
        }
        createClient(client)
        closeModal()

        
    }
}

// Eventos
    document.getElementById('cadastrarCliente')
        .addEventListener('click', openModal)
    
    document.getElementById('modalClose')
    .addEventListener('click', closeModal)

    document.getElementById('salvar')
    .addEventListener('click', saveClient)

    
