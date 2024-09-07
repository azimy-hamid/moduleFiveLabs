import express from "express";

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("This is Server Two");
});

app.listen(PORT, () => {
  console.log(`Server Two running on port: ${PORT}`);
});
