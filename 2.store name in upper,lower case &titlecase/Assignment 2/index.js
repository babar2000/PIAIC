"use strict";
let zain = "zAin bAbAr";
console.log(zain.toLocaleLowerCase());
console.log(zain.toUpperCase());
function toTitleCase(str) {
    return str.toLocaleLowerCase().replace(/(?:^|\s)\w/g, (match) => {
        return match.toUpperCase();
    });
}
console.log("Title case", toTitleCase(zain));
