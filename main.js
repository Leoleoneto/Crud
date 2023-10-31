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
/////////// CRUD - create read update delete

const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'))
    console.log (db_client)
    db_client.push (client)
    localStorage.setItem ('db_client', JSON.stringify(client))

}

// Eventos
    document.getElementById('cadastrarCliente')
        .addEventListener('click', openModal)
    
    document.getElementById('modalClose')
    .addEventListener('click', closeModal)
