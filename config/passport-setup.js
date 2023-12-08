const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../model/userModel.js");

passport.serializeUser((user, done) => {
  done(null, {
    id: user.id,
  });
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/redirect/google",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (!currentUser) {
          new User({
            firstname: profile.name.familyName,
            lastname: profile.name.givenName,
            username: profile.displayName,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log(`User Created `, newUser);
              done(null, newUser);
            });
        } else {
          console.log(`Current User`, currentUser);
          done(null, currentUser);
        }
      });
    }
  )
);
