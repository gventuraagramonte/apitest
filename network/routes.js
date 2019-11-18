const express = require('express')
const user = require('')

const routes = function(server){
    server.use('/user', user)
}

module.exports = routes