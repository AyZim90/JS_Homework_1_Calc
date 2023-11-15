const userInput =  document.querySelector("#user_input");
let expression = "";
const MAX_DIGITS = 10;

press = (num) => {
  expression += num;
  userInput.value = expression;
}

equal = () => {
  const result = eval(expression);
  userInput.value = result;
  expression = result.toString();
}
erase = () => {
  expression = "";
  userInput.value = expression;
}

sqrt = () => {
  expression = Math.sqrt(eval(expression));
  userInput.value = expression;
}
square = () => {
  expression = Math.pow(eval(expression), 2);
  userInput.value = expression;
}
back = () => {
  expression = expression.slice(0, -1);
  userInput.value = expression !== "" ? expression : "0";
}

