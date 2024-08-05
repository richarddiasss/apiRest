import express from 'express';
import configDotenv from './src/config/dotenv';
import router from './src/routes/routes';
// import cors from 'cors';
// import routes from './src/routes/routes';

configDotenv();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
//app.use(routes);
app.use(router);

app.get('/', (req, res) => {
  res.send('Testandooooo!!')
});

app.listen(port, () => {
console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
    