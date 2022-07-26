
// program for a simple calculator
const prompt = require('prompt-sync')();
// take the operand input
const number0 = parseInt(prompt('how many walls do you have?'));
const number1 = parseInt(prompt('What is the Height of your wall in metres?: '));
const number2 = parseInt(prompt('what is the width of your wall in metres?'));



// display the result
const total = number1 * number2 * number0
console.log(` So, you will need ${total} metres covered`);

const sum = total / 6.5


console.log(`This means you will need ${sum} litres of paint` )

// take the operator input


// take the operand input
const windowcount = parseInt(prompt('How many windows do you have?:'));
const windowlength = parseInt(prompt('what is the lenght of your window in metres?:'))
const windowheight = parseInt(prompt('what is the height of your window in metres?:'))

const windowtotal = windowlength * windowheight * windowcount
const subamount = windowtotal / 6.5
const wallafterwindow = sum - subamount

console.log(`Altogether, after subtracting any window space you have, you will now need ${wallafterwindow} litres of paint`);


const doorcount = parseInt(prompt('So, how many doors do you have?'));
const doorheight = parseInt(prompt('So, what is the height of your doors'));
const doorwidth = parseInt(prompt('what is the width of your doors?'))

const totaldoor = doorheight * doorwidth * doorcount
doorsum = totaldoor / 6.5
wallafterdoor = wallafterwindow - doorsum 

console.log(`After subracting any doors and windows, you will now need ${wallafterdoor} litres of paint`);

const others = parseInt(prompt('do You have additional areas you want to consider?'));
const otherscalc =
