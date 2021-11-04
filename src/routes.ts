import express from "express";
const app = express();

// Rota SOMA
app.get('/soma/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    res.send({ resposta: num1 + num2 });
});

export default app;