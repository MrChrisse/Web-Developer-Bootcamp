const btn2 = document.querySelector('#btn_v2');
const btn3 = document.querySelector('#btn_v3');
const input = document.querySelector('#input');

btn2.onclick = function () {
  console.log('YOU CLICKED ME');
};

//better EventListener (multiple Listeners for one element)
btn3.addEventListener('click', function () {
  alert('CLICKED');
});

input.addEventListener('keydown', function (evt) {
  console.log(evt.key);
  console.log(evt.code);
});

window.addEventListener('keydown', function (evt) {
  switch (evt.code) {
    case 'ArrowUp':
      console.log('UP');
      break;
    case 'ArrowDown':
      console.log('DOWN');
      break;
    default:
      console.log('IGNORED');
      break;
  }
});
