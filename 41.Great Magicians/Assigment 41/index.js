"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
// Array of magician names
let magicianNames = ["Javed Ali", "Naeem Bukhari", "Nawaz Sharif", "Asif Zardari"];
// Call make_great() to modify the magicianNames array
make_great(magicianNames);
// Call show_magicians() to display the modified list
show_magicians(magicianNames);
