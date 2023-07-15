"use strict";
function order_sandwich(...items) {
    console.log("Sandwich order summary:");
    console.log("Bread: Whole Wheat");
    console.log("Items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
    console.log();
}
// Call the function with different number of arguments
order_sandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
order_sandwich("Ham", "Cheese");
order_sandwich("Chicken", "Avocado", "Bacon", "Mustard", "Pickles");
