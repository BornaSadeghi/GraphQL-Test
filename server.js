const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('i like graph queue ell')
});

app.listen(8080, () => console.log('Running locally on port 8080'))
