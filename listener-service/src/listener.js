// listener.js

const { createConnection } = require('net');
const { decrypt } = require('./decryption');
const { MongoClient } = require('mongodb');
const constants = require('../shared/constants');

const socket = createConnection(3000, 'localhost');

const uri = 'mongodb://localhost:27017/test';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err, db) => {
  if (err) {
    console.error('\x1b[31mFailed to connect to MongoDB:', err); // Red color for error
    return;
  }

  console.log('\x1b[32m🚀 Connected to MongoDB'); // Green color for success

  socket.on('data', async (data) => {
    const secretKey = 'Abhay1234'; // Replace 'your_secret_key_here' with an actual secret key
    const decryptedMessage = decrypt(data, secretKey);

    if (decryptedMessage === null) {
      console.log('\x1b[33m🚫 Invalid message'); // Yellow color for warning
      return;
    }

    try {
      const message = JSON.parse(decryptedMessage);

      const collection = db.collection('messages');

      await collection.insertOne({
        name: message.name,
        origin: message.origin,
        destination: message.destination,
        secret_key: message.secret_key,
        timestamp: new Date(),
      });

      console.log('\x1b[34m📬 Message saved'); // Blue color for info
    } catch (error) {
      console.error('\x1b[31m❌ Error processing message:', error); // Red color for error
    }
  });

  socket.on('close', () => {
    console.log('\x1b[35m🔌 Listener disconnected'); // Magenta color for close
    client.close();
  });
});
