"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//MongoDB
const mongooseConnect = (uri, options) => {
    if (!options) {
        options = {};
    }
    mongoose_1.default.set('strictQuery', false);
    mongoose_1.default.connect(uri, options);
    const connection = mongoose_1.default.connection;
    connection.once('open', () => { console.log("MongoDB database connection established successfully"); });
    return;
};
exports.mongooseConnect = mongooseConnect;
//# sourceMappingURL=db.js.map