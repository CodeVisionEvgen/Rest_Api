const path = require('path');
const mainFolder = path.dirname(require.main.filename);
module.exports = {
    SendFile: function sendFile(res,path) {
        res.sendFile(mainFolder + '/public/' + path);
    }
}