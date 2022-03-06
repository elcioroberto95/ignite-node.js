import express from 'express';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
const swaggerFile = require("./swagger.json");
const app = express();

app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3333, () => {
    console.log("server is running")
})