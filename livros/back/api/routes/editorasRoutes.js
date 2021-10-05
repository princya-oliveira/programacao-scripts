const controllerEditoras = require('../controllers/editorasControllers.js')

server.get('/editoras', controllerEditoras.editorasMenu)

//server.get('/editoras/listar', controllerEditoras.autoresGetAll)

//server.get('/autores/consultar/:codigo', controllerAutores.autoresGetById)

//server.get('/autores/ativoInativo/:codigo', controllerAutores.autoresAtivoInativo)
