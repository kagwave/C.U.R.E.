import 'express';

declare module 'express-session';
declare module 'uuid';
declare module 'file-system';
declare module 'bcryptjs';

declare module 'nodemailer';
declare module 'mysql';
declare module 'fb';
declare module 'memorystore';

declare module 'express' {
  interface Request {
    user?: any,
    account?: any,
    logOut?: any,
    logIn?: any,
    session: any
  }
}
