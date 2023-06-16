import express, { Request, Response } from 'express';
import axios from 'axios';
import  {availability}  from './reservation.controller';
const app = express();
const port = 3000;
const router = express.Router();

const endpoint = '/availability';
router.get(endpoint + "/:datetime", availability);

app.use(router);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});



app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});