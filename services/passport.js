const passport  = require('passport')
const keys = require('../config/keys')
const GoogleStrategy =require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const  User = mongoose.model('users');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(user=> done(null,user));
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },(accessToken, refreshToken, profile, done)=>{
        User.findOne({googleId: profile.id})
            .then((existingUser)=>{
                if (existingUser){
                    // we don't create any user into mongoDB
                    done(null,existingUser)
                }else {
                    // we create any user into mongoDB
                    new User({googleId: profile.id}).save()
                    .then(newUser => done(null,newUser));
                }
            })
        console.log("accessToken ==>",accessToken);
        console.log("refresh Token ==>",refreshToken);
        console.log("Profile ==>",profile);
        console.log("done  ==>",done);
    })
);

