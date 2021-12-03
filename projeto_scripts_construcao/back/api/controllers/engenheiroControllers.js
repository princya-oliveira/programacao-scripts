const db = require('../../config/db.js');

module.exports = {
  engenheiroGetAll,
  engenheiroGetById,
  engenheiroNew,
  engenheiroEdit
}

function engenheiroGetAll(require, response) {
  console.log('Rota Engenheiro Encontrada!');
  const sqlGet = `SELECT * FROM  engenheiro`
  db.query(sqlGet, (err, result) => {
    if (err) console.log(err);
    response.json(result)
  })
};

function engenheiroGetById(require, response) {
  const id = require.params.id
  console.log('Parametro Esperado Get: ' + id);
  const sqlGet = `SELECT * FROM engenheiro WHERE eng_codigo = ?`

  db.query(sqlGet, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.json(result);
    }
  })
}

function engenheiroNew(require, response) {
  const dados = require.body
  console.log(`Gravando Novo Engenheiro!`);

  dados.eng_codigo = null;

  const sqlPost = `INSERT INTO engenheiro SET ?`

  db.query(sqlPost, [dados], (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}

function engenheiroEdit(require, response) {
  const dados = require.body
  console.log(dados);
  console.log("Alterando Registro de Engenheiros...", dados);

  const sqlPut = "UPDATE engenheiro SET eng_nome = '" + dados.eng_nome +
    "' , eng_apelido = '" + dados.eng_apelido +
    "' , eng_telefone = '" + dados.eng_telefone +
    "' , eng_crea = '" + dados.eng_crea +
    "' , eng_datacrea = '" + dados.eng_datacrea +
    "' WHERE eng_codigo = '" + dados.eng_codigo + "'"

  db.query(sqlPut, (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}
