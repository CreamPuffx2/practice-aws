const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello AWS");
});

app.listen(5001, () => {
  console.log(`server on 5001`);
});
