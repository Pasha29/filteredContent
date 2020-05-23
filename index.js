const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_PASS = process.env.MONGO_PASS;

mongoose.connect(`mongodb+srv://pashafinogenov:${MONGO_PASS}@cluster0-jfhg0.mongodb.net/contentdb`, { //mongodb://localhost/contentdb
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false   })

app.use(bodyParser.json());
app.use('/api', require('./api.js'));

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
