// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or
// a car, and make a list that stores several examples. Use your list to print a series 
// of statements about these items, such as “I would like to own a Honda motorcycle.”
// Question no 13:-
var fav_transport = [
    "Honda civic Models",
    "Toyota prius",
    "Land cruiser",
    "Toyota corolla",
    "Mercedes Benz"
];
fav_transport.forEach(function (transport) {
    console.log("I Would Like To Own A ".concat(transport));
});
