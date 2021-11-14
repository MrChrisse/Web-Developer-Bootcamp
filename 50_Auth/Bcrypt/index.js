const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 10);
  console.log(hash);
};

const login = async (pw, hashedPw) => {
  const res = await bcrypt.compare(pw, hashedPw);
  if (res) {
    console.log('Logged in');
  } else {
    console.log('Incorrect');
  }
};

hashPassword('monkey');

login('monkey', '$2b$10$ArCb0WVXcpWzkG1cZBarhO9CglvFoh7.CEuFwY09mA8XXnPmmPPo6');
