const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });