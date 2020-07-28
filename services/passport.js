const passport  = require('passport')
const keys = require('../config/keys')
const GoogleStrategy =require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const  User = mongoose.model('users');

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },(accessToken, refreshToken, profile, done)=>{
       new User({googleId: profile.id}).save();
        console.log("accessToken ==>",accessToken);
        console.log("refresh Token ==>",refreshToken);
        console.log("Profile ==>",profile);
        console.log("done  ==>",done);
    })
);

