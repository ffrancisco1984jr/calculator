const buttons = document.querySelector(".calculator-buttons");
const readout = document.querySelector(".calculator-display");

buttons.addEventListener("click", (selectedButton) => {
    if (selectedButton.target.tagName === "BUTTON") {
        const buttonChar = selectedButton.target.textContent;
        readout.textContent = buttonChar;
    }
});