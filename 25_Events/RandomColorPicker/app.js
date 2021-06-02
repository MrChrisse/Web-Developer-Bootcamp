const btn = document.querySelector('#btn_picker');
const h1 = document.querySelector('h1');

btn.onclick = function () {
  console.log('Clicked');
  let color = makeRandColor();
  h1.innerHTML = color;

  document.body.style.backgroundColor = color;
};

const makeRandColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
