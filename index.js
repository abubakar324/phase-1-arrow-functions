// index.js

// 1) Function expression called divide
const divide = function() {
    return 2000 / 100;
};

// 2) Arrow function called square
const square = (x) => {
    return x * x;
};

// 3) Arrow function called add
const add = (a, b) => {
    return a + b;
};

// Make sure to export the functions if they're being imported in the test file
module.exports = {
    divide,
    square,
    add
};