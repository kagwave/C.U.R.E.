"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosClient = void 0;
const axios_1 = __importDefault(require("axios"));
//import axiosRetry from 'axios-retry';
//import errorHandler from './customErrors';
const axios_retry_1 = __importDefault(require("axios-retry"));
const createAxiosInstance = () => {
    let url = 'http://localhost:8080';
    const instance = axios_1.default.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true,
    });
    // interceptor to handle errors
    instance.interceptors.response.use((response) => response, (error) => {
        console.log(error);
        return Promise.reject(error);
    });
    (0, axios_retry_1.default)(instance, {
        retries: 3,
        retryDelay: (retryCount) => {
            console.log(`Retry attempt: ${retryCount}`);
            // waiting 2 seconds between each retry
            return 2000;
        },
        retryCondition: (error) => {
            // retrying only on 503 HTTP errors
            return error.response.status === 503;
        },
    });
    return instance;
};
exports.axiosClient = createAxiosInstance();
//# sourceMappingURL=axiosClient.js.map