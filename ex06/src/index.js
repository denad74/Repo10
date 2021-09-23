// Create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};

// End of lion object

function myFunction(porpName, propValue) { // Change this line
    // Only change code below this line
    lion[porpName] = propValue;
    return lion;
    // Only change code above this line
}

myFunction("roar", "roar-roar"); // Change rhis line
module.exports = myFunction;
