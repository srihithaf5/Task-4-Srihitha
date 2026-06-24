const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const interns = [
  {
    id: 1,
    name: "Srihitha",
    role: "Frontend Developer"
  },
  {
    id: 2,
    name: "Rahul",
    role: "Backend Developer"
  },
  {
    id: 3,
    name: "Priya",
    role: "UI Designer"
  }
];

app.get("/api/interns", (req, res) => {
  res.json(interns);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});