const h1 = document.querySelector('h1');
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

const ul = document.querySelector('ul');
const lis = document.querySelectorAll('li');

for (let li of lis) {
  li.addEventListener('click', function () {
    li.remove();
  });
}

tweetsContainer.addEventListener('click', function (e) {
  e.target.remove();
});

tweetForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = '';
  tweetInput.value = '';
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);

  tweetsContainer.append(newTweet);
};

const input = document.querySelector('input');

input.addEventListener('change', function (e) {
  console.log('Changed');
});

input.addEventListener('input', function (e) {
  h1.innerText = input.value;
});
