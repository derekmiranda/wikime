const express = require('express');

const PORT = 3000;
const app = express();

app.use((req, res) => {
  res.send('Hello again!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));