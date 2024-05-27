// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
inventory[0].quantity = 200
inventory.push({name: "Orange",price:20,quantity:300})
console.log(inventory)

let multiply = inventory.reduce((acc,curr)=>{
return acc + curr.quantity*curr.price
},0)

console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก "+multiply+" บาท")