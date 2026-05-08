var database = require("../database/config");

function pegarMaiorNota(){

    var instrucaoSql = `
        SELECT MAX(nota) AS maiorNota
        FROM resultado_quiz
        WHERE nome_quiz = 'Ben10';
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    pegarMaiorNota
}