// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
inventory[0].quantity = 200
inventory.push({name: "Orange",price:20,quantity:300})
console.log(inventory)

let multiply = (inventory[0].quantity)+(inventory[1].quantity)+(inventory[2].quantity)
console.log(multiply)