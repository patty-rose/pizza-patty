# _title_

#### By _**Patty Otero**_

#### _description_

## Github pages site: 

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_

## Description

_more detailed description_

## Setup/Installation Requirements

* View at Github pages site:  or follow next steps
* Clone this repository to your desktop
* Get into your file explorer and go to the top of the directory
* Open index.html in your browser

## Known Bugs

* _No known bugs._

## License

_MIT_

Copyright (c) _2022_ _Patty Otero_

## Tests
Describe: Pizza()

Test: "It should return a Pizza object with properties for toppings, size, and pizza cost."
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium", pizzaCost: }

Describe Pizza.prototype.calculatePizzaCost()

Test: "It should calculate the cost of the pizza based on toppings and size and submit it to the pizzaCost property in the pizza object."
Code: myPizza.calculatePizzaCost();
Expected Output: 13

Describe: Order()

Test: "It should return an Order object with a property for pizzas and orderCost."
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium"); const pepperoniPizza = new Pizza(["pepperoni", "medium"]; const myOrder = new Order(["myPizza", "pepperoniPizza");
Expected Output: myOrder { pizzas: ["myPizza", "pepperoniPizza"], orderCost:}

Describe: Order.prototype.calculateOrderCost()

Test: "It should calculate the cost of the entire order based on each pizza's individual cost and submit it to the orderCost property in the order object."
Code: myOrder.calculateOrderCost();
ExpectedOutput: 25


## Pizza cost-- toppings and size:
Small : $5
Medium : $10
Large : $15
Extra Large : $20

Toppings:
Meat: $2 per topping
Veggie: $1 per topping
