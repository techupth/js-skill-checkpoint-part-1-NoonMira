// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];


// let maxmin = inventory.reduce((acc,curr)=>{ Math.min(acc,curr)
// });


let maxmin = inventory.reduce((acc,curr)=>Math.min(acc.quantity,curr.quantity));
console.log(Number(maxmin))