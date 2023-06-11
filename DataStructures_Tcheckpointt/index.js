const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

// First, merge both sets into one array using the spread operator
const allElements = [...set1, ...set2];

// Create a new arrayto hold the distinct elements
const distinctElements = [];

// Loop through all the elements
for (let i = 0; i < allElements.length; i++) {
  // Check if the current element is already in the distinctElements array
  if (!distinctElements.includes(allElements[i])) {
    // If not, add it to the array
    distinctElements.push(allElements[i]);
  }
}

// Finally, calculate the sum of all distinct elements using the reduce method
const sum = distinctElements.reduce((acc, curr) => acc + curr, 0);

console.log(sum); 
