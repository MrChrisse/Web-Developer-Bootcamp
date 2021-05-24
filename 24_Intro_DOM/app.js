const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const firstPara = document.querySelector('p');
const allPara = document.querySelectorAll('p');
