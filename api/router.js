module.exports = (app) => {
    const routes = [
        {
            method: 'get',
            path: '/',
            work: (req,res) => {
                
            }
        }
    ];
    routes.forEach(route=>{
        if(!route.middleware) route.middleware = [];
        app[route.method](route.path,route.middleware,route.work);
    })
}