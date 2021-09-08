import passport from 'passport';

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env['CLIENT_ID'],
    clientSecret: process.env['CLIENT_SECRET'],
    callbackURL: process.env['CALLBACK_URL'],
    passReqToCallback: true
  },
  (request: any, accessToken: any, refreshToken: any, profile: any, done: any) => done(null, profile)
));
