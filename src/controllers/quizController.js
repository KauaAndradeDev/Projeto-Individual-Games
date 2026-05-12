var quizModel = require("../models/quizModel");

function pegarMaiorNota(req, res){

    var idUsuario = req.query.idUsuario;

    quizModel.pegarMaiorNota(idUsuario)

    .then(function(resultado){
        res.json(resultado);
    })

    .catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });

}

module.exports = {
    pegarMaiorNota
}