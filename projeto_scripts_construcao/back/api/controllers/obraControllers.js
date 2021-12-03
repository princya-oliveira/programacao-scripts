const db = require('../../config/db.js');

module.exports = {
  obraGetAll,
  obraGetById,
  obraNew,
  obraEdit
}

function obraGetAll(require, response) {
  console.log('Rota Obra Encontrada!');
  const sqlGet = `SELECT * FROM  obra`
  db.query(sqlGet, (err, result) => {
    if (err) console.log(err);
    response.json(result)
  })
};

function obraGetById(require, response) {
  const id = require.params.id
  console.log('Parametro Esperado Get: ' + id);
  const sqlGet = `SELECT * FROM obra WHERE obr_codigo = ?`

  db.query(sqlGet, [id], (err, result) => {
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
  console.log(`Gravando Nova Obra!`);

  dados.obr_codigo = null;

  const sqlPost = `INSERT INTO obra SET ?`

  db.query(sqlPost, dados, (err, result) => {
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

  db.query(sqlPut, (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}
