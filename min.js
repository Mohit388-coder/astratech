
const numbers = [3, 7, 2, 9, 5];

// Initialize min with the first element of the array
let min = numbers[0];

// Loop through the array starting from the second element
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i]; // Update min if current element is smaller
    }
}

console.log("Minimum value is:", min);