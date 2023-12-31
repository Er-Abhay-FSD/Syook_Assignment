Markdown
## Emitter Service

This Node.js app emits a stream of encrypted messages. The messages are generated from the `data.json` file. The encryption is done using the AES-256-CTR algorithm with the secret key specified in the `constants.js` file.

To run the app, simply run the following command:

Use code with caution. Learn more
node src/emitter.js

The app will start emitting messages to the socket specified in the constants.js file.

Usage
To use the emitter service, you can create a socket connection to the specified address and port. Once the connection is established, you can start reading the stream of messages.

The following code shows how to create a socket connection to the emitter service:

javascript
const net = require('net');

const socket = new net.Socket();
socket.connect(constants.PORT, constants.ADDRESS);

socket.on('data', (data) => {
// Decrypt the message
const decryptedMessage = await decrypt(data, constants.SECRET_KEY);

// Process the message
});