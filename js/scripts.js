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
  this.pizzaCost = 0
  for (let i = 0; i < sizeAndPrice.length; i++) {
    if (this.size === sizeAndPrice[i][0]) {
      this.pizzaCost += sizeAndPrice[i][1];
    }
  }
  for (let j = 0; j < this.toppings.length; j++) {
    for (let k = 0; k < meatToppings.length; k++) {
      if (meatToppings[k] === this.toppings[j]){
      this.pizzaCost +=2;
      }
    } for (let l = 0; l < veggieToppings.length; l++) {
      if (veggieToppings[l] === this.toppings[j]){
      this.pizzaCost +=1;
      } 
    } 
  } return this.pizzaCost;
};


// //Order object and methods
function Order(pizzas){
  this.pizzas = pizzas;
  this.orderCost = 0;
}

Order.prototype.calculateOrderCost = function(order){
  for (let i=0; i < this.pizzas.length; i++) {
    this.orderCost += this.pizzas[i].pizzaCost;
  } return this.orderCost
};

//User Interface Logic
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    const pizzaSizeSubmitted = $("#size").val();
    // const pizzaToppingsSubmitted = $("input#meat-toppings[type=checkbox]:checked").val();
    console.log(pizzaSizeSubmitted);


    var toppings = [];
    $.each($("input[name='toppings']:checked"), function(){
        toppings.push($(this).val());
    });
    console.log("My toppings are: " + toppings.join(", "));

  })
})