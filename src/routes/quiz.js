var express = require("express");
var router = express.Router();
var database = require("../database/config");

var quizController = require("../controllers/quizController");

router.post("/salvarResultado", function (req, res) {

    var idUsuario = req.body.idUsuario;
    var quiz = req.body.quiz;
    var nota = req.body.nota;

    var instrucaoSql = `
        INSERT INTO resultado_quiz (fk_usuario, nome_quiz, nota)
        VALUES (${idUsuario}, '${quiz}', ${nota});
    `;

    database.executar(instrucaoSql)
        .then(function () {
            res.send("Salvo com sucesso!");
        })
        .catch(function (erro) {
            console.log("ERRO SQL:", erro);
            res.status(500).send("Erro ao salvar");
        });
});

router.get("/maiorNota", function(req, res){
    quizController.pegarMaiorNota(req, res);
});

module.exports = router;