//  check if user trying to access the admin panel is already loged in
//  if the are not it redirects them to the login page
module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'Please log in to view this resource');
        res.redirect('/user/login');
    }
}