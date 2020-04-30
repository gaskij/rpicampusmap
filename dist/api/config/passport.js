"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_local_1 = require("passport-local");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var User_1 = __importDefault(require("models/User"));
exports.default = (function (passport) {
    passport.use(new passport_local_1.Strategy({ usernameField: 'email' }, function (email, password, done) {
        User_1.default.findOne({ email: email })
            .then(function (user) {
            if (!user) {
                return done(null, false, { message: 'That email is not registered' });
            }
            bcryptjs_1.default.compare(password, user.password, function (err, isMatch) {
                if (err)
                    throw (err);
                if (isMatch) {
                    return done(null, user);
                }
                return done(null, false, { message: 'Password Incorrect' });
            });
        })
            .catch(function (err) { return console.log('AuthError:', err); });
    }));
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {
        User_1.default.findById(id, function (err, user) {
            done(err, user);
        });
    });
});
//# sourceMappingURL=passport.js.map