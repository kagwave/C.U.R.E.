export const extractUnityId = (email: string) => {
  const ncsuEmailRegex = /(.*)@ncsu\.edu/;
  const match = email.match(ncsuEmailRegex);
  if (match && match[1]) {
    return match[1];
  } else {
    throw new Error('Invalid NCSU email address format.');
  }
}

export const extractGoogleId = (email: string) => {
  const gmailRegex = /(.*)@gmail\.com/;
  const match = email.match(gmailRegex);
  if (match && match[1]) {
    return match[1];
  } else {
    throw new Error('Invalid Google email address format.');
  }
}