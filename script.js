console.log("working...");

//class constructor for food items
class FoodItem {
  constructor(name, category, description, price) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.price = price;
  }
}

//array for food items
let foodItems = [];

//creating new instance of food item
let testFood1 = new FoodItem("Pizza", "main", "pizza desc", 12.0);
foodItems.push(testFood1);
let testFood2 = new FoodItem("Burger", "main", "burger desc", 10.0);
foodItems.push(testFood2);
let testFood3 = new FoodItem("Hot Dog", "main", "Hot Dog desc", 5.0);
foodItems.push(testFood3);
let testFood4 = new FoodItem("Milk Shake", "main", "Hot Dog desc", 5.0);
foodItems.push(testFood4);
let testFood5 = new FoodItem("Taco", "main", "Hot Dog desc", 5.0);
foodItems.push(testFood5);
let testFood6 = new FoodItem("Fried Chicken", "main", "Hot Dog desc", 5.0);
foodItems.push(testFood6);
let testFood7 = new FoodItem("Cheese Streak", "main", "Hot Dog desc", 5.0);
foodItems.push(testFood7);
let testFood8 = new FoodItem("Pepsi", "main", "Hot Dog desc", 5.0);
foodItems.push(testFood8);
let testFood9 = new FoodItem("Nachos", "main", "Hot Dog desc", 5.0);
foodItems.push(testFood9);
let testFood10 = new FoodItem("Corn on the Cob", "main", "Hot Dog desc", 5.0);
foodItems.push(testFood10);

//cart array
let cart = [];

//add event listener to container div
document
  .querySelector(".itemsPage")
  .addEventListener("click", addToShoppingCart);

//function to add item to cart via button
function addToShoppingCart(event) {
  if (event.target.classList.contains("foodButton")) {
    // cart.push("clicked");
    let i = event.target.getAttribute("index");
    cart.push(foodItems[i]);
    console.log(cart);
    display();
    getTotal();
    // document.querySelector("#cart").innerText =cart.name
  }
}

function getTotal() {
  let subTotal = 0;
  let tax = 0;
  let total = 0;
  for (const foodItem of cart) {
    subTotal += foodItem.price;
    tax = subTotal * 0.06;
    total = subTotal + tax;
  }
  console.log(subTotal.toFixed(2));
  console.log(tax.toFixed(2));
  console.log(total.toFixed(2));
  document.getElementById('subTotal').innerText = `Subtotal: $${subTotal.toFixed(2)}`;
  document.getElementById('tax').innerText = `Tax: $${tax.toFixed(2)}`;
  document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}

//food item buttons/cards container class
let allFoodItems = document.querySelector(".itemsPage");

//food items is the array of
foodItems.forEach((foodItem, index) => {
  let foodItemButton = document.createElement("div");
  foodItemButton.classList.add("foodButton");

  let foodName = document.createElement("div");
  foodName.innerText = `Name: ${foodItem.name}`;
  foodItemButton.append(foodName);

  let foodCategory = document.createElement("div");
  foodCategory.innerText = `Category: ${foodItem.category}`;
  foodItemButton.append(foodCategory);

  let foodDescription = document.createElement("div");
  foodDescription.innerText = `Desc: ${foodItem.description}`;
  foodItemButton.append(foodDescription);

  let foodPrice = document.createElement("div");
  foodPrice.innerText = `Price: $${foodItem.price.toFixed(2)}`;
  foodItemButton.append(foodPrice);
  //
  foodItemButton.setAttribute("index", index);
  allFoodItems.append(foodItemButton);
});

function display() {
  document.querySelector("#cart").innerText = "";
  // cart.forEach((item, index) => {
  for (const item of cart) {
    const newItem = document.createElement("div");
    newItem.classList.add("cartItem");
    newItem.innerText = `${item.name}: $${item.price.toFixed(2)}`;

    document.querySelector("#cart").appendChild(newItem);

  }
}
