import passport from 'passport'; 
import { serverUrl } from '../src/utils/urls';
import GoogleStrategy from 'passport-google-oauth20';

//Google  
passport.use('google-auth', new GoogleStrategy.Strategy({
  clientID: process.env.GOOGLE_APP_ID!,
  clientSecret: process.env.GOOGLE_APP_SECRET!,
  callbackURL: `${serverUrl}/auth/google/redirect`,
  
  }, 
  function (accessToken: string, refreshToken: string, profile: any, done: any) {

    const { email, given_name: first_name, family_name: last_name, picture: profile_photo, locale } = profile._json;

    if (email === undefined){
      return done(null, null);
    }

    let onboardingInfo: any = {
      email: email,
      display_name: first_name + " " + last_name,
      first_name: first_name,
      last_name: last_name
    }

    const googleAccount = {
      id: profile.id,
      email: email,
      name: {given_name: first_name, family_name: last_name},
      location: locale,
      profile_photo: profile_photo,
      access_token: accessToken,
      refresh_token: refreshToken
    }
    
  })
);