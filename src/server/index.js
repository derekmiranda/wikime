// Front end server
const express = require('express');
const dataRouter = require('./routers/dataRouter');

const PORT = 3000;
const app = express();

app.use('/', dataRouter);

app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname +'/build'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));