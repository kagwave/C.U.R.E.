require('dotenv').config();
//const envPath = path.resolve(__dirname, '..', '.env');
//dotenv.config({ path: envPath });

import { ServiceConfig, ServiceMetadata } from "./types/services";

import App from "./App";
import router from './routes/*';

const config: ServiceConfig = {
  port: 8080,
  ssl: null,
  router: router
}

const metadata: ServiceMetadata = {
  id: 'CURE',
  name: 'Main',
}

const app = new App(config, metadata);
app.start();