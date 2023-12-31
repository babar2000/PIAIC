"use strict";
const placesToVisit = ["Pakistan", "London", "USA", "Australia", "Canada"];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort());
console.log("\nStill in Original Order:");
console.log(placesToVisit);
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());
console.log("\nStill in Original Order:");
console.log(placesToVisit);
console.log("\nReversed Order:");
placesToVisit.reverse();
console.log(placesToVisit);
console.log("\nReversed Again (Back to Original Order):");
placesToVisit.reverse();
console.log(placesToVisit);
console.log("\nSorted in Alphabetical Order:");
placesToVisit.sort();
console.log(placesToVisit);
console.log("\nSorted in Reverse Alphabetical Order:");
placesToVisit.sort().reverse();
console.log(placesToVisit);
