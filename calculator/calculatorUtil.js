let arrButtons = [];

function display() {
  document.getElementById("result").innerText = arrButtons.join("");
}
function clearAll() {
  arrButtons.length = 0;
  console.log("This button works");
  display();
}
function seven() {
  arrButtons.push(7);
  console.log("This button works");
  display();
}
function eight() {
  arrButtons.push(8);
  console.log("This button works");
  display();
}
function nine() {
  arrButtons.push(9);
  console.log("This button works");
  display();
}
function four() {
  arrButtons.push(4);
  console.log("This button works");
  display();
}
function five() {
  arrButtons.push(5);
  console.log("This button works");
  display();
}
function six() {
  arrButtons.push(6);
  console.log("This button works");
  display();
}
function one() {
  arrButtons.push(1);
  console.log("This button works");
  display();
}
function two() {
  arrButtons.push(2);
  console.log("This button works");
  display();
}
function three() {
  arrButtons.push(3);
  console.log("This button works");
  display();
}
function zero() {
  arrButtons.push(0);
  console.log("This button works");
  display();
}
function divide() {
  arrButtons.push("/");
  console.log("This button works");
  display();
}
function multiply() {
  arrButtons.push("*");
  console.log("This button works");
  display();
}
function subtract() {
  arrButtons.push("-");
  console.log("This button works");
  display();
}
function addition() {
  arrButtons.push("+");
  console.log("This button works");
  display();
}

function equals(num1, operator, num2) {
  // locate and identify where the operator is
  // all the numbers before it become num 1
  // all the numbers after it become num 2

  operatorIndex = arrButtons.findIndex(
    (buttons) => typeof buttons === "string"
  );
  operator = arrButtons[operatorIndex];
  num1 = parseFloat(arrButtons.slice(0, operatorIndex).join(""));
  num2 = parseFloat(arrButtons.slice(operatorIndex + 1).join(""));
  console.log("num1 " + num1, "operator " + operator, "num2: " + num2);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
    default:
      result = arrButtons.join("");
  }
  arrButtons = [result];

  display();
}
