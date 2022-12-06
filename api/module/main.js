const path = require('path');
const mainFolder = path.dirname(require.main.filename);
module.exports = {
    SendFile: function sendFile(req,res,path) {
        this.res.sendFile(mainFolder + path);
    }
}