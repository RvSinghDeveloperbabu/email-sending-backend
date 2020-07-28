const express  = require('express');
const app = express();
const keys = require('./config/keys')
require('./routes/authRoutes')(app);
// models
require('./models/User')

// passport
require("./services/passport");

const mongoose = require('mongoose')

mongoose.connect(keys.mongodbURI,
    {useUnifiedTopology: true });


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://emaily_dev:<password>@testingnodereactapp.5lj4w.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT);


