
const express = require('express');


require('dotenv').config();

const app = express();

app.get('', (req, res) => {
    res.send('hello1')
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});