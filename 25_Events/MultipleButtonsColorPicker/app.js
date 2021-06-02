const btns = document.querySelectorAll('button');
const h1 = document.querySelector('h1');

for (let button of btns) {
  button.addEventListener('click', colorize);
}

const makeRandColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
