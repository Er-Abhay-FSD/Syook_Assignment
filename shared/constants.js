// constants.js

const IV = Buffer.from('your_iv_here', 'hex'); // Replace 'your_iv_here' with an actual IV in hexadecimal format

const data = [
  { name: 'Jack Reacher', origin: 'Bengaluru', destination: 'Mumbai' },
  // Add more data entries as needed
];

module.exports = { IV, data };
