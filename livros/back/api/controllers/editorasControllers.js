const editorasModels = require('../models/editorasModels.js')

module.exports = {
    editorasMenu,
}

function editorasMenu(req, res) {
    console.log('Rota editoras encontrada')
    res.json('Rota editoras encontrada')
}

