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
    element = document.getElementById("numDisplay"),
    clear = document.querySelector('#clear');

//Functions

btnInts.forEach((btnInt) => {
    btnInt.addEventListener ('click', (num1) => {
        if (operand === '') { 
            array1.push(btnInt.id); 
            string1 = array1.join('');
    
        if(typeof(element) != 'undefined' && element != null) {
                display.removeChild(element);
                element = document.createElement("numDisplay");
                element.textContent = string1; 
                display.appendChild(element);
            } else {
                element = document.createElement("numDisplay");
                element.textContent = string1; 
                display.appendChild(element);
            }
            return string1;

            } else {
        array2.push(btnInt.id);
        string2 = array2.join('');
        if(typeof(element) != 'undefined' && element != null) {
            display.removeChild(element);
            element = document.createElement("numDisplay");
            element.textContent = string2; 
            display.appendChild(element);
        } else {
            element = document.createElement("numDisplay");
            element.textContent = string2; 
            display.appendChild(element);
        }
        return string2;
    }
    
    });
});

btnOperands.forEach((btnOperand) => {
    btnOperand.addEventListener ('click', () => {
            operand = btnOperand.id;
            return array2 = [], operand;  
        });
    });

equal.addEventListener('click', () => {
    if (string1 != '') {
        num1 = parseInt(string1);
        if (operand === 'plus') {
            total = (num1 + num1);
            } else if (operand === 'minus') {
                total = (num1 - num1);
            } else if (operand === 'multiply') {
                total = (num1 * num1);
            } else if (operand === 'divide') {
                total = (num1 / num1);
            }
            if(typeof(element) != 'undefined' && element != null) {
                display.removeChild(element);
                element = document.createElement("numDisplay");
                element.textContent = total; 
                display.appendChild(element);
            } else {
                element = document.createElement("numDisplay");
                element.textContent = total; 
                display.appendChild(element);
            }
            return array1.length = 0, 
            string1 = total,
            num1 = '',
            array2 = [],
            string2 = '',
            num2 = '',
            array1 = [],
            total = 0;
        } else {
    num1 = parseInt(string1);
    num2 = parseInt(string2);
    if (operand === 'plus') {
    total = (num1 + num2);
    } else if (operand === 'minus') {
        total = (num1 - num2);
    } else if (operand === 'multiply') {
        total = (num1 * num2);
    } else if (operand === 'divide') {
        total = (num1 / num2);
    }
    if(typeof(element) != 'undefined' && element != null) {
        display.removeChild(element);
        element = document.createElement("numDisplay");
        element.textContent = total; 
        display.appendChild(element);
    } else {
        element = document.createElement("numDisplay");
        element.textContent = total; 
        display.appendChild(element);
    }
    return array1.length = 0, 
    string1 = total,
    num1 = '',
    array2 = [],
    string2 = '',
    num2 = '',
    array1 = [],
    total = 0;
}
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
    total = 0;
})