import passport from 'passport'; 
import express from 'express';

import Student from '../src/models/student';
import Instructor from '../src/models/instructor';
import Collaborator from '../src/models/collaborator';

import { serverUrl } from '../src/utils/urls';
import GoogleStrategy from 'passport-google-oauth20';

import { extractUnityId } from '../src/utils/onboarding/extractUnityId';

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

    const userType = req.query.userType;
    console.log(userType);
    let user;

    if (userType == 'student') {
      user = await Student.findOne({"email": email });
    } else if (userType == 'collaborator') {
      user = await Collaborator.findOne({"email": email });
    } else if (userType == 'instrcutor') {
      user = await Instructor.findOne({"email": email });
    }

    //Look for Google Account
    if (!user){
      let display_name = first_name + " " + last_name;
      const newStudent = {
        email: email,
        unity_id: extractUnityId(email),
        display_name: display_name,
        name: {
          first_name: first_name,
          last_name: last_name,
        },
        profile_photo: profile_photo,
        accessToken: accessToken,
        refreshToken: refreshToken
      }
      new Student(newStudent).save();
      return done(null, newStudent);
    //If account does exist, update its information and log it in.
    } else {
      return done(null, user);
    }
  })
);