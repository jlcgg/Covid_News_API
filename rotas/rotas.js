module.exports = app => {
    const controlador = require("../controladores/controller.js");

    var router = require("express").Router();

    // Cria um novo utilizador
    router.post("/registar", controlador.registar);

    // Rota para login - tem de ser POST para não vir user e pass na URL
    router.post("/login", controlador.login);

    // Rota para verificar e ativar o utilizador
    router.get("/auth/confirm/:confirmationCode", controlador.verificaUtilizador)

    router.get("/en", controlador.getEn);

    router.get("/pt", controlador.getPt);

    router.get("/es", controlador.getEs);

    router.get("/it", controlador.getIt);

    app.use('/api', router);
}