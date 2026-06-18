const prices=[200, 450, 75, 1200, 30]
const  addPrices= prices.map(prices=> prices * 1.10)
console.log(addPrices)

const names= ["aisha", "brian", "clara"]
const capitalise= names.map(name=> name[0].toUpperCase() + name.slice(1))
console.log(capitalise)

const numbers=[23, 45, 33, 56, 87]
const result= numbers.map(num => `Number: ${num}`)
console.log(result)

const ages= [23, 2, 13, 34, 45]
const adults= ages.filter(age=> age >=18)
console.log(adults)

const words= ["working", "run", "eating", "skip"]
const longerWords= words.filter(word=> word.length >4)
console.log(longerWords)

const students= [
    {name: "lincy", score: 56},
    {name: "joe", score: 99},
    {name: "noel", score:45},
    {name: "samantha", score: 88}
]
const passed= students.filter(student=> student.score>=50.)
console.log(passed)


const stdents =[
    {name: "nancy", score:44},
    {name: "brian", score:55},
    {name: "joan", score: 90}
]
const studentName= stdents.find(student=> student.name=== "brian")
console.log(studentName)
const scores= stdents.find(student=> student.score>80)
console.log(scores)
// const otherStudent= stdents.find(student=> student.name=== Zoe)
// console.log(otherStudent)

const cart= [250, 100, 75, 400]
const total= cart.reduce((acc, current) => acc+ current,0)
console.log(total)
const maxValue = cart.reduce((acc, current) => {
  return current > acc ? current : acc;
});
console.log(maxValue);

const arrWords=["she", "is", "working"]
const sentence= arrWords.reduce((acc,current)=>{
    return acc + " " + current
})
console.log(sentence)


const stuObject=[
    {name:"jane", score: 98},
    {name:"riley", score:87},
    {name:"liam", score: 44}
]
const passed2= stuObject
.filter(student=> student.score>=50)
.map(student=> student.name)
console.log(passed2)

const arrNumbers=[34, 45, 66, 98, 31]
const evens= arrNumbers
.filter(number=> number %2===0)
.map(number=> number * number)
console.log(evens)



const cartItems = [
  { name: "Laptop", price: 80000, quantity: 1, inStock: true },
  { name: "Mouse", price: 1500, quantity: 2, inStock: true },
  { name: "Keyboard", price: 3500, quantity: 1, inStock: false },
  { name: "Headphones", price: 5000, quantity: 2, inStock: true },
  { name: "Monitor", price: 25000, quantity: 1, inStock: true }
];

const inStockItems = cartItems.filter(item => item.inStock);

console.log("In-stock items:");
console.log(inStockItems);
const subtotals = inStockItems.map(item => ({
  name: item.name,
  subtotal: item.price * item.quantity
}));

console.log("Subtotals:");
console.log(subtotals);
const grandTotal = subtotals.reduce(
  (total, item) => total + item.subtotal,
  0
);

console.log(`Grand Total: KES ${grandTotal}`);
const highestPrice = Math.max(...cartItems.map(item => item.price));

const mostExpensiveItem = cartItems.find(
  item => item.price === highestPrice
);

console.log("Most Expensive Item:");
console.log(mostExpensiveItem);
console.log("===== RECEIPT =====");

inStockItems.forEach(item => {
  const subtotal = item.price * item.quantity;
  console.log(
    `${item.name} | ${item.quantity} x KES ${item.price} = KES ${subtotal}`
  );
});

console.log("-------------------");
console.log(`TOTAL: KES ${grandTotal}`);