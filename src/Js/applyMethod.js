function multiplyNumbers (a, b) {
    return a * b;  
}

const numbers = [5, 10];
const result = multiplyNumbers.apply(null, numbers);
console.log(result); // Output: 50 

