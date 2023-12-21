"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostUrl = exports.serverUrl = exports.secureServerUrl = void 0;
exports.secureServerUrl = (process.env.NODE_ENV === 'production')
    ? 'https://ncsu-cure-72d273a2f021.herokuapp.com/'
    : 'https://localhost:9090';
exports.serverUrl = (process.env.NODE_ENV === 'production')
    ? 'https://ncsu-cure-72d273a2f021.herokuapp.com/'
    : 'http://localhost:8080';
exports.hostUrl = (process.env.NODE_ENV === 'production')
    ? "https://ncsu-cure-72d273a2f021.herokuapp.com/"
    : "http://localhost:3000";
//# sourceMappingURL=urls.js.map