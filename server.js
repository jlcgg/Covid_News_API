const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true }));

require("./rotas/rotas")(app);

const PORTA = process.env.PORT || 8080;

app.listen(PORTA, () => {
    console.log(`O servidor está a ouvir na porta ${PORTA}`);
});

app.use(express.static('public'));