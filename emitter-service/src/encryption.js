const crypto = require('crypto');
const constants = require('../shared/constants');

async function encrypt(message, secretKey) {
  const cipher = crypto.createCipheriv('aes-256-ctr', secretKey, constants.IV);
  let encryptedMessage = cipher.update(message, 'utf8', 'hex');
  encryptedMessage += cipher.final('hex');
  return encryptedMessage;
}

async function decrypt(message, secretKey) {
  const decipher = crypto.createDecipheriv('aes-256-ctr', secretKey, constants.IV);
  let decryptedMessage = decipher.update(message, 'hex', 'utf8');
  decryptedMessage += decipher.final('utf8');
  return decryptedMessage;
}

module.exports = { encrypt, decrypt };
