const franc = require('franc');
const langs = require('langs');

const input = process.argv[2];

const langCode = franc(input);
if (langCode != 'und') {
  const language = langs.where('3', langCode);
  console.log(language.name);
} else {
  console.log("Sorry, didn't find a language. Maybe try more words");
}
