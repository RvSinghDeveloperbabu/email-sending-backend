const express  = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const passport = require('passport');
const cookiesSession = require('cookie-session');

// models
require('./models/User')
// passport
require("./services/passport");

const app = express();

require('./routes/authRoutes')(app);

app.use(cookiesSession({
    maxAge: 30*24*60*60*1000,
    keys:[keys.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongodbURI,{useUnifiedTopology: true });

const PORT = process.env.PORT || 3001;

app.listen(PORT);


