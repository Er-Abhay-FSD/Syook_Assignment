# Encrypted Timeseries

This project is a small backend application that generates and emits an encrypted data stream over a socket, listens to an incoming data stream on a socket, decrypts and decodes it, saves it to a time series database, and emits the saved data to a small frontend app.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed (for the listener service)
- WebSocket-capable browser (for the frontend)

### Installation

1. Clone the repository:
https://github.com/Er-Abhay-FSD/Syook_Assignment
   ```bash

   Install dependencies for the emitter and listener services:

bash
Copy code
cd emitter-service
npm install
cd ../listener-service
npm install
Set up MongoDB (you may need to adjust the MongoDB connection string in listener.js):

bash
Copy code
# Start MongoDB server
mongod
Start the emitter and listener services:

bash
Copy code
# In emitter-service directory
npm start

# In listener-service directory
npm start
Usage
The emitter service generates a periodic data stream of encrypted messages and sends them to the listener service. The listener service decrypts and validates the messages, then saves them to a MongoDB time-series collection.

Frontend
Open the public/index.html file in a WebSocket-capable browser to see real-time updates of the received messages.

Contributing
Contributions are welcome! Please follow the guidelines in CONTRIBUTING.md.

License
This project is licensed under the MIT License - see the LICENSE file for details.


Remember to replace placeholder values like `your-username` and adjust any URLs or paths according to your project structure.

Additionally, you may want to include detailed instructions on setting up the MongoDB database, environment variables, and any other configurations specific to your project.

 
