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

// window.getComputedStyle(h1);

// const h2 = document.querySelector('h2');
// h2.classList.add('tocnumber');

// const lis = document.querySelectorAll('li');

// for (let el of lis) {
//   el.classList.toggle('highlight');
// }

const squareImg = document.querySelector('.square');
console.log(squareImg.nextElementSibling);

const newImg = document.createElement('img');
newImg.src =
  'https://images.unsplash.com/photo-1621569900182-b4a7e554287e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';
document.body.appendChild(newImg);
newImg.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'I am new';
document.body.appendChild(newH3);

const p = document.querySelector('p');
p.append('HELLO HERE I AM');
