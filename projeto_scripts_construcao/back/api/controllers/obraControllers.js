const database = require('../../config/conexao.js');

module.exports = {
  obraGetAll,
  obraGetById,
  obraNew,
  obraEdit
}

function obraGetAll(require, response) {
  console.log('Rota Obra Encontrada!');
  const sqlGet = `SELECT * FROM  obra`
  database.query(sqlGet, (err, result) => {
    if (err) console.log(err);
    response.json(result)
  })
};

function obraGetById(require, response) {
  const id = require.params.id
  console.log('Parametro Esperado Get: ' + id);
  const sqlGet = `SELECT * FROM obra WHERE obr_codigo = ?`

  database.query(sqlGet, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.json(result);
    }
  })
}

function obraNew(require, response) {
  const dados = require.body
  console.log(dados);
  console.log(`Salvando Nova Obra!`);

  dados.obr_codigo = null;

  const sqlPost = `INSERT INTO obra SET ?`

  database.query(sqlPost, dados, (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}


function obraEdit(require, response) {
  const dados = require.body  
  console.log("Alterando Registro de Obras...", dados);

  const sqlPut = "UPDATE obra SET obr_cidade = '" + dados.obr_cidade +
    "' , obr_tipoobra = '" + dados.obr_tipoobra +
    "' , obr_valor = '" + dados.obr_valor +
    "' , obr_dtinicio = '" + dados.obr_dtinicio +
    "' , eng_codigo = '" + dados.eng_codigo +
    "' WHERE obr_codigo = '" + dados.obr_codigo + "'"

  database.query(sqlPut, (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}
