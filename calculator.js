// The Great Beginnings of an Adequate Calculator.

//variables

let numA, 
    numB, 
    total,
    d7 = document.querySelector("#d7");

//Functions

function add(numA, numB) {
    total = (numA + numB)
    return total;
}

function subtract(numA, numB) {
    total = (numA - numB);
    return total;
}

function multiply(numA, numB) {
    total = (numA * numB);
    return total;
}

function divide(numA, numB) {
    total = (numA / numB);
    return total;
}

function operator(numA, numB) {
    return add(numA, numB);
}

d7.addEventListener('click', () => {
    console.log("Button 7 works");
});

/* console.log(add(4, 6));
console.log(subtract(6, 4));
console.log(multiply(4, 6));
console.log(divide(12, 4));
console.log(operator(2, 3)); */

