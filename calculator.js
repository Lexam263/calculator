// The Great Beginnings of an Adequate Calculator.

//variables

let array1 = [], 
    string1 = '',
    num1 = '',
    array2 = [],
    string2 = '',
    num2 = '',
    operand = '', 
    total = '',
    container = document.querySelector('#container'),
    display = document.querySelector('#display'),
    equal = document.querySelector('#equal'),
    btnInts = document.querySelectorAll('btnInt'),
    btnOperands = document.querySelectorAll('btnOperand'),
    clear = document.querySelector('#clear');

//Functions

btnInts.forEach((btnInt) => {
    btnInt.addEventListener ('click', () => {
        if (operand === '') { 
            console.log("array1 " + btnInt.id); 
            return array1.push(btnInt.id); 
            } else {
        console.log("array2 " + btnInt.id);
        return array2.push(btnInt.id);
    }
    });
});

btnOperands.forEach((btnOperand) => {
    btnOperand.addEventListener ('click', () => {
        console.log(btnOperand.id);
        if (operand === ""){
            return string1 = array1.join(''), array2 = [],  operand = btnOperand.id;
        } 
        
    });
});

equal.addEventListener('click', () => {
    string2 = array2.join('');
    num1 = parseInt(string1);
    num2 = parseInt(string2);
    if (operand === 'plus') {
    total = (num1 + num2 + total);
    } else if (operand === 'minus') {
        total = (num1 - num2);
    } else if (operand === 'multiply') {
        total = (num1 * num2);
    } else if (operand === 'divide') {
        total = (num1 / num2);
    }
    console.log(num1);
    console.log(operand);
    console.log(num2);
    console.log('total ' + total);
    return array1.length = 0, 
    array1[0] = total,
    console.log("array1 " + array1),
    string1 = '',
    num1 = '',
    array2 = [],
    string2 = '',
    num2 = '',
    operand = '',
    total = ''; 
});

clear.addEventListener('click', () => {
    console.clear();
    return array1 = [], 
    string1 = '',
    num1 = '',
    array2 = [],
    string2 = '',
    num2 = '',
    operand = '', 
    total = '';
})


// Create a string of numbers
// Add a mathematical sign
//Create the next string of numbers
// Execute the mathematical function.