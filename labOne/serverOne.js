import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("This is Server One");
});

app.listen(PORT, () => {
  console.log(`Server One running on port: ${PORT}`);
});
