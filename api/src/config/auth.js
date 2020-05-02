/**
 * Check if user trying to access the admin panel is logged in as admin.
 * If not, redirect them to the login page.
 */
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log('checking auth');
    return next();
  }
  req.flash('error_msg', 'Please log in to view this resource');
  res.redirect('/user/login');
};

export default ensureAuthenticated;
