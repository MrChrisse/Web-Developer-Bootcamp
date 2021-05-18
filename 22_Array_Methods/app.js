const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (el) {
  console.log(el);
});

const doubles = numbers.map(function (num) {
  return num * 2;
});

//array-function syntax
const add = (x, y) => {
  return x + y;
};

const square = (x) => {
  return x ** 2;
};

//other shorter syntax
const square2 = (x) => x * x;

console.log('Hello, but wait');
setTimeout(() => {
  console.log('I waited');
}, 3000);

console.log('Finished waiting');

// const intervalId = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

//clearInterval(intervalId);

//Filter-methods
const lessTen = numbers.filter((n) => {
  return n < 10;
});

//simpler syntax
const lessTen2 = numbers.filter((n) => n < 10);
