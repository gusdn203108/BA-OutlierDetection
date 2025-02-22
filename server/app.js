const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "./src/public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/public/index.html"));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
