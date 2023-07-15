"use strict";
let guestList = ["Ali Imran", "Rana Salman", "Saeed Shah", "bashir ali", "Moiz Rehman", "Muneed Sajjad", "Shahzad Khan"];
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people.");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
}
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us for an evening of great conversation and delightful food.`);
});
guestList.length = 0; // Remove the last two names from the list
console.log(guestList); // Print the list to verify it's empty
