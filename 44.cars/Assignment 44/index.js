"use strict";
function store_car_info(manufacturer, model, ...kwargs) {
    let carInfo = {
        manufacturer: manufacturer,
        model: model,
    };
    for (let i = 0; i < kwargs.length; i += 2) {
        const key = kwargs[i];
        const value = kwargs[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required information and additional name-value pairs
let car = store_car_info("Toyota", "Camry", "color", "Silver", "year", 2022);
// Print the returned object to check the stored information
console.log(car);
