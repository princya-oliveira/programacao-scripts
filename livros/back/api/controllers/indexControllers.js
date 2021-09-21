
module.exports = {
    indexControllers,
}

function indexControllers(req, res) => {
    console.log('Rota Raiz Encontrada');
    res.json('Rota Autores Encontrada');
}
