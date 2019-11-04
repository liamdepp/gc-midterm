console.log("working...");
//current ver

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
let testFood1 = new FoodItem("Pizza", "main", "desc", 12.0);
foodItems.push(testFood1);
let testFood2 = new FoodItem("Burger", "main", "desc", 10.0);
foodItems.push(testFood2);
let testFood3 = new FoodItem("Hot Dog", "main", "desc", 5.0);
foodItems.push(testFood3);
let testFood4 = new FoodItem("Milk Shake", "main", "desc", 5.0);
foodItems.push(testFood4);
let testFood5 = new FoodItem("Taco", "main", "desc", 5.0);
foodItems.push(testFood5);
let testFood6 = new FoodItem("Fried Chicken", "main", "desc", 5.0);
foodItems.push(testFood6);
let testFood7 = new FoodItem("Cheese Streak", "main", "desc", 5.0);
foodItems.push(testFood7);
let testFood8 = new FoodItem("Pepsi", "main", "desc", 5.0);
foodItems.push(testFood8);
let testFood9 = new FoodItem("Nachos", "main", "desc", 5.0);
foodItems.push(testFood9);
let testFood10 = new FoodItem("Corn on the Cob", "main", "desc", 5.0);
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
    getTotalCard();
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
  document.getElementById(
    "subTotal"
  ).innerText = `Subtotal: $${subTotal.toFixed(2)}`;
  document.getElementById("tax").innerText = `Tax: $${tax.toFixed(2)}`;
  document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
  document.querySelector(".amountDue").innerText = `Total: $${total.toFixed(
    2
  )}`;
  document
    .querySelector("#cashReceived")
    .setAttribute("min", `${total.toFixed(2)}`);
  document
    .querySelector(".paymentForm")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      let cashReceived = document.querySelector("#cashReceived").value;
      change = (Number(cashReceived) - Number(total)).toFixed(2);
      document.querySelector("#changeDue").innerText = `Change: $${change}`;
      //
      displayReceipt();
      display();
    });
}

function getTotalCard() {
  let subTotal = 0;
  let tax = 0;
  let total = 0;
  for (const foodItem of cart) {
    subTotal += foodItem.price;
    tax = subTotal * 0.06;
    total = subTotal + tax;
  }
  document.getElementById(
    "subTotal"
  ).innerText = `Subtotal: $${subTotal.toFixed(2)}`;
  document.getElementById("tax").innerText = `Tax: $${tax.toFixed(2)}`;
  document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
  document.querySelector(".amountDueCard").innerText = `Total: $${total.toFixed(
    2
  )}`;
  document
    .querySelector(".paymentFormCard")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      displayReceiptCard();
      display();
    });
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
  cart.forEach((item, index) => {
    const newItem = document.createElement("div");
    const deleteIcon = document.createElement("span");
    deleteIcon.innerHTML = `<i class="fas fa-times"></i>`;
    newItem.classList.add("cartItem");
    // newItem.setAttribute("index", index);
    deleteIcon.setAttribute("index", index);
    newItem.innerText = `${item.name}: $${item.price.toFixed(2)}`;
    newItem.appendChild(deleteIcon);
    document.querySelector("#cart").appendChild(newItem);
    console.log(cart);
  });
}

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var CashBtn = document.getElementById("cash");
var CardBtn = document.getElementById("card");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
CashBtn.onclick = function() {
  let payForm = document.querySelector(".paymentForm");
  payForm.reset();
  document.querySelector(".amountDue").value = "";
  modal.style.display = "block";
};
CardBtn.onclick = function() {
  let payForm = document.querySelector(".paymentForm");
  payForm.reset();
  document.querySelector(".amountDue").value = "";
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

span2.onclick = function() {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

// Delete Function
document.querySelector("#cart").addEventListener("click", removeFromCart);

function removeFromCart(event) {
  if (event.target.classList.contains("fa-times")) {
    let index = event.target.parentNode.getAttribute("index");
    console.log(index);
    cart.splice(index, 1);
    display();
    displayReceipt();
    getTotal();
    getTotalCard();
  }
}

function displayReceipt() {
  document.querySelector("#receiptHeader").innerText = "Items Purchased:";
  document.querySelector(
    "#cashReceivedReceipt"
  ).innerText = `Amount Tendered: $${
    document.querySelector("#cashReceived").value
  }`;
  document.querySelector(".receipt").innerHTML = document.querySelector(
    ".salesInfo"
  ).innerHTML;
}

function displayReceiptCard() {
  document.querySelector("#receiptHeaderCard").innerText = "Items Purchased:";
  document.querySelector(".receiptCard").innerHTML = document.querySelector(
    ".salesInfo"
  ).innerHTML;
}

let payButtonCash = document.querySelector("#cashPayButton");
payButtonCash.addEventListener("click", changeButton);
function changeButton() {
  document.querySelector("#switchCash").setAttribute("value", "Done");
}

let payButtonCard = document.querySelector("#cardPayButton");
payButtonCard.addEventListener("click", changeButton2);
function changeButton2() {
  document.querySelector("#switchCard").setAttribute("value", "Done");
}
