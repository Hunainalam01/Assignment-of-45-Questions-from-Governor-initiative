// Question no 17:-

// guest Names 
let invited_guest:string[] = ["Misbah", "Hunain", "Muntaha", "Balaj"];

// Decline Guest
let decline_guest:string = "Muntaha";

// New Guest
let newPerson: string = "Ammar";
invited_guest[invited_guest.indexOf(decline_guest)] = newPerson;


// Adding guest in the start
invited_guest.unshift("Maheen");


// Adding guest in the middle
invited_guest.splice(invited_guest.length/2, 0, "Hadia");

// Adding Guest in the end
invited_guest.push("Wizz");

console.log(`Sorry Guys, I'm able to invite only two peoples for dinner`);

// Apologies Message To Decline Guests
while(invited_guest.length > 2){
let pullout_guest = invited_guest.pop();
console.log(`\nSorry ${pullout_guest}! I  can't invite you to dinner`);
};

// Invitation Message to invited Guests
invited_guest.forEach(updated_list =>{
    console.log(`\nHey ${updated_list} Yor are still invited to the dinner!`); 
});

// Removing Remaining Two Names
invited_guest.length = 0;
console.log(invited_guest);