const title = document.querySelector('#title');
const button = document.querySelector('button');
const searchquery = document.querySelector('input');

const addNewJoke = async () => {};

const getTVShow = async (query) => {
  try {
    //Trump Quotes
    const res = await axios.get('http://api.tvmaze.com/search/shows?q=' + query);
    console.log(res);
    return res.data;
    // const config = { headers: { Accept: 'application/json' } };
    // const res = await axios.get('https://icanhazdadjoke.com/', config);
    // return res.data.joke;
  } catch (e) {
    return 'NO TV Shows Available';
  }
};

button.addEventListener('click', async function (e) {
  try {
    const query = searchquery.value;

    console.log(query);
    const TVShow = await getTVShow(query);
    title.innerText = '';
    title.append(TVShow.name);
    deleteImages();
    makeImages(TVShow);
  } catch (e) {
    console.log('ERROR, sorry... ', e);
  }
});

const makeImages = (shows) => {
  for (let result of shows) {
    const img = document.createElement('img');
    img.src = result.show.image.medium;
    document.body.append(img);
  }
};

const deleteImages = () => {
  const images = document.querySelectorAll('img');
  for (let img of images) {
    img.remove();
  }
};
