// Question no 15:-
// Guest Names
var invited_guest = ["Misbah", "Hunain", "Muntaha", "Balaj"];
// Decline Guest
var decline_guest = "Muntaha";
console.log("".concat(decline_guest, " can't make it, for dinner"));
// New Guest
var newPerson = "Ammar";
invited_guest[invited_guest.indexOf(decline_guest)] = newPerson;
// Updated Guest
invited_guest.forEach(function (updated_guest_list) {
    console.log("AOA ".concat(updated_guest_list, " Join us for dinner, your company is all we need!"));
});
