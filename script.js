const buttons = document.querySelector(".calculator-buttons");
const readout = document.querySelector(".calculator-display");

let firNum = "";
let operand = "";
let secNum = "";

buttons.addEventListener("click", (selectedButton) => {
    if (selectedButton.target.tagName === "BUTTON") {
        
        console.log(selectedButton.target);
    }
});