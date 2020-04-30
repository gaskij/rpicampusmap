"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        console.log('checking auth');
        return next();
    }
    req.flash('error_msg', 'Please log in to view this resource');
    res.redirect('/user/login');
};
exports.default = ensureAuthenticated;
//# sourceMappingURL=auth.js.map