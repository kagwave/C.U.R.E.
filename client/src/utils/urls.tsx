export const serverUrl = (process.env.NODE_ENV === 'development') 
? 'http://localhost:8080'
: 'https://ncsu-cure-72d273a2f021.herokuapp.com/';

export const hostUrl = (process.env.NODE_ENV === 'production') 
? "https://ncsu-cure-72d273a2f021.herokuapp.com/"
: "http://localhost:3000";