// Question no 16:-
// Guest Names
var invited_guest = ["Misbah", "Hunain", "Muntaha", "Balaj"];
// Decline Guest
var decline_guest = "Muntaha";
// New Guest
var newPerson = "Ammar";
invited_guest[invited_guest.indexOf(decline_guest)] = newPerson;
// Statement
console.log("Congratulations We Found A Bigger Dinner Table YAHOOO!");
// Adding guest in the start
invited_guest.unshift("Maheen");
// Adding guest in the middle
invited_guest.splice(invited_guest.length / 2, 0, "Hadia");
// Adding guest in the end
invited_guest.push("Wizz");
// Updated guest list
invited_guest.forEach(function (updated_guest_list) {
    console.log("\nHey ".concat(updated_guest_list, ", You Have Been Invited For The Dinner"));
});
