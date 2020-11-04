const express = require('express');
const app = express();
const port = 5000;


app.use('/', (req, res) => {
    res.send('hello, welcome to aws world!');
})
app.listen(port, () => {
    console.log(`server on ${port}`);
})
