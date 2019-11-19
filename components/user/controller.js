'use strict'

const store = require('./store')
const socket = require('../../socket').socket

function addUser (name, lastname, dni, active) {
    if(!dni){
        return Promise.reject('Invalid Dni')
    }

    const fullUser = {
        name: name,
        lastname: lastname,
        dni: dni,
        active: active
    }

    return store.add(fullUser)
}

function listUsers () {
  return store.list()
}

module.exports = {
  addUser,
  listUsers
}
