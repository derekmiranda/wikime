// Front end server
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(express.static(__dirname +'./../')); //serves the index.html

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));