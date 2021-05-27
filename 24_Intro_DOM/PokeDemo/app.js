const div = document.querySelector('#pokeDiv');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for (let i = 2; i < 200; i++) {
  const img = document.createElement('img');
  img.src = `${baseUrl}${i}.png`;
  div.appendChild(img);
}
