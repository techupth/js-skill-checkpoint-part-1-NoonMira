// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];


let minFruitName= "";
let minQuantity = inventory[0].quantity;

for (let fruit of inventory) {
  if(fruit.quantity < minQuantity){
    minFruitName = fruit.name ;
    minQuantity = fruit.quantity;
  }  
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minFruitName}  ซึ่งมี ${minQuantity} ชิ้น`)