const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    // route for logging out
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    // for testing the authentication flow
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
