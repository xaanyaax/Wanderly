import express from "express";
import cors from "cors";
import connectDB from "./src/database/connect.js";
import * as dotenv from "dotenv";
import errorMiddleware from "./src/middlewares/errorMiddleware.js";


dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}

app.use(cors(corsOptions))

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));


//Routes:
import postRoutes from "./src/routes/posts.js";
app.use("/posts", postRoutes);  //every route starts with posts  local::host//8080/posts

import userRoutes from "./src/routes/userRoutes.js";
app.use("/api/users", userRoutes);

app.use(errorMiddleware);

const startServer = async () => {
    try {
      await connectDB(process.env.MONGODB_URL); // Don't forget the await
      app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();