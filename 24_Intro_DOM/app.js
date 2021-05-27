const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const firstPara = document.querySelector('p');
const allPara = document.querySelectorAll('p');

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
  link.style.color = 'green';
  link.style.textDecorationColor = 'magenta';
  link.style.textDecorationStyle = 'wavy';
}

window.getComputedStyle(h1);

const h2 = document.querySelector('h2');
h2.classList.add('tocnumber');

const lis = document.querySelectorAll('li');

for (let el of lis) {
  el.classList.toggle('highlight');
}
