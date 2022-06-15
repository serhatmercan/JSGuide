// Reach Button
const oButton = document.querySelector("button");

// Function
const onClickButton = oEvent => {
    console.log(oEvent);
};

// Add Event to Button
oButton.addEventListener("click", onClickButton);

// Remove Event From Button
oButton.removeEventListener("click", onClickButton);

// Add Anonymous Function to Button
oButton.addEventListener("click", oEvent => {
    console.log(oEvent);
});