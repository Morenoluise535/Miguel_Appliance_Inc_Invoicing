// var passport = require('passport')
// var LocalStrategy = require('passport-local').Strategy;

// var db = require("../models")

// // passport.use(new LocalStrategy(
// <<<<<<< extrahbs
// //   function(useremail, password, done) {
// //     User.findOne({ useremail: useremail }, function (err, user) {
// =======
// //   function(email, password, done) {
// //     User.findOne({ email: email }, function (err, user) {
// >>>>>>> master
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));


var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
// <<<<<<< extrahbs
//     usernameField: "email"
// =======
    usernameField: "email",
// >>>>>>> master
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.Customer.findOne({
      where: {
        email: email
      }
    }).then(function(dbCustomer) {
// <<<<<<< extrahbs
//       // If there's no user with the given useremail
//       if (!dbCustomer) {
//         return done(null, false, {
//           message: "Incorrect useremail."
// =======
      // If there's no user with the given email
      if (!dbCustomer) {
        return done(null, false, {
          message: "Incorrect email."
// >>>>>>> master
        });
      }
      // If there is a user with the given useremail, but the password the user gives us is incorrect
      else if (!dbCustomer.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbCustomer);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(Customer, cb) {
  cb(null, Customer);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;