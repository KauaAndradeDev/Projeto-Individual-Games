var database = require("../database/config");

function pegarMaiorNota() {

    var instrucaoSql = `
        SELECT 
            nome_quiz,
            MAX(nota) AS maiorNota
        FROM resultado_quiz
        WHERE nome_quiz IN ('Ben10', 'Dragonballbudokai','Godofwar')
        GROUP BY nome_quiz;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    pegarMaiorNota
}