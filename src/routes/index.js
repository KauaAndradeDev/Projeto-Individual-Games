var express = require("express");
var router = express.Router();

var usuariosRouter = require("./usuarios");
var aquariosRouter = require("./aquarios");
var medidasRouter = require("./medidas");
var avisosRouter = require("./avisos");
var quizRouter = require("./quiz"); // 

router.use("/usuarios", usuariosRouter);
router.use("/aquarios", aquariosRouter);
router.use("/medidas", medidasRouter);
router.use("/avisos", avisosRouter);
router.use("/quiz", quizRouter); 

module.exports = router;