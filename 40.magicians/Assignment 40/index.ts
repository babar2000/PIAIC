function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Array of magician names
let magicianNames: string[] = ["Javed Umair", "Saeed Ghani", "Nawaz Sharif", "Asif Zardari"];

// Call the function to show the magicians
show_magicians(magicianNames);
