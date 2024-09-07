import express from "express";

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("This is Server Three");
});

app.listen(PORT, () => {
  console.log(`Server Three running on port: ${PORT}`);
});
