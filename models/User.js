const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

// userSchema.pre('save', function(next) {  
//     const user = this,
//           SALT_FACTOR = 5;
  
//     if (!user.isModified('password')) return next();
  
//     bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
//       if (err) return next(err);
  
//       bcrypt.hash(user.password, salt, null, function(err, hash) {
//         if (err) return next(err);
//         user.password = hash;
//         next();
//       });
//     });
//   });
  
  // Method to compare password for login
  userSchema.methods.comparePassword = function(candidatePassword, cb) {  
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) { return cb(err); }
  
      cb(null, isMatch);
    });
  }

 const User = mongoose.model("User", userSchema);

module.exports = User;