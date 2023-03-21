function grams(ounces,pounds) {
  return ounces*28.35 + pounds*453.592;
}

const pounds = prompt("Enter Pounds: ");
const ounces = prompt("Enter Ounces: ");

window.alert("The total of Ounces & Pounds in Grams is: " + grams(ounces,pounds) + ".");