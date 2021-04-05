"use strict ";
const fib = (n) => {
  let a = 1;
  let b = 1;
  var fib = [];
  fib.push(a, b);
  console.log(fib);
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    fib.push(b);
  }
  console.log(fib);
  return b;
};

console.log(fib(10));

var deadline = "April 3 2021 00:00:00 GMT+0300";
const addDays = 1;
const addHours = 23;
const addMinutes = 59;
const addSeconds = 59;
var newDate = new Date();
deadline = newDate.setDate(newDate.getDate() + addDays);
deadline = newDate.setHours(addHours, addMinutes, addSeconds);
// deadline = Math.floor((deadline / (1000)) % 60) /*? */
// deadline = Math.floor((deadline / (1000 * 60)) %60);
deadline;
