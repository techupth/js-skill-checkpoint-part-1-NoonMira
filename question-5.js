// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "10";

function calculateTotalPrice (products,promotionCode){
  if(promotionCode = "SALE20"){
    return (20/100) * products;
  }
  else if (promotionCode = "SALE50"){
    return (50/100) * products
  }
  else{
      return "You don't have discount";
  }

}

console.log(calculateTotalPrice (10,"SALE20"))