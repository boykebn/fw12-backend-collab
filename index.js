const express = require("express");
const cors = require("cors");

require("dotenv").config({
  path: ".env",
});

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "berhasil",
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
