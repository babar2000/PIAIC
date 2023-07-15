"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create albums using the function
let album1 = make_album("Taylor Swift", "Fearless");
let album2 = make_album("Ed Sheeran", "Divide", 12);
let album3 = make_album("Adele", "21", 11);
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
