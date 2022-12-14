const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const allSubject = require("./subjects.json");
app.get("/", (req, res) => {
  res.send(JSON.stringify(allSubject));
});
app.get("/:id", (req, res) => {
  const subjectId = req.params.id;
  const subject = allSubject.find((sub) => subjectId === sub.id);
  res.send(subject);
});
app.get("/checkout/:id", (req, res) => {
  const SubjectId = req.params.id;
  const Subject = allSubject.find((Sub) => SubjectId === Sub.id);
  res.send(Subject);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
