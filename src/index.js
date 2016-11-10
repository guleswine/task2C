import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2C', (req, res) => {
  const name = canonize(req.query.username);
  console.log(`send: ${name}`);
  res.send(name);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

function canonize(url) {
  console.log(`get: ${url}`);
  if (url=== null) return `Invalid username`;
  url=url.trim();
  const re = new RegExp('@?(https?:)?(\/\/)?([^\/]*\/)?@?([_a-zA-Z0-9.]*)', 'i');
  return `@${url.match(re)[4]}`;
}
