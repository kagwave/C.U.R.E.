"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const App_1 = __importDefault(require("./App"));
const _1 = __importDefault(require("./routes/*"));
const config = {
    port: 8080,
    ssl: null,
    router: _1.default
};
const metadata = {
    id: 'CURE',
    name: 'Main',
};
const app = new App_1.default(config, metadata);
app.start();
//# sourceMappingURL=index.js.map