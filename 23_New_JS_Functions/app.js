//Default params
function rollDie(sideNums = 6) {
  return Math.floor(Math.random() * sideNums) + 1;
}

const nums = [1, 4, 7, 2, 6, 4];
const nums2 = [23, 21];

//Not working!
console.log(Math.max(nums));

//Using spreads
console.log(Math.max(...nums));

const moreNumbers = [...nums, ...nums2];

const dataFromForm = {
  email: 'abc@mail.de',
  password: 'qwert',
  username: 'abcDEF',
};

const newUser = { ...dataFromForm, id: 23455, isAdmin: false };

//one to multiple arguments
function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}

//get values of object in separate variables
const { email, password, username } = dataFromForm;
