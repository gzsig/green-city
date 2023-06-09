const express = require("express");
require("dotenv").config();

const { PORT } = process.env;

const app = express();
const router = require("./router");

app.use("/api", router); // add router to the '/api' path

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
