"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const urls_1 = require("../utils/urls");
const googleParams = {
    accessType: 'offline', approvalPrompt: 'force', includeGrantedScopes: true
};
let loginRedirect;
const authenticationController = {
    getUser(req, res) {
        if (req.user) {
            let currentUser = req.user;
            delete currentUser.accessToken;
            delete currentUser.refreshToken;
            delete currentUser["_id"];
            res.json(currentUser);
        }
        else {
            res.json({});
        }
    },
    logout(req, res, next) {
        req.logOut(function (err) {
            if (err) {
                console.log(err);
                return res.status(404).send("Error logging out.");
            }
            else {
                res.status(200).send("OK");
            }
        });
    },
    google: {
        auth: (req, res, next) => {
            // set user type
            req.session.userType = req.query.userType;
            passport_1.default.authenticate('google', {
                scope: ['email', 'profile'], ...googleParams
            })(req, res, next);
        },
        redirect(req, res, next) {
            passport_1.default.authenticate('google', (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    //res.cookie('errorMessage', info.message, { httpOnly: true });
                    return res.redirect(`${urls_1.hostUrl}/login/`);
                }
                else {
                    req.logIn(user, function (err) {
                        if (err) {
                            return next(err);
                        }
                        else {
                            return res.redirect(`${urls_1.hostUrl}`);
                        }
                    });
                }
            })(req, res, next);
        }
    }
};
exports.default = authenticationController;
//# sourceMappingURL=auth.js.map