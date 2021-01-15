// Reach Button
const button = document.querySelector("button");

// Function
const onClickButton = event => {
    console.log(event);
};

// Add Event to Button
button.addEventListener("click", onClickButton);

// Remove Event From Button
button.removeEventListener("click", onClickButton);

// Add Anonymous Function to Button
button.addEventListener("click", event => {
    console.log(event);
});