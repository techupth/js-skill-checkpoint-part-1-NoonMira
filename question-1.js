// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];


myTodo.push({id:5,todo:"Walk the dog"})
myTodo[3].todo = "Go to the gym";
delete myTodo[4]
console.log(myTodo)
