'use strict'

const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function (req, res) {
  controller.listUsers()
    .then(users => {
      response.success(req, res, users, 200)
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err)
    })
})

router.post('/', function (req, res) {
  controller.addUser(req.body.name, req.body.lastname, req.body.dni, req.body.active)
    .then((fullUser) => {
      response.success(req, res, fullUser, 201)
    })
    .catch(err => {
      response.error(req, res, 'Informacion invalida', 500, err)
    })
})

module.exports = router
