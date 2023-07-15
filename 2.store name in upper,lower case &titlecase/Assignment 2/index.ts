let zain:string = "zAin bAbAr";

console.log(zain.toLocaleLowerCase());
console.log(zain.toUpperCase());


function toTitleCase(str:string):string{
    return str.toLocaleLowerCase().replace(/(?:^|\s)\w/g, (match)=>{
        return match.toUpperCase();
    });
}

console.log("Title case", toTitleCase(zain));
