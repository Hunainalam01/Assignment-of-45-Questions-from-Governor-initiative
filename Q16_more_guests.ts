// Question no 16:-

// Guest Names
let invited_guest:string[]= ["Misbah", "Hunain", "Muntaha", "Balaj"];

// Decline Guest
let decline_guest:string= "Muntaha";

// New Guest
let newPerson:string = "Ammar";
invited_guest[invited_guest.indexOf(decline_guest)] = newPerson; 

// Statement
console.log(`Congratulations We Found A Bigger Dinner Table YAHOOO!`);

// Adding guest in the start
invited_guest.unshift("Maheen");

// Adding guest in the middle
invited_guest.splice(invited_guest.length/2, 0, "Hadia");

// Adding guest in the end
invited_guest.push("Wizz");
 
// Updated guest list
invited_guest.forEach(updated_guest_list => {
    console.log(`\nHey ${updated_guest_list}, You Have Been Invited For The Dinner`);
});