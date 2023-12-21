"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../controllers/auth"));
const router = express_1.default.Router();
router.get('/google', auth_1.default.google.auth);
router.get('/google/redirect', auth_1.default.google.redirect);
router.get('/user', auth_1.default.getUser);
router.post('/logout', auth_1.default.logout);
exports.default = router;
//# sourceMappingURL=auth.js.map