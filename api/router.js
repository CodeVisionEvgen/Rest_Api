module.exports = (app) => {
    const {server} = app; 
    const routes = [
        {
            method: 'get',
            path: '/',
            work: app.sendFile('html/main.html')
        }
    ];
    routes.forEach(route=>{
        console.log(route)
        if(!route.middleware) route.middleware = [];
        server[route.method](route.path,route.middleware,route.work);
    })
}