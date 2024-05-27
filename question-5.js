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

const promotionCode = "";

function totalValue (acc,curr){
  return acc+(curr.price*curr.quantity)
}

function productsPromotion (products,promotionCode){
let total = products.reduce(totalValue,0)
  if(promotionCode === "SALE20"){
    total = total-((20/100) * total);
  }
  else if (promotionCode === "SALE50"){
    total = total- ((50/100) * total);
  }
  else{
    console.log("You don't have discount");
  }
  return total
}
console.log(productsPromotion(products,promotionCode))

