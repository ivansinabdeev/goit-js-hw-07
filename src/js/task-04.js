let counterValue = 0;
const valueEl = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener("click", () => {
    valueEl.textContent = counterValue;
    console.log(counterValue -= 1);
});

increment.addEventListener("click", () => {
    valueEl.textContent = counterValue;
    console.log(counterValue += 1);
});


