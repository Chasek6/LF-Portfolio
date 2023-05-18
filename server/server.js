const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Define your routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
