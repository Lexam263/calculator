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
    equalPushed = '',
    decimal1Pushed = '',
    decimal2Pushed = '',
    btnIntId = '',
    symbol = '',
    clear = document.querySelector('#clear');
//Functions



//Button function for the numbers and decimal point.
btnInts.forEach((btnInt) => {
    btnInt.addEventListener ('click', () => {
    btnIntId = btnInt.id;
        
            //Checks if there is a already a total and uses it for the first number in the equation.
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
            
            if (btnIntId === '.') {
                return string1, decimal1Pushed = 'true';
            } else {
            return string1;
            }} } else {

            //Checks if there is already a decimal point.
            if (btnIntId === '.' && decimal2Pushed === 'true') {
                console.log("decimal 2 is working");
            return string1, decimal2Pushed = 'true';
            } else {
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

    //Button function for the equal button.
equal.addEventListener('click', () => {
    if (equalPushed === 'true') {
        console.log("String1 " + string1);
        return string1 = total,
   num1 = '',
    array2 = [],
    string2 = '',
    num2 = '',
    //array1 = [],
    decimal1Pushed = '',
    decimal2Pushed = '',
    btnIntId = '',
    symbol = '', 
    equalPushed = 'true';
    } else if (string2 === '') {
        return string2 = '';
    } else {
    console.log('Second equal option');
    num1 = parseFloat(string1);
    num2 = parseFloat(string2);
    
    if (operand === 'plus') {
    total = (num1 + num2);
    } else if (operand === 'minus') {
    total = (num1 - num2);
    } else if (operand === 'multiply') {
        total = (num1 * num2);
    } else if (operand === 'divide') {
        total = (num1 / num2);
    } else if (operand === 'exponent') {
        total = (num1 ** num2);
    } 
    if(typeof(element) != 'undefined' && element != null) {
        display.removeChild(element);
        element = document.createElement('numDisplay');
        element.textContent = string1 + ' ' + symbol + ' ' + string2 + ' ' + '=' + ' ' + total; 
        display.appendChild(element);
    } else {
        element = document.createElement('numDisplay');
        element.textContent = string1 + ' ' + symbol + ' ' + string2 + ' ' + '=' + ' ' + total;
        display.appendChild(element);
    } 
    return  string1 = total,
    num1 = '',
    array2 = [],
    string2 = '',
    num2 = '',
    array1 = [],
    equalPushed = 'true',
    decimal1Pushed = '',
    decimal2Pushed = '',
    btnIntId = '',
    symbol = '',
    total = '';
}
});

clear.addEventListener('click', () => 
    {
    console.clear();
    if(typeof(element) != 'undefined' && element != null) {
    display.removeChild(element);}
    return string1 = '',
    num1 = '',
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


// Notes
/***********************************************************
3 * 6 = 18
3 / 18 = 6





***********************************************************/