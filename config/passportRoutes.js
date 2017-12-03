const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function (email, password, done) {
        User.findOne({
            "email": email
        }).then( function(dbUser) {
            if (!dbUser) {
                console.log("User not found.");
                return done(null, false, {
                    message: "Username not found."
                });
            } else if (!dbUser.validPassword(password)) {
                console.log("Invalid Password");
                return done(null, false, {
                    message: "Invalid Password"
                });
            }
            return done(null, dbUser);
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOneById(id, function(err, user){
        done(err, user);
    })
});

module.exports = passport;