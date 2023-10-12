const counterValueRef = document.querySelector("#value");
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};

incrementBtnRef.addEventListener("click", increment);
decrementBtnRef.addEventListener("click", decrement);
