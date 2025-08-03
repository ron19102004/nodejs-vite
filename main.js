import express from "express";
import cors from "cors";
import authRouter from "./src/routes/auth.route.js";
const app = express();

app.use(
  cors({
    credentials: true,
    methods: ["DELETE", "POST", "PUT", "GET", "PATCH"],
    origin: ["http://localhost:5173", "http://172.0.0.1:5173"],
  })
);
app.use(express.json());
app.use("/", authRouter);

export const viteNodeApp = app;
