import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import UserRouter from "./Routes/Users.js";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("welcome to home Page");
});

app.use("/users", UserRouter);

app.listen(process.env.PORT, () => {
  console.log(`app is runnig at port ${process.env.PORT}`);
});
