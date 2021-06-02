const btn2 = document.querySelector('#btn_v2');
const btn3 = document.querySelector('#btn_v3');

btn2.onclick = function () {
  console.log('YOU CLICKED ME');
};

//better EventListener (multiple Listeners for one element)
btn3.addEventListener('click', function () {
  alert('CLICKED');
});
