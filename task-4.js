const span = document.querySelector("#value");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
console.log(incrementBtn);
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  span.textContent = counterValue;
  return span;
};
const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
  return span;
};
span.textContent = counterValue;
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
