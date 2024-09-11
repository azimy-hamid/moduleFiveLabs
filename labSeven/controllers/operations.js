import express from "express";
import Calculator from "../libraries/Calculator.js";

const router = express.Router();
const calc = new Calculator();

router.get("/add", (req, res) => {
  try {
    const { num1, num2 } = req.query;
    let result = calc.add(num1, num2);
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
