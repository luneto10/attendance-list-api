import express from "express";
import helmet from "helmet";
import cors from "cors";
import morganMiddleware from "./log/morganMiddleware";
import * as middlewares from "./middlewares";
import v1Router from "./api/v1/routes/index";
require("dotenv").config();

import { setupSwaggerDocs } from "./config/swagger.config";

const app = express();

app.use(morganMiddleware);
app.use(helmet());
app.use(cors());
app.use(express.json());

// Setup Swagger docs (access via http://localhost:3000/api-docs)
setupSwaggerDocs(app);

app.use("/api/v1", v1Router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
