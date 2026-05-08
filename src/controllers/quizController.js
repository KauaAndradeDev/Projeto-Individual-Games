var quizModel = require("../models/quizModel");

function pegarMaiorNota(req, res){

    quizModel.pegarMaiorNota()
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