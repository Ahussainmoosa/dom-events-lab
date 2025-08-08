/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');



/*----------------------------- Functions with Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.innerText;
        
        if (value === 'C') {
            display.innerText = '';
        } else if (value === '=') {
            try {
                const result = new Function('return ' + display.innerText)();// I did change the eval to new Function that will return the result of the expression 
                display.innerText = result;
            } catch {
                display.innerText = 'Error';
            }
        } else {
            display.innerText += value;
        }
    });
});

//did build the calculator in to part only by constants and functions that is have enet listeners
//the function used the eval built in function to calculate the expression in the display.
