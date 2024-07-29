import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import connectDB from "./db/connect.js";

//routers
import jobRouter from "./routes/jobRouter.js";

// middlewares
import errorHandler from "./middleware/errorHandler.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});
app.use(errorHandler);

const port = process.env.PORT || 5100;

connectDB();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
