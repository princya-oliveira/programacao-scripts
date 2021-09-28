const http = require('http')
const servidor = require('./config/aplicativo.js')

server.get('/editoras', (req, res) => {
    console.log('Rota editoras encontrada!')
    res.json('Rota editoras encontrada!')
})

server.get('/livros', (req, res) => {
    console.log('Rota livros encontrada!')
    res.json('Rota livros encontrada!')
})

http.createServer(servidor).listen(servidor.get('porta'), () => {
    console.log(`\nServidor rodando na porta: ${server.get('porta')}`)
})