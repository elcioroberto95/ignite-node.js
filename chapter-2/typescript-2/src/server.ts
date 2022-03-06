import express from 'express';
import { router } from './routes';
import { Multer } from 'multer'

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => {
    console.log("server is running")
})