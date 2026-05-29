
const numbers = [3, 7, 2, 9, 5];

// Initialize max with the first element of the array
let max = numbers[0];

// Loop through the array starting from the second element
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]; // Update max if current element is larger
    }
}

console.log("Maximum value is:", max);