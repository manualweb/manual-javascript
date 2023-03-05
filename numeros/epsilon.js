let n1 = 0.1;
let n2 = 0.2;
console.log(n1+n2);
console.log (n1+n2 === 0.3); // false

function equal(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}

console.log(equal(n1+n2, 0.3)); // true