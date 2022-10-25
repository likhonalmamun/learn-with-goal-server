const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const allSubject = require("./subjects.json");
app.get("/", (req, res) => {
  res.send(JSON.stringify(allSubject));
});
app.get("/data", (req, res) => {
  res.json("this is the data sent from the server");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log(allSubject);
