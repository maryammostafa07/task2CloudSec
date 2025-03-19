const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the CORS-enabled Express server!" });
});

app.post('/data', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ status: 'Success', received: req.body });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});