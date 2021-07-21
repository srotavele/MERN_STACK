const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

require('./config/mongoose.config');
const product = require('./server/routes/products.routes')
product(app); 

app.listen(port, () => console.log(`Express Listening on ${port}`) )


















app.listen(port, () => console.log(`Listening on port: ${port}`) );
