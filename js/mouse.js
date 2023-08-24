// MOUSE EVENTS

// VARIABLES
let btn = document.getElementById('submit-btn');

let inputbox = document.getElementById('first-name');



// FUNCTIONS
function click() {
    alert('Registration Complete')
    console.log(click);
    // Keeps track of all click evets on the submit button.
}

function mouseover() {
    inputbox.style.backgroundColor = 'white'
    inputbox.style.Color = 'black'
    // doubleclick to show text
    ;
 
}
function mouseleave() {
    inputbox.style.backgroundColor = 'black'
    
}


// CALL FUNCTIONS
btn.addEventListener('click', click)
;

inputbox.addEventListener('mouseover', mouseover)


inputbox.addEventListener('mouseleave', mouseleave)
;





