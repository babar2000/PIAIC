"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let modifiedMagicians = [];
    for (let magician of magicians) {
        modifiedMagicians.push(magician + " the Great");
    }
    return modifiedMagicians;
}
// Array of magician names
let magicianNames = ["Javed Ali", "Naeem Bukhari", "Nawaz Sharif", "Asif Zardari"];
// Call make_great() with a copy of the magicianNames array
let modifiedMagicianNames = make_great([...magicianNames]);
// Call show_magicians() to display the original list
console.log("Original Magicians:");
show_magicians(magicianNames);
// Call show_magicians() to display the modified list
console.log("Modified Magicians:");
show_magicians(modifiedMagicianNames);
