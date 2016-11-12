import express from 'express';
import cors from 'cors';
import canonise from './canonise';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/2a', (req, res) => {
  const sum = (+req.query.a ||0) + (+req.query.b ||0);
  res.send(sum.toString());
});

app.get('/2c', (req, res) => {
  const username = canonise(req.query.username);
  res.json (username)
})





app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
