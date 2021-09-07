import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import apiRoutes from "./api";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(cors());

app.use("/api", apiRoutes);

export default app;