const express = require('express');
const dotenv = require('dotenv');
const compression = require('compression');
const pool = require('./configs/database')

//insert import routes
const exampleRoutes = require('./routes/exampleRoutes');

dotenv.config({ path: '.env.local' });

connection.connect(error => {
    if(error) throw error;
    console.log("connecté a la base de donnée")
})

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());


// insert routes here
app.use('/entities', exampleRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
