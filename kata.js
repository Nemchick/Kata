function calculate(input) {
  const arabicNums = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  const romanNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [num1, operator, num2] = input.split(" ");

  if (!arabicNums.includes(num1) && !romanNums.includes(+num1)) {
    throw new Error("Ошибка: Первое число не валидно");
  }
  if (!arabicNums.includes(num2) && !romanNums.includes(+num2)) {
    throw new Error("Ошибка: Второе число не валидно");
  }

  const isRomanNum = romanNums.includes(+num1) && romanNums.includes(+num2);
  const isArabicNum = arabicNums.includes(num1) && arabicNums.includes(num2);

  if (!(isRomanNum || isArabicNum)) {
    throw new Error("Ошибка: Числа должны быть одного типа");
  }

  let a, b;
  if (isArabicNum) {
    a = arabicNums.indexOf(num1) + 1;
    b = arabicNums.indexOf(num2) + 1;
  } else {
    a = +num1;
    b = +num2;
  }

  if (a > 10 || a < 1 || b > 10 || b < 1) {
    throw new Error(
      "Ошибка: Числа должны быть в диапазоне от 1 до 10 включительно"
    );
  }

  let result = 0;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      if (a < b) {
        throw new Error("Ошибка: Результат не может быть отрицательным");
      }
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = Math.floor(a / b);
      break;
    default:
      throw new Error("Ошибка: Неверная операция");
  }

  if (isArabicNum) {
    return result.toString();
  } else {
    let arabicResult = result.toString();
    return arabicResult;
  }
}

function performCalculation() {
  const input = document.getElementById("input").value;
  const errorDisplay = document.getElementById("errorDisplay");
  const answer = document.getElementById("answer");

  errorDisplay.innerText = "";
  answer.innerText = "";

  try {
    const result = calculate(input);
    answer.innerText = result;
  } catch (error) {
    errorDisplay.innerText = error.message;
  }
}
