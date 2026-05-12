var database = require("../database/config");

function pegarMaiorNota(idUsuario) {

    var instrucaoSql = `
        SELECT 
            nome_quiz,
            MAX(nota) AS maiorNota
        FROM resultado_quiz
        WHERE fk_usuario = ${idUsuario}
        GROUP BY nome_quiz;
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    pegarMaiorNota
}