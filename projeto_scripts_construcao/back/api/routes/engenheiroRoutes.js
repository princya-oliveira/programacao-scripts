const controller = require('../controllers/engenheiroControllers.js');

server.get('/engenheiro', controller.engenheiroGetAll);
server.get('/engenheiro/:id', controller.engenheiroGetById)

server.put('/engenheiro/:id', controller.engenheiroEdit)
server.post('/engenheiro', controller.engenheiroNew)