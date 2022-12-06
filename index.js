require('dotenv').config();
const express = require('express');
const HybridExpress = require('./api/hybrid.js');
const api = require('./api/router');
async function initApp() {
    return await new Promise((resolve,reject)=>{
        const {server} = HybridExpress;
        server.use(express.static('public'))
        api(server)
        server.listen(process.env.port,()=>{
            resolve();
        });
    });
};
initApp().then(()=>{
    console.log('Web start');
}).catch(err=>{
    console.log(err);
})