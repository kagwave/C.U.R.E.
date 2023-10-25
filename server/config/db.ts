import mongoose from 'mongoose';

import { ConnectOptions } from 'mongoose';

//MongoDB
const mongooseConnect = async (uri: string, options?: ConnectOptions) => {
  if (!options) {
    options = { 
      keepAlive: true, 
      keepAliveInitialDelay: 300000 
    }
  }
  mongoose.set('strictQuery', false)
  await mongoose.connect(uri!, options);
  const connection = mongoose.connection;
  connection.once('open', () => {console.log("MongoDB database connection established successfully");});
  return;
}

export { mongooseConnect };