require('dotenv').config();
const express = require('express');
const HybridExpress = require('./api/hybrid.js');
const api = require('./api/router');
async function initApp() {
    return await new Promise((resolve,reject)=>{
        const app = HybridExpress;
        const {server} = app;
        server.use(express.static('public'))
        api(app)
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