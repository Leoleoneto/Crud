'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

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
const delete = (index) => {
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
    const db_client = JSON.parse(localStorage.getItem('db_client'))
    console.log (db_client)
    db_client.push (client)
    setlocalStorage (db_client)

}


// Eventos
    document.getElementById('cadastrarCliente')
        .addEventListener('click', openModal)
    
    document.getElementById('modalClose')
    .addEventListener('click', closeModal)

    
