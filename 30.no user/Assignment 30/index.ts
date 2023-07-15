let age: number = 25;
let users: string[] = [];

if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  if (age < 2) {
    console.log("The person is a baby.");
  } else if (age < 4) {
    console.log("The person is a toddler.");
  } else if (age < 13) {
    console.log("The person is a kid.");
  } else if (age < 20) {
    console.log("The person is a teenager.");
  } else if (age < 65) {
    console.log("The person is an adult.");
  } else if (age >= 65) {
    console.log("The person is an elder.");
  } else {
    console.log("Invalid age provided.");
  }
}
