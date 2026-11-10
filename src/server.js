// 1. Load the secrets from the .env file
require('dotenv').config(); 

// 2. Import the Express application
const app = require('./app');

// 3. Define the port (fallback to 8080 if .env is missing)
const PORT = process.env.PORT || 8080;

// 4. Start listening for network traffic
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});