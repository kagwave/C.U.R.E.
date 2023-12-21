"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const student_1 = __importDefault(require("../src/models/student"));
const instructor_1 = __importDefault(require("../src/models/instructor"));
const collaborator_1 = __importDefault(require("../src/models/collaborator"));
const urls_1 = require("../src/utils/urls");
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const extractId_1 = require("../src/utils/onboarding/extractId");
//Google  
passport_1.default.use('google', new passport_google_oauth20_1.default.Strategy({
    clientID: process.env.GOOGLE_APP_ID,
    clientSecret: process.env.GOOGLE_APP_SECRET,
    callbackURL: `${urls_1.serverUrl}/auth/google/redirect`,
    passReqToCallback: true,
}, async (req, accessToken, refreshToken, profile, done) => {
    const { id, email, given_name: first_name, family_name: last_name, picture: profile_photo, locale } = profile._json;
    if (email === undefined) {
        return done(null, null);
    }
    const userType = req.session.userType;
    let user = null;
    try {
        //Look if account previously exists
        if (userType === 'student') {
            user = await student_1.default.findOne({ "email": email });
        }
        else if (userType === 'collaborator') {
            user = await collaborator_1.default.findOne({ "email": email });
        }
        else if (userType === 'instructor') {
            let id = (0, extractId_1.extractUnityId)(email);
            // Check for instructor, return error if not an instructor account
            if (id == "kamuchan" || id == "garabah") {
                user = await instructor_1.default.findOne({ "email": email });
            }
            else {
                return done(null, null, { message: "This is not an instructor account." });
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
            };
            //set id
            if (userType === 'student' || userType === 'instructor') {
                newUser["unity_id"] = (0, extractId_1.extractUnityId)(email);
            }
            else {
                newUser["collaborator_id"] = (0, extractId_1.extractGoogleId)(email);
            }
            switch (userType) {
                case 'student':
                    new student_1.default(newUser).save();
                    break;
                case "collaborator":
                    new collaborator_1.default(newUser).save();
                    break;
                case "instructor":
                    new instructor_1.default(newUser).save();
                    break;
                default:
                    break;
            }
            return done(null, newUser);
        }
        else {
            //If account does exist, update its information and log it in.
            return done(null, user);
        }
    }
    catch (err) {
        return done(null, null, { message: err.message });
    }
}));
//# sourceMappingURL=passport.js.map