const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
