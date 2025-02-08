const express = require('express');
const { resolve } = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3010;
const isAdmin = process.env.IS_ADMIN === 'true';

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/data', (req, res) => {
    if (isAdmin) {
        res.json({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
    } else {
        res.json({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
