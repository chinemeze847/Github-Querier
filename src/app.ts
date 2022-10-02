import express, { Request, Response } from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use(express.json())
app.use('/github', routes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});

export default app;