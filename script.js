let display = document.getElementById('display');

let openBrackets = 0;
let closeBrackets = 0;

function appendToDisplay(value) {
  if (value === '(') {
    openBrackets++;
  } else if (value === ')' && closeBrackets < openBrackets) {
    closeBrackets++;
  }

  if (value === ')' && closeBrackets === openBrackets) {
    display.value += ')';
    closeBrackets--;
  } else if (value !== ')' || closeBrackets < openBrackets) {
    display.value += value;
  }
}

function appendToBrackets() {
  let expression = display.value;
  let openParentheses = (expression.match(/\(/g) || []).length;
  let closeParentheses = (expression.match(/\)/g) || []).length;

  // If the number of open parentheses is less than the number of closing parentheses,
  // append an opening parenthesis; otherwise, append a closing parenthesis
  if (openParentheses < closeParentheses) {
    appendToDisplay('(');
  } else {
    appendToDisplay(')');
  }
}

function clearDisplay() {
  if (display.value.slice(-1) === '(') {
    openBrackets--;
  } else if (display.value.slice(-1) === ')') {
    closeBrackets--;
  }
  display.value = display.value.slice(0, -1);
}

function allClear() {
  display.value = '';
  openBrackets = 0;
  closeBrackets = 0;
}

function calculate() {
  try {
    let expression = display.value;
    // Find all occurrences of % and convert them to their corresponding percentage values
    expression = expression.replace(/([0-9.]+)%/g, function(match, p1) {
      return parseFloat(p1) / 100;
    });
    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  for (var i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}
