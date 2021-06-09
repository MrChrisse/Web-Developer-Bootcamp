const req = new XMLHttpRequest();

req.onload = function () {
  console.log('ALL DONE');
  console.log(this);
  const data = JSON.parse(this.responseText);
  console.log(data.ticker.price);
};

req.onerror = function () {
  console.log('ERROR');
  console.log(this);
};

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();

// req.open('GET', 'https://apiblabla/api/ticker/btc-usd');
// req.send();

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
  .then((res) => {
    console.log('RESPONSE, Waiting to parse: ', res);
    return res.json();
  })
  .then((data) => {
    console.log('DATA PARSED... ', data);
    console.log(data.ticker.price);
  })
  .catch((e) => {
    console.log('ERROR: ', e);
  });

const fetchBitcoinPrice = async () => {
  const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
  const data = await res.json();
  console.log(data.ticker.price);
};

axios
  .get('https://api.cryptonator.com/api/ticker/btc-usd')
  .then((res) => {
    console.log('Axios1', res.data.ticker.price);
  })
  .catch((err) => {
    console.log('ERROR', err);
  });

const fetchBitcoinPrice2 = async () => {
  try {
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
    console.log('Axios2', res.data.ticker.price);
  } catch (e) {
    console.log('ERROR', err);
  }
};

fetchBitcoinPrice2();

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
  const jokeText = await getDadJokes();
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJokes = async () => {
  try {
    //Trump Quotes
    const res = await axios.get('https://www.tronalddump.io/random/quote');
    console.log(res);
    return res.data.value;
    // const config = { headers: { Accept: 'application/json' } };
    // const res = await axios.get('https://icanhazdadjoke.com/', config);
    // return res.data.joke;
  } catch (e) {
    return 'NO DAD JOKES Available';
  }
};

button.addEventListener('click', addNewJoke);
