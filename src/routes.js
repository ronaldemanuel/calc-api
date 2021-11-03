const soma = require('./helper/soma');
const express = require('express');
const app = express();

// Rota SOMA
app.get('/soma/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const resultado = soma(num1, num2);
    res.send({resultado});
});

module.exports = app;