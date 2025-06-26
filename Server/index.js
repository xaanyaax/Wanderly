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

//Routes:
import postRoutes from "./src/routes/posts.js";
app.use("/posts", postRoutes);  //every route starts with posts  local::host//8080/posts

import userRoutes from "./src/routes/userRoutes.js";
app.use("/api/users", userRoutes);

const startServer = async () => {
    try {
      await connectDB(process.env.MONGODB_URL); // Don't forget the await
      app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();