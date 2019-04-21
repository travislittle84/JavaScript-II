// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let name = 'Bob Closure';

const sayName = () => {
  console.log(name);
}
sayName();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count ++;
    console.log(count);
  }
};
const myCounter = counter();
myCounter();
myCounter();
myCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  function changeBy(amount) {
    count += amount;
  }
  
  return {
    increment: function() {
      changeBy(1);
      console.log(`Increment: ${count}`)
    },
    decrement: function() {
      changeBy(-1);
      console.log(`Decrement: ${count}`)
    }
  };
};
const theCounter = counterFactory();
theCounter.increment();
theCounter.increment();
theCounter.increment();
theCounter.decrement();
