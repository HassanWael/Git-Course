function calculate(firstNum, secondNum = "", operation = "") {
  operation == ""
    ? console.log(firstNum + secondNum)
    : operation == "add"
    ? console.log(firstNum + secondNum)
    : operation == "subtract"
    ? console.log(firstNum - secondNum)
    : operation == "multiply"
    ? console.log(firstNum * secondNum)
    : "";
  secondNum == "" ? console.log("Second Number Not Found") : null;
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
// ================================
// ================================
// ================================

let haitham = [5.8, 3, 7, 8];
console.log(haitham[0].toFixed());
haitham[0] = parseInt(haitham[0]);
console.log(parseInt(haitham[0]));

haitham.splice(2, 1);

console.log(haitham);

function multiply(...num) {
  let jawab = 1;
  for (let i = 0; i <= num.length; i++) {
    typeof num[i] === "number"
      ? (num[i] = parseInt(num[i])) && (jawab = jawab * num[i])
      : num.splice(i, 1);
  }
  console.log(jawab);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000'
