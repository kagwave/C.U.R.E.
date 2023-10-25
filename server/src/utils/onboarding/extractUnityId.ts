export const extractUnityId = (email: string) => {
  const ncsuEmailRegex = /(.*)@ncsu\.edu/;
  const match = email.match(ncsuEmailRegex);
  if (match && match[1]) {
    return match[1];
  } else {
    throw new Error('Invalid NCSU email address format.');
  }
}