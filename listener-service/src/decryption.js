const crypto = require('crypto');

const decrypt = (data, secretKey, iv) => {
  const decipher = crypto.createDecipheriv('aes-256-ctr', secretKey, iv);

  let decryptedData = decipher.update(data, 'hex', 'utf8');
  decryptedData += decipher.final('utf8');

  return decryptedData;
};

module.exports = { decrypt };
