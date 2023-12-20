import passport from 'passport'; 
import express from 'express';

import Student from '../src/models/student';
import Instructor from '../src/models/instructor';
import Collaborator from '../src/models/collaborator';

import { serverUrl } from '../src/utils/urls';
import GoogleStrategy from 'passport-google-oauth20';

import { extractUnityId, extractGoogleId } from '../src/utils/onboarding/extractId';

//Google  
passport.use('google', new GoogleStrategy.Strategy({
    clientID: process.env.GOOGLE_APP_ID!,
    clientSecret: process.env.GOOGLE_APP_SECRET!,
    callbackURL: `${serverUrl}/auth/google/redirect`,
    passReqToCallback: true,
  }, 
  async (req: express.Request, accessToken: string, refreshToken: string, profile: any, done: any) => {

    const { id, email, given_name: first_name, family_name: last_name, picture: profile_photo, locale } = profile._json;

    if (email === undefined){
      return done(null, null);
    }

    const userType = req.session.userType;
    let user: User | null = null;

    try {

      //Look if account previously exists
      if (userType === 'student') {
        user = await Student.findOne({"email": email });
      } else if (userType === 'collaborator') {
        user = await Collaborator.findOne({"email": email });
      } else if (userType === 'instructor') {
        let id = extractUnityId(email);
        // Check for instructor, return error if not an instructor account
        if (id == "kamuchan" || id == "garabah") {
          user = await Instructor.findOne({"email": email });
        } else {
          return done(null, null, {message: "This is not an instructor account."} );
        }
      }

      //Create user if it doesn't exist
      if (!user) {
        let display_name = first_name + " " + last_name;
        const newUser = {
          account_type: userType,
          email: email,
          display_name: display_name,
          name: {
            first_name: first_name,
            last_name: last_name,
          },
          profile_photo: profile_photo,
          accessToken: accessToken,
          refreshToken: refreshToken
        }

        //set id
        if (userType === 'student' || userType === 'instructor') {
          newUser["unity_id"] = extractUnityId(email);
        } else {
          newUser["collaborator_id"] = extractGoogleId(email);
        }

        switch (userType) {
          case 'student':
            new Student(newUser).save();
            break;
          case "collaborator":
            new Collaborator(newUser).save();
            break;
          case "instructor": 
            new Instructor(newUser).save();
            break;
          default:
            break;
        }
        return done(null, newUser);

      } else {
        //If account does exist, update its information and log it in.
        return done(null, user);
      }

    } catch (err: any) {
      return done(null, null, {message: err.message} );
    }
  })
);