var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(
  "auth-google",
  new GoogleStrategy({
      clientID: "1022908333497-4or2vfuevg330t38ga3ihcb0mth30tqv.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3100/auth/google/callback",
      passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});