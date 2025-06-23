import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./src/database/connect.js";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())


const startServer = async () => {
    try {
      await connectDB(process.env.MONGODB_URL); // Don't forget the await
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();