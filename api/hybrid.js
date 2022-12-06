const express = require('express');
const CustomModules = require('./module/main');
console.log(CustomModules)
class Web {
    constructor(server) {
        this.server = server;
    }
    // Ось тут нормально реалізовано кастомна функція?
    
    sendFile(path) {
        return ((req,res)=>CustomModules["SendFile"](res,path))
    }
}
module.exports = new Web(express());