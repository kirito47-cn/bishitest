"use strict";
function add(a, b) {
    return parseFloat((a + b).toFixed(10));
}
console.log(add(0.1, 0.2) === 0.3);
