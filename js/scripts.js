function liters(gallon) {
  return gallon*3.785;
}

const gallon = prompt("Enter amount of gallons to convert to liters: ");

window.alert("The total amound of liters: " + liters(gallon) + ".");

// Converts Teaspoons, Tablespoons and Cups to Milliliters

//function ml(tsp,tbsp,cups) {
  //return tsp*4.929 + tbsp*14.787 + cups*236.588;
//}
//const tsp = prompt("Enter amount of Teaspoons: ");
//const tbsp = prompt("Enter amount of Tablespoons: ");
//const cups = prompt("Enter amount of Cups: ");
//window.alert("The total amount of TSP, TBSP and CUPS in ML: " + ml(tsp,tbsp,cups) + ".");


// Converts Ounces & Pounds to Grams

//function grams(ounces,pounds) {
  //return ounces*28.35 + pounds*453.592;
//}
//const pounds = prompt("Enter Pounds: ");
//const ounces = prompt("Enter Ounces: ");
//window.alert("The total of Ounces & Pounds in Grams is: " + grams(ounces,pounds) + ".");