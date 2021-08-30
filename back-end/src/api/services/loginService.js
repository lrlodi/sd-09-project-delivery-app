const { createHash } = require('crypto');
const { User } = require('../../database/models');

const generateToken = require('../middlewares/generateToken');

const login = async (email, password) => {
  const cryptoPassword = createHash('md5').update(password).digest('hex');

  const foundUserData = await User.findOne({ where: { email, password: cryptoPassword } });

  if (!foundUserData) {
    throw Object.assign(
      new Error('Invalid email or password'),
      { code: 'notFound' },
   );
  }
  
  const { password: _, ...userData } = foundUserData.dataValues;

  const token = await generateToken(userData);

  return token;
};

module.exports = { login };
