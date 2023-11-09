const fs = require('fs');
const crypto = require('crypto');
const net = require('net');
const { generateRandomMessage, encryptMessage } = require('./encryption-utils');

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

function generateEncryptedStream() {
  const messages = [];
  const numberOfMessages = Math.floor(Math.random() * (499 - 49 + 1) + 49);

  for (let i = 0; i < numberOfMessages; i++) {
    const originalMessage = generateRandomMessage(data);
    const sumCheckMessage = { ...originalMessage, secret_key: crypto.createHash('sha256').update(JSON.stringify(originalMessage)).digest('hex') };
    const encryptedMessage = encryptMessage(JSON.stringify(sumCheckMessage), 'your_secret_key_here');

    messages.push(encryptedMessage);
  }

  return messages.join('|');
}

const socket = net.createConnection({ port: 3000, host: 'localhost' }, () => {
  console.log('Emitter connected to Listener');
  setInterval(() => {
    const encryptedStream = generateEncryptedStream();
    socket.write(encryptedStream);
    console.log('Data sent:', encryptedStream);
  }, 10000);
});

socket.on('end', () => {
  console.log('Emitter disconnected from Listener');
});
