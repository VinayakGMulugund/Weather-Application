
const express = require('express');

require('dotenv').config();

const app = express();

app.get('', async (req, res) => {
    try {
        const headers = new Headers();
        headers.set('key', process.env.API_KEY);
        const init = {headers: headers}
        const response = await (await fetch(`${process.env.BASE_URL}/current.json?q=goa`, init)).json();
        res.json(response)
    } catch (e) {
        console.log(e)
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});