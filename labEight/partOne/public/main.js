// In this exercise you will need to create a calculator.
// Requirements:
// The application should take 2 numbers, and support 4 operations (+, / , x , -) .
// You need to press the equals button to get the result displayed, and reset to clear it.
// NOTE: Do not use the eval() function - it is a security risk and bypasses custom logic.

// 1) List the requirements, in this case you have a total of 4 requirements
// a) Get data (two numbers)
// b) Choose an operator
// c) Get the result
// d) Reset the screen

// 2) Sketch the application, so that you are sure about the correct functioning.
// 3) You may use a flow diagram to help.
// 4) Use a tool of your choice, like Figma, to design the
// application.

// 5) Use the prototype ability and test it.
// Develop the application. Start from GIT - it is good practice to do things in a standard way.
// - Create a repository
// - Clone the repository locally
// - Create a branch for each feature

let result = document.getElementById("result");
let answer;
let amount;

let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}

async function calculate() {
  try {
    const encodedDistplayValue = encodeURIComponent(displayValue);
    const response = await fetch(
      `http://localhost:3000/api/evaluate?expression=${encodedDistplayValue}`
    );
    const resultData = await response.json();
    const result = resultData.result;
    console.log(resultData);
    displayValue = result.toString();
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
    displayValue = "";
  }
}
