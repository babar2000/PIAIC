function describe_city(city: string, country: string = "United States") {
  console.log(`${city} is in ${country}.`);
}

// Call the function for cities in the default country
describe_city("New York");
describe_city("Los Angeles");

// Call the function for a city in a different country
describe_city("Karachi", "Pakistan");
