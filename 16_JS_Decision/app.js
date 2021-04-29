const password = prompt('Please Enter a new password');

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('Valid PW');
  } else {
    console.log('Bad job, no spaces please');
  }
} else {
  console.log('not long enough');
}
