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
    element = document.getElementById("numDisplay"),
    clear = document.querySelector('#clear');
    console.log("total in variables " + total);

//Functions

btnInts.forEach((btnInt) => {
    btnInt.addEventListener ('click', (num1) => {
        if (operand === '') { 
            array1.push(btnInt.id); 
            string1 = array1.join('');
            console.log(string1);
    
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
        console.log(string2);
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
        if (operand === ""){
            operand = btnOperand.id;
            console.log(operand);
            return array2 = [], operand;  

        } 
        
    });
});

equal.addEventListener('click', () => {
    num1 = parseInt(string1);
    num2 = parseInt(string2);
    if (operand === 'plus') {
    total = (num1 + num2 + total);
    console.log("total in plus " + total);
    } else if (operand === 'minus') {
        total = (num1 - num2);
        console.log("total in minus " + total);
    } else if (operand === 'multiply') {
        total = (num1 * num2);
        console.log("total in multiply " + total);
    } else if (operand === 'divide') {
        total = (num1 / num2);
        console.log("total in divide " + total);
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
    operand = '',
    string1 = '',
    num1 = '',
    array2 = [],
    string2 = '',
    num2 = '',
    array1[0] = total,
    total = 0,
    console.log("total in equal " + total);
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