import { Strategy as LocalStrategy } from 'passport-local';
// import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

//  Local user model
import User from 'models/User';

export default (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match User
      User.findOne({ email })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: 'That email is not registered' });
          }
          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw (err);

            if (isMatch) {
              return done(null, user);
            }
            return done(null, false, { message: 'Password Incorrect' });
          });
        })
        .catch((err) => console.log('AuthError:', err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
