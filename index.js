const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const userRouter = require("./router/v1/user.router");

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.send("server error");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
