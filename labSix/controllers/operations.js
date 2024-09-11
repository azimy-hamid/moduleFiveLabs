import express from "express";
const router = express.Router();

router.get("/add", (req, res) => {
  try {
    const { num1, num2 } = req.query;
    let result = parseInt(num1) + parseInt(num2);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Server error");
  }
});

router.get("/sub", (req, res) => {
  try {
    const { num1, num2 } = req.query;
    let result = parseInt(num1) - parseInt(num2);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Server error");
  }
});

router.get("/multiply", (req, res) => {
  try {
    const { num1, num2 } = req.query;
    let result = parseInt(num1) * parseInt(num2);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Server error");
  }
});

router.get("/div", (req, res) => {
  try {
    const { num1, num2 } = req.query;
    let result = parseInt(num1) / parseInt(num2);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Server error");
  }
});

export default router;
