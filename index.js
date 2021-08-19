const express = require('express');
const app = express();
const PORT = 3000;

// Rota SOMA
app.get('/soma/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    res.send(num1 + ' + ' + num2 + ' = ' + `${num1 + num2}`);
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});