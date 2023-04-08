let counterValue = 0;

const increaseBtn = document.querySelector('[data-action="increment"]');
const decreaseBtn = document.querySelector('[data-action="decrement"]');
let value = document.getElementById("value");

const increase = () => {
  counterValue += 1;
  value.innerHTML = counterValue;
  console.log(counterValue);
};
const decrease = () => {
  counterValue -= 1;
  value.innerHTML = counterValue;
  console.log(counterValue);
};

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
