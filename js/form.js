// FORM EVENTS

// VARIABLES
let userInput = document.getElementById('first-name');


function change() {
    console.log(userInput.value);
    // Keeps track of names typed in the input box
}

userInput.addEventListener('submit', submit);
   