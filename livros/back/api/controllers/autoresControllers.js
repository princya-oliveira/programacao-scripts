const autoresModels = require('../models/autoresModels.js')

module.exports = {
    autoresMenu,
    autoresGetAll,
    autoresGetById,
    autoresAtivoInativo
}

function autoresMenu(req, res) {
    console.log('Rota autores encontrada')
    res.json('Rota autores encontrada')
}

function autoresGetAll(req, res) {
    console.log('Listar autores {M O D E L}')

    autoresModels.getAllAutores(function(err, resposta){
        console.log('Retorno de autores {M O D E L}\n', resposta)

        if(err) {
            throw err;
        }
        else {
            res.json(resposta)
        }
    })
}

function autoresGetById(req, res) {
    console.log('Consultar autores {M O D E L}')
    const id = req.params.codigo;
    console.log('Parâmetro esperado: ' + id);

    autoresModels.getByIdAutores(id, function(err, resposta){
        console.log('Retorno de autores {M O D E L}\n', resposta)
        if(err) {
            throw err;
        }
        else {
            res.json(resposta)
        }
    })
}

function autoresAtivoInativo(req, res) {
    console.log('Ativar Inativar autores {M O D E L}')
    const id = req.params.codigo;
    console.log('Parâmetro esperado: ' + id);

    autoresModels.getByIdAutores(id, function(err, resposta){
        console.log('Retorno de autores Ativo/Inativo: ', resposta[0].aut_ativoinativo);
        let p_ativo = resposta[0].aut_ativoinativo;

        if(err) {
            throw err;
        }
        else {
            if(p_ativo == 'A') {
                p_ativo = "I"
            }
            else {
                p_ativo = "A"
            }
        }
        console.log("A/I: " + p_ativo)
        autoresModels.ativarInativar(id, p_ativo, function(err, result){
            if(err) {
                throw err
            }
            console.log("Registro Atualizado!")
        })
    })
}