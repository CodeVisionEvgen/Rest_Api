const express = require('express');
const CustomModules = require('./module/main');
console.log(CustomModules)
class Web {
    constructor(server) {
        this.server = server;
    }
    sendFile() {
        this.server().get((req,res)=>CustomModules["SendFile"](req,res,path))
    }
}
module.exports = new Web(express());