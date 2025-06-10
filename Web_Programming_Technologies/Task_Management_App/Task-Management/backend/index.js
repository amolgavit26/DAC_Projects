import express from "express";
import { createDBConnection } from "./src/config/config.js";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js"

const PORT = 6200;

const app = express();

app.use(cors());
app.use(express.json());

const conn = createDBConnection();

app.use('/', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is live on PORT = ${PORT}`)
});







