import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app: Express = express();
const port = process.env.PORT || "";
const mongoURL: string = process.env.MONGO_URL || "";

app.use(express.json());
app.use(cors());

mongoose
  .connect(mongoURL)
  .then(() => console.log("CONNECT TO MONGODB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
