const express = require('express');
const cors = require('cors');

const app = express();

// 🛡️ Enable CORS Middleware
app.use(cors());

// 📝 Parse JSON Middleware
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/contact', (req, res) => {
    console.log('Contact Form Data:', req.body);
    res.json({ message: "Form submitted successfully!", data: req.body });
});

// 🏃 Start Server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
