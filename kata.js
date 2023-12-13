function calculate(input) {
  const romanNumsArr = [
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
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XIX",
    "XX",
    "XXI",
    "XXII",
    "XXIII",
    "XXIV",
    "XXV",
    "XXVI",
    "XXVII",
    "XXVIII",
    "XXIX",
    "XXX",
    "XXXI",
    "XXXII",
    "XXXIII",
    "XXXIV",
    "XXXV",
    "XXXVI",
    "XXXVII",
    "XXXVIII",
    "XXXIX",
    "XL",
    "XLI",
    "XLII",
    "XLIII",
    "XLIV",
    "XLV",
    "XLVI",
    "XLVII",
    "XLVIII",
    "XLIX",
    "L",
    "LI",
    "LII",
    "LIII",
    "LIV",
    "LV",
    "LVI",
    "LVII",
    "LVIII",
    "LIX",
    "LX",
    "LXI",
    "LXII",
    "LXIII",
    "LXIV",
    "LXV",
    "LXVI",
    "LXVII",
    "LXVIII",
    "LXIX",
    "LXX",
    "LXXI",
    "LXXII",
    "LXXIII",
    "LXXIV",
    "LXXV",
    "LXXVI",
    "LXXVII",
    "LXXVIII",
    "LXXIX",
    "LXXX",
    "LXXXI",
    "LXXXII",
    "LXXXIII",
    "LXXXIV",
    "LXXXV",
    "LXXXVI",
    "LXXXVII",
    "LXXXVIII",
    "LXXXIX",
    "XC",
    "XCI",
    "XCII",
    "XCIII",
    "XCIV",
    "XCV",
    "XCVI",
    "XCVII",
    "XCVIII",
    "XCIX",
    "C"
  ];
  const arabicNumsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [num1, operator, num2] = input.split(" ");

  if (!romanNumsArr.includes(num1) && !arabicNumsArr.includes(+num1)) {
    throw new Error("Ошибка: Первое число не валидно");
  }
  if (!romanNumsArr.includes(num2) && !arabicNumsArr.includes(+num2)) {
    throw new Error("Ошибка: Второе число не валидно");
  }

  const isRomanNum = romanNumsArr.includes(num1) && romanNumsArr.includes(num2);
  const isArabicNum = arabicNumsArr.includes(+num1) && arabicNumsArr.includes(+num2);

  if (!(isRomanNum || isArabicNum)) {
    throw new Error("Ошибка: Числа должны быть одного типа");
  }

  let a, b;
  if (isArabicNum) {
    a = +num1;
    b = +num2;
  } else {
    a = romanNumsArr.indexOf(num1) + 1;
    b = romanNumsArr.indexOf(num2) + 1;
  }

  if ((a > 10 || a < 1 || b > 10 || b < 1)) {
    throw new Error("Ошибка: Числа должны быть в диапазоне от 1 до 10 включительно");
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
    if (result < 0) {
      throw new Error("Ошибка: Результат не может быть отрицательным");
    }
    if (result > 100) {
      throw new Error("Ошибка: Результат должен быть в пределах от 1 до 100 включительно");
    }
    let romanResult = romanNumsArr[result - 1];
    return romanResult;
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