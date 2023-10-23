import express from 'express';
import passport from 'passport';

import { hostUrl } from '../utils/urls';

const googleParams = {
  accessType: 'offline', approvalPrompt: 'force', includeGrantedScopes: true
}

let loginRedirect: string;

declare module 'express' {
  interface Request {
    user?: any,
    account?: any,
    logOut?: any,
    logIn?: any,
  }
}

const authenticationController = {

  google: {

    auth (req: express.Request, res: express.Response, next: express.NextFunction) {
      console.log(req.query)
      passport.authenticate('google-auth', { 
        scope : ['email', 'profile'], ...googleParams
      })
    },
  
    redirect (req: express.Request, res: express.Response, next: express.NextFunction) {
      passport.authenticate('google-auth', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { 
          return res.redirect(`${hostUrl}/login`);
        } else {
          req.logIn(user, function(err) {
            if (err) { 
              return next(err); 
            } else {
              return res.redirect(`${hostUrl}`);
            }
          });
        }
      })(req, res, next)
    },

  }

}

export default authenticationController;