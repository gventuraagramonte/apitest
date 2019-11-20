'use strict'

const store = require('./store')
const socket = require('../../socket').socket

function addUser (name, lastname, dni, active, file) {
  if (!dni) {
    return Promise.reject('Invalid Dni')
  }

  let fileUrl = ''
  if (file) {
    fileUrl = 'http://localhost:4000/app/files/' + file.filename
  }

  const fullUser = {
    name: name,
    lastname: lastname,
    dni: dni,
    active: active,
    file: fileUrl
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
