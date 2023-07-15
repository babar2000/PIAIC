"use strict";
let guestList = ["Ali Imran", "Rana Salman", "Saeed Shah"];
const unableToAttend = guestList[1];
console.log(`${unableToAttend} is unable to attend the dinner.`);
guestList[1] = "Moiz Rehman";
console.log("Good news! We found a bigger dinner table.");
guestList.unshift("Abdul Raffay"); // Add one new guest to the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, "Galileo Galilei"); // Add one new guest to the middle
guestList.push("Umar Ayub"); // Add one new guest to the end
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversation and delightful food.`);
});
