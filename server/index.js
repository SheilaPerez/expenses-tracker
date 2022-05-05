const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/test', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ name: 'test' }));
});

app.listen(PORT, () => {
    console.log(`Mock Server started at port: ${PORT}`);
});