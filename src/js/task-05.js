const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInputChange);

function handleInputChange(event) {
    if (event.target.value === "") {
        output.textContent = "незнакомец";
    } else {
        output.textContent = event.currentTarget.value;
    }
    
};