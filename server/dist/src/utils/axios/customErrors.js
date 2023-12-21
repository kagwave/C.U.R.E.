"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// defining a custom error handler for all APIs
const ErrorHandler = (error) => {
    const statusCode = error.response?.status;
    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error);
    }
    return Promise.reject(error);
};
exports.default = ErrorHandler;
//# sourceMappingURL=customErrors.js.map