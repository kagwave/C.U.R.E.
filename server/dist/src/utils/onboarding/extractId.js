"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractGoogleId = exports.extractUnityId = void 0;
const extractUnityId = (email) => {
    const ncsuEmailRegex = /(.*)@ncsu\.edu/;
    const match = email.match(ncsuEmailRegex);
    if (match && match[1]) {
        return match[1];
    }
    else {
        throw new Error('Invalid NCSU email address format.');
    }
};
exports.extractUnityId = extractUnityId;
const extractGoogleId = (email) => {
    const gmailRegex = /(.*)@gmail\.com/;
    const match = email.match(gmailRegex);
    if (match && match[1]) {
        return match[1];
    }
    else {
        throw new Error('Invalid Google email address format.');
    }
};
exports.extractGoogleId = extractGoogleId;
//# sourceMappingURL=extractId.js.map