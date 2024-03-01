// Question no 18:-

// Five places in the world
let placeToVisit: string[] = ["Canada", "Australia", "US", "Saudi Arabia", "Korea"];

// // Array in its original order
console.log("\nOriginal Order: \n", placeToVisit);

// // Array in alphabetical order
console.log("\nAlphabetical order:\n", [...placeToVisit].sort());

// // Show again in its origianal order
console.log("\n Again in original order: \n", placeToVisit);

// // Array in reverse alphabetical order
console.log("\n Reverse alphabetical order: \n", [...placeToVisit].sort().reverse());

// // Show again in its original order
console.log("\n Again in original order: \n", placeToVisit);
 
// // Array in reverse order
console.log("\n Reverse original order: \n", placeToVisit.reverse());

// // Reverse the order list again
console.log("\n Reverse the order agian: \n", [...placeToVisit].reverse());

// // Store in alphabeical order
console.log("\n In alphgabetical order: \n", [...placeToVisit].sort());

// // Reverse alphabetical order 
console.log("\n Sorted in Reverse Alphabetical Order: \n", placeToVisit.sort().reverse());
