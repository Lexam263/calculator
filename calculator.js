// The Great Beginnings of an Adequate Calculator.

//variables

let numA = 8, 
    numB = "b", 
    total,
    container = document.querySelector("#container"),
    display = document.querySelector("#display"),
    d7 = document.querySelector("#d7"),
    d8 = document.querySelector("#d8"),
    d9 = document.querySelector("#d9"),
    ddivide = document.querySelector("#ddivide"),
    d4 = document.querySelector("#d4"),
    d5 = document.querySelector("#d5"),
    d6 = document.querySelector("#d6"),
    dmultiply = document.querySelector("#dmultiply"),
    d1 = document.querySelector("#d1"),
    d2 = document.querySelector("#d2"),
    d3 = document.querySelector("#d3"),
    dminus = document.querySelector("#dminus"),
    d0 = document.querySelector("#d0"),
    dclear = document.querySelector("#dclear"),
    dequal = document.querySelector("#dequal"),
    dplus = document.querySelector("#dplus");


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

console.log(numA);

d7.addEventListener('click', () => {
    if (numA = "a") {
        numA = 7;
        console.log("numA " + numA); 
    } else if(numB = "b") {
        numB = 7;
        console.log("numB " + numB);
    }

});

/* console.log(add(4, 6));
console.log(subtract(6, 4));
console.log(multiply(4, 6));
console.log(divide(12, 4));
console.log(operator(2, 3)); */


