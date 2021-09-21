const http = require('http');
const servidor = require('./config/aplicativo.js');

http.createServer(servidor).listen(servidor.get('porta'), () => {
    console.log(`\nServidor Rodando na Porta: ${server.get('porta')}`)
})