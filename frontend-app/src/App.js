// app.js

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const { data } = require('./shared/constants');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
  console.log('WebSocket connected');

  // Send initial data to the connected client
  sendInitialData(ws);

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Process the received message if needed
  });

  ws.on('close', () => {
    console.log('WebSocket disconnected');
  });
});

function sendInitialData(ws) {
  const initialData = getRandomMessages();
  ws.send(JSON.stringify(initialData));
}

function getRandomMessages() {
  const randomMessages = [];

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const message = data[randomIndex];
    message.timestamp = new Date();
    randomMessages.push(message);
  }

  return randomMessages;
}

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
