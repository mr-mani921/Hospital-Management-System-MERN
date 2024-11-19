import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import fileUpload from "express-fileupload";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import { dbConnection } from "./config/dbConnection.js";
import messageRouter from "./routers/messageRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();

config({ path: "./config/config.env" });
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.BACKEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFIles: true, tempFileDir: "/temp/" }));

//Routers

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user",userRouter)

dbConnection();
app.use(errorMiddleware);
export default app;
