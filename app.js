const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'page1.html'));
});


app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'page2.html'));
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
