"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const instructorSchema = new mongoose_1.default.Schema({
    account_type: { type: String, required: true },
    email: { type: String, required: true },
    unity_id: { type: String, required: true },
    name: { type: Object, required: true },
    display_name: { type: String, required: true },
    profile_photo: { type: String, required: true },
    courses: { type: Array },
    accessToken: { type: String },
    refreshToken: { type: String }
});
const Instructor = mongoose_1.default.model("Instructor", instructorSchema);
exports.default = Instructor;
//# sourceMappingURL=instructor.js.map