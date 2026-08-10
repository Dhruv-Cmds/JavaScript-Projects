import express from "express"

const hostname = '127.0.0.1'
const port = 3000;

const app = express();

// get request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// about
app.get('/about', (req, res) => {
  res.send('Hello dhhdrh!');
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});