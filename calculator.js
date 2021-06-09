// The Great Beginnings of an Adequate Calculator.

//variables

let array1 = [], 
    string1 = '',
    num1 = '',
    array2 = [],
    string2 = '',
    num2 = '',
    operand = '', 
    total = 0,
    container = document.querySelector('#container'),
    display = document.querySelector('#display'),
    equal = document.querySelector('#equal'),
    btnInts = document.querySelectorAll('btnInt'),
    btnOperands = document.querySelectorAll('btnOperand'),
    element = document.getElementById('numDisplay'),
    decimal1Pushed = '',
    decimal2Pushed = '',
    equalPushed = '',
    btnIntId = '',
    symbol = '',
    clear = document.querySelector('#clear');

//Functions

    //Button function for the numbers and decimal point.
btnInts.forEach((btnInt) => {
    btnInt.addEventListener ('click', () => {
    btnIntId = btnInt.id;
    if (equalPushed === 'true') {
        return array1 = [],
        equalPushed = 'true';
            } else {
        //Inputs the first number of the equation.
        if (operand === '' || string1 === '') {

            //Checks if there is already a decimal point.
            if (btnIntId === '.' && decimal1Pushed === 'true') {
 
            return string1, decimal1Pushed = 'true';
            } else {
            
            array1.push(btnInt.id); 
            string1 = array1.join('');
            
        //Displays the first number.
        if(typeof(element) != 'undefined' && element != null) {
                display.removeChild(element);
                element = document.createElement('numDisplay');
                element.textContent = string1; 
                display.appendChild(element);
            } else {
                element = document.createElement('numDisplay');
                element.textContent = string1; 
                display.appendChild(element);
            }
            //Prevents mutliple decimal points.
            if (btnIntId === '.') {
                return string1, decimal1Pushed = 'true';
            } else {
            return string1;
            }} } else {

            //Checks if there is already a decimal point.
            if (btnIntId === '.' && decimal2Pushed === 'true') {
            return string1, decimal2Pushed = 'true';
            } else if (operand !='') {
        
        //Inputs the second number of the equation.        
        array2.push(btnInt.id);
        string2 = array2.join('');

        //Displays the second number
        if(typeof(element) != 'undefined' && element != null) {
            display.removeChild(element);
            element = document.createElement('numDisplay');
            element.textContent = string1 + ' ' + symbol + ' ' + string2; 
            display.appendChild(element);
        } else {
            element = document.createElement('numDisplay');
            element.textContent = string1 + ' ' + symbol + ' ' + string2;  
            display.appendChild(element);
        }
        if (btnIntId === '.') {
            return string2, decimal2Pushed = 'true';
        } else {
        return string2; }
    } }}
});
});

//Button function for the operand buttons. 
btnOperands.forEach((btnOperand) => {
    btnOperand.addEventListener ('click', () => {
            operand = btnOperand.id;
            if (operand === 'plus') {
                symbol = '+';
            } else if (operand === 'minus') {
                symbol = '-';
            } else if (operand === 'multiply') {
                symbol = '*';
            } else if (operand === 'divide') {
                symbol = '/';
            } else if (operand === 'exponent') { symbol = '^'} 
            else {symbol = ''}

            if(typeof(element) != 'undefined' && element != null) {
                display.removeChild(element);
                element = document.createElement('numDisplay');
                element.textContent = string1 + ' ' + symbol; 
                display.appendChild(element);
            } else {
                element = document.createElement('numDisplay');
                element.textContent = string1 + ' ' + symbol; 
                display.appendChild(element);
            }
            return array2 = [], operand, equalPushed = '';  
        });
    });

    //Executes the equal key and the calculation.
equal.addEventListener('click', () => {

    //Checks fot make sure there is a valid equation to calculate.
    if (string2 != '' && operand != '')  {
    num1 = parseFloat(string1);
    num2 = parseFloat(string2);
    if (operand === 'plus') {
    total = (num1 + num2);

    //Performs the calculation based on the operand used.
    } else if (operand === 'minus') {
    total = (num1 - num2);
    } else if (operand === 'multiply') {
        total = (num1 * num2);
    } else if (operand === 'divide') {
        total = (num1 / num2);
    } else if (operand === 'exponent') {
        total = (num1 ** num2);
    } 
    //Displays the final product.
    if(typeof(element) != 'undefined' && element != null) {
        display.removeChild(element);
        element = document.createElement('numDisplay');
        element.textContent = string1 + ' ' + symbol + ' ' + string2 + ' ' + "= " + total;
        display.appendChild(element);
    } else {
        element = document.createElement('numDisplay');
        element.textContent = string1 + ' ' + symbol + ' ' + string2 + ' ' + "= " + total;
        display.appendChild(element);
    } 

    //Resets everything except string1 inherits the total.
    return  string1 = total,
    num1 = '',
    array2 = [],
    string2 = '',
    num2 = '',
    array1 = [],
    operand = '',
    decimal1Pushed = '',
    decimal2Pushed = '',
    equalPushed = 'true',
    btnIntId = '',
    symbol = '',
    total = 0;
}
});

//Clears the display and all elements.
clear.addEventListener('click', () => 
    {
    if(typeof(element) != 'undefined' && element != null) {
    display.removeChild(element);}
    return string1 = '',
    num1 = '',
    array1 = [],
    array2 = [],
    string2 = '',
    num2 = '',
    operand = '', 
    equalPushed = '',
    decimal1Pushed = '',
    decimal2Pushed = '',
    btnIntId = '',
    symbol = '',
    element = document.getElementById('numDisplay'),
    total = 0;
    
})


