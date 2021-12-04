const database = require('../../config/conexao.js');

module.exports = {
  indexControllers
}

function indexControllers(req, res) {
  console.log('Rota Raiz do Projeto Encontrada!');
  res.json('Rota Raiz do Projeto Encontrada!');
};

