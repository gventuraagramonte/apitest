'use strict'

const express = require('express')
const app = express()
const server = require('http').Server(app)

const cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db('mongodb://localhost/apitest')

app.use(cors())

app.use(bodyParser.json())

socket.connect(server)

router(app)

app.use('/app', express.static('public'))

server.listen(4000, function () {
  console.log('this app starting port: 4000')
})
