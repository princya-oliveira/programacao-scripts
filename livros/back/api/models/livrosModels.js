const conexao = require('../../config/conexao.js');

module.exports = {
    getAllLivros,
    getByIdLivros,
    ativarInativar        
}

function getAllLivros (callback) {
//    conexao.query('select * from livros', callback)
    conexao.query('select A.*, B.aut_apelido, B.aut_nome, C.edt_nome from livros A left join autores B on A.aut_codigo = B.aut_codigo left join editoras C on A.edt_codigo = C.edt_codigo ', callback)    
}

function getByIdLivros (id, callback) {
    conexao.query('select * from livros WHERE liv_codigo = ' + id, callback)
}
