// Question no 03:-

let personName:string = "Hunain alam";

// for Uppercase:
console.log(`Uppercase: ${personName.toUpperCase()}`);

// for Lowercase:
console.log(`Lowercase: ${personName.toLowerCase()}`);

// for Titlecase:
console.log("Titlecase:", personName.replace(/\b\w/g, char => char.toUpperCase()));



