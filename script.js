console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["ramen", "pizza", "pasta", "cheeseburger", "chicken", "nachos"];

// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let food of favoriteFoods) {
  console.log("One of my favorite foods is " + food + ".");
}

// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.

//Used a for loop to iterate through the favoriteFoods array, beginning at an index of 0, and
//adding 1 to the current index as each item is looped over, printing the results as food rankings
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log("My #" + (i+1) + " favorite food is " + favoriteFoods[i]);
}

// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."

//Created a function tht takes the parameter "foodName" to print three food recommendation statments.
function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?")
  console.log("I always recommend " + foodName + " to friends.")
  console.log("Trust me — " + foodName + " is delicious.");
}

// 4b. Call the function at least 3 times

//Called the printFoodRecommendation functions three times, by passing specific food names as arguments
printFoodRecommendation("nachos");
printFoodRecommendation("ramen");
printFoodRecommendation("pasta");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Donuts" would be.

//Used a for loop to iterate through each food in the friendFavorites array, and print foods that 
//include the letter "a"
for (let food of friendFavorites) {
  if (food.includes("a")) {
    console.log(food);
  }
}

// 6. Store the result in an array called foodsWithA. Print out the array.

//Created an empty arry to store the results of the foodsWithA loop
let foodsWithA = [];

//Used a for loop to iterate through the foods in the friendFavorites array, and used the .push 
//method to add foods that include "a" to the end of the foodsWithA array.
for (let food of friendFavorites) {
  if (food.includes("a")) {
    foodsWithA.push(food);
  }
}

//Printed the foodsWithA array
console.log(foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.

//Created an empty array to store the results of the longFoodNames loop
let longFoodNames = [];

//Used a for loop to iterate through foods in the friendFavorites array, used the .length method
//to determine the number of characters in each food name, and used the .push method to add food names
//to the end of the longFoodNames array if they are greater than 6 characters.
for (let food of friendFavorites) {
  if (food.length > 6) {
    longFoodNames.push(food);
  }
}

// 8. Create another array shortFoodNames for foods 6 characters or shorter.

//Created an empty array to store the results of the shortFoodNames loop
let shortFoodNames = [];

//Used a for loop to iterate through foods in the friendFavorites array, used the .length method to
//determine the number of characters in each food name, and the .push method to add food names to 
//the shortFoodNames array if they are less than or equal to 6 characters
for (let food of friendFavorites) {
  if (food.length <= 6) {
    shortFoodNames.push(food);
  }
}

// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log(longFoodNames);
console.log(shortFoodNames);

//Used the .length method and conditional logic to compare the number of foods in both arrays and print
//a specific statement based on which array has more items
if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else {
  console.log("There are more short-named foods.");
}

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."

//Initialized the longestFood variable with an empty string to store the longest food name found during the loop
let longestFood = "";

//Used a for loop to iterate through foods in the friendFavorites array, used the .length method to
//compare the amount of characters in each food and, if a food has more characters than the current,
//longest food, that food becomes the new value of the longestFood variable
for (let food of friendFavorites) {
  if (food.length > longestFood.length) {
    longestFood = food;
  }
}

//Printed a statement that declares the name of the longest food and how many characters it has
console.log("The longest food name in the list is " + longestFood + " with " + longestFood.length + " characters.");