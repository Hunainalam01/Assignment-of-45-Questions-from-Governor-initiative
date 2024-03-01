// Question no 15:-

// Guest Names
let invited_guest:string[]= ["Misbah", "Hunain", "Muntaha", "Balaj"];

// Decline Guest
let decline_guest:string= "Muntaha";
console.log(`${decline_guest} can't make it, for dinner`);

// New Guest
let newPerson:string = "Ammar";
invited_guest[invited_guest.indexOf(decline_guest)] = newPerson; 

// Updated Guest
invited_guest.forEach(updated_guest_list=>{
    console.log(`AOA ${updated_guest_list} Join us for dinner, your company is all we need!`);
});