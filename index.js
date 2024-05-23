// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});
require('./src/routes/indexRoutes')(app)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
