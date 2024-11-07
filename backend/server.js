// server.js or app.js in your Express setup
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000; // or your desired port

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { name, email } = req.body;
    // Here you can add logic to handle the registration, such as saving user data to a database
    console.log(`Received registration: ${name}, ${email}`);
    res.json({ message: 'Registration successful' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});