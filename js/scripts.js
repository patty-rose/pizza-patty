//Business Logic
//Pizza object and methods
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.pizzaCost = 0;
}  

Pizza.prototype.calculatePizzaCost = function(pizza){
  const sizeAndPrice = [["small", 5], ["medium", 10] ,["large", 15], ["extraLarge", 20]];
  const meatToppings = ["anchovies", "pepperoni", "canadianBacon", "chicken", "sausage"];
  const veggieToppings = ["pineapple", "broccoli", "mushrooms", "peppers", "olives", "garlic"];
  let pizzaCost = 0
  for (let i = 0; i < sizeAndPrice.length; i++) {
    if (this.size === sizeAndPrice[i][0]) {
      pizzaCost += sizeAndPrice[i][1];
    }
  }
  for (let j = 0; j < this.toppings.length; j++) {
    for (let k = 0; k < meatToppings.length; k++) {
      if (meatToppings[k] === this.toppings[j]){
      pizzaCost +=2;
      }
    } for (let l = 0; l < veggieToppings.length; l++) {
      if (veggieToppings[l] === this.toppings[j]){
      pizzaCost +=1;
      } 
    } 
  } return pizzaCost;
};


// //Order object and methods
// Order()

// Order.prototype.calculateOrderCost()


//User Interface Logic
$(document).ready(function() {
  
})