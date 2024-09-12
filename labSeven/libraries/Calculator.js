import Log from "./Log.js";

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 1000);
    this.logger = new Log();
  }

  #log(value) {
    // console.log(`[Calculator: ${this.id}:${value}]`);
    this.logger.logCall(this.id, value);
  }

  add(num1, num2) {
    const value = parseInt(num1) + parseInt(num2);
    this.#log(value);
    return value;
  }

  sub(num1, num2) {
    const value = parseInt(num1) - parseInt(num2);
    this.#log(value);
    return value;
  }
  multiply(num1, num2) {
    const value = parseInt(num1) * parseInt(num2);
    this.#log(value);
    return value;
  }
  div(num1, num2) {
    const value = parseInt(num1) / parseInt(num2);
    this.#log(value);
    return value;
  }
}

export default Calculator;
