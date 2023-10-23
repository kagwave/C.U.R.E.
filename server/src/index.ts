import dotenv from 'dotenv';
dotenv.config();

import { ServiceConfig, ServiceMetadata } from "./types/services";
import App from "./App";
import router from './routes/*';

const options: ServiceConfig = {
  port: 8080,
  ssl: null,
  router: router
}

const metadata: ServiceMetadata = {
  id: 'CURE',
  name: 'Main',
}

const app = new App(options, metadata);
app.start();