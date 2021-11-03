const express = require('express');
const app = express();

// Rota SOMA
app.get('/soma/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    res.send(num1 + ' + ' + num2 + ' = ' + `${num1 + num2}`);
});

module.exports = app;