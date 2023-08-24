// POINTER EVENTS

// VARIABLES
let lname = document.getElementById('last-name');
// for the lastname input box


// FUNCTIONS
function keydown() {
    console.log('you pressed a key!')
    // hold key down to see functionality
}
function keyup() {
    console.log('you left the key!')
}


// CALL FUNCTIONS
lname.addEventListener('keydown', keydown)
;
lname.addEventListener('keyup', keyup)
;