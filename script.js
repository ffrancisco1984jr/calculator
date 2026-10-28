const selection = document.querySelector(".calculator-buttons");

let firNum = "";
let operand = "";
let secNum = "";

selection.addEventListener("click", (selectedButton) => {
    if (selectedButton.target.tagName === "BUTTON") {
        
        console.log(selectedButton.target);
    }
});