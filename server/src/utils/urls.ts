export const secureServerUrl = (process.env.NODE_ENV === 'production') 
? 'https://ncsu-cure-72d273a2f021.herokuapp.com'
:  'https://localhost:9090';

export const serverUrl = (process.env.NODE_ENV === 'production') 
? 'https://ncsu-cure-72d273a2f021.herokuapp.com'
:  'http://localhost:8080';

export const hostUrl = (process.env.NODE_ENV === 'production') 
? "https://ncsu-cure-72d273a2f021.herokuapp.com"
: "http://localhost:3000";



