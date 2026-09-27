const selection = document.querySelector(".calculator-buttons");

selection.addEventListener("click", (selectedButton) => {
    if (selectedButton.target.tagName === "BUTTON") {
        console.log(selectedButton.target);
    }
});