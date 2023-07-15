"use strict";
let guestList = ["Ali Imran", "Rana Salman", "Saeed Shah"];
const unableToAttend = guestList[1];
console.log(`${unableToAttend} is unable to attend the dinner.`);
guestList[1] = "Moiz Rehman";
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversation and delightful food.`);
});
