//Business Logic
function calculateToppingsCost(toppings){
  let toppingsCost = 0;
  const toppingsCostMap = {
    "pepperoni" : 2,
    "anchovies" : 2,
    "chicken" : 2,
    "canadian-bacon" : 2,
    "sausage" : 2,
    "pineapple" : 1,
    "broccoli" : 1,
    "mushrooms" : 1,
    "peppers" : 1,
    "garlic" : 1,
    "olives" : 1,
  }
  for (let i = 0; i < toppings.length; i++) {
    let topping = toppings[i];
    let toppingCost = toppingsCostMap[topping];
    toppingsCost += toppingCost;
  } return toppingsCost;
}

function calculateSizeCost(size) {
  let sizeCost = 0;
  const sizeCostMap = {
    "small" : 5,
    "medium" : 10,
    "large" : 15,
    "extra-large" : 20,
  }
  return sizeCostMap[size];
}

//Pizza object and methods
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.pizzaCost = 0;
}  

Pizza.prototype.calculatePizzaCost = function(){
  this.pizzaCost = 0
  this.pizzaCost = calculateSizeCost(this.size) + calculateToppingsCost(this.toppings);
  return this.pizzaCost;
};

// //Order object and methods
function Order(pizzas){
  this.pizzas = pizzas;
  this.orderCost = 0;
}

Order.prototype.calculateOrderCost = function(){
  this.orderCost = 0;
  for (let i=0; i < this.pizzas.length; i++) {
    this.orderCost += this.pizzas[i].calculatePizzaCost();
  } return this.orderCost
};

// User Interface Logic

function showPizzas(pizzasToDisplay) {
  let pizzasList = $("ul#displayPizzas");
  let htmlForPizzas = "";
  for (let i = 0; i< pizzasToDisplay.length; i++) {
    htmlForPizzas += createHTML(pizzasToDisplay[i]);
  } pizzasList.html(htmlForPizzas);
  return htmlForPizzas;
}

function createHTML(pizza){
  let htmlForPizza = "";
  let toppingsToShow = "";

  if (pizza.toppings.length === 0) {
    htmlForPizza += "<li>" + pizza.size + " cheese pizza" + "</li>";
    return htmlForPizza;
  } else if (pizza.toppings.length != 0) {
    for (let i = 0; i < pizza.toppings.length; i++) {
      if (i != pizza.toppings.length - 1) {
        toppingsToShow += pizza.toppings[i] + ", ";
      } else if (i = pizza.toppings.length - 1) {
        toppingsToShow += "and " + pizza.toppings[i] + ".";
      }
    }
  }
  htmlForPizza += "<li>" + pizza.size + " pizza with " + toppingsToShow + "</li>";
  return htmlForPizza;
}

let pizzasOnCurrentOrder = [];
let currentOrder = new Order(pizzasOnCurrentOrder);

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    const pizzaSizeSubmitted = $("#size").val();
    let toppingsSubmitted = [];
    $('input[name="toppings"]:checked').each(function() {
      toppingsSubmitted.push(this.id);
    });

    const newPizza = new Pizza(toppingsSubmitted, pizzaSizeSubmitted);
    newPizza.calculatePizzaCost();
    pizzasOnCurrentOrder.push(newPizza);

    showPizzas(currentOrder.pizzas);
    $(".displayOrderCost").text(currentOrder.calculateOrderCost());
    $('input[type="checkbox"]').prop('checked', false);
  })
})