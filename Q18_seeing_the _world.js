// Question no 18:-
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Five places in the world
var placeToVisit = ["Canada", "Australia", "US", "Saudi Arabia", "Korea"];
// // Array in its original order
console.log("\nOriginal Order: \n", placeToVisit);
// // Array in alphabetical order
console.log("\nAlphabetical order:\n", __spreadArray([], placeToVisit, true).sort());
// // Show again in its origianal order
console.log("\n Again in original order: \n", placeToVisit);
// // Array in reverse alphabetical order
console.log("\n Reverse alphabetical order: \n", __spreadArray([], placeToVisit, true).sort().reverse());
// // Show again in its original order
console.log("\n Again in original order: \n", placeToVisit);
// // Array in reverse order
console.log("\n Reverse original order: \n", placeToVisit.reverse());
// // Reverse the order list again
console.log("\n Reverse the order agian: \n", __spreadArray([], placeToVisit, true).reverse());
// // Store in alphabeical order
console.log("\n In alphgabetical order: \n", __spreadArray([], placeToVisit, true).sort());
// // Reverse alphabetical order 
console.log("\n Sorted in Reverse Alphabetical Order: \n", placeToVisit.sort().reverse());
