const app = require('./src/routes');
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});