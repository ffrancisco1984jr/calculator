const buttonsContainer = document.querySelector(".calculator-buttons");
const readout = document.querySelector(".calculator-display");

let firNum = "";
let operator = "";
let secNum = "";

buttonsContainer.addEventListener("click", (selectedButton) => {
    if (selectedButton.target.tagName === "BUTTON") {
        console.log(selectedButton.target);
        const buttonChar = selectedButton.target.textContent;
        readout.textContent = readout.textContent + buttonChar;
    }
});