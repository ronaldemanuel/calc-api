import soma from './helper/soma';
import express from "express";
const app = express();

// Rota SOMA
app.get('/soma/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const resultado = soma(num1, num2);
    if (isNaN(resultado)) {
        res.status(500).send({ message: 'o parâmetro deve ser um número' });
    }
    res.send({ resultado });
});

export default app;