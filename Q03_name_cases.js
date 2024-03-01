// Question no 03:-
var personName = "Hunain alam";
// for Uppercase:
console.log("Uppercase: ".concat(personName.toUpperCase()));
// for Lowercase:
console.log("Lowercase: ".concat(personName.toLowerCase()));
// for Titlecase:
console.log("Titlecase:", personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
