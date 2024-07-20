// Reach Button
const oButton = document.querySelector("button");

// Function
const onClickButton = oEvent => console.log(oEvent);

// Add Event to Button - I
oButton.addEventListener("click", onClickButton);

// Add Event to Button - II
oButton.onclick = oEvent => { };

// Remove Event from Button
oButton.removeEventListener("click", onClickButton);

// Add Anonymous Function to Button
oButton.addEventListener("click", oEvent => console.log(oEvent));