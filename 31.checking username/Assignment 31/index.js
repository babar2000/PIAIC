"use strict";
let current_users = ["Zain", "Uzair", "Nawaz", "Afan", "Bilal"];
let new_users = ["Kareem", "Bilal", "Uzair", "Umar", "Umair"];
for (let new_user of new_users) {
    let is_username_taken = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());
    if (is_username_taken) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_user}' is available.`);
    }
}
