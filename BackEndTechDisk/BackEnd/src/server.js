const app = require('./app');
require('dotenv').config()

const porta = process.env.PORT || 8080


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})


