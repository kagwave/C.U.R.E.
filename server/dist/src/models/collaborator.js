"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const collaboratorSchema = new mongoose_1.default.Schema({
    account_type: { type: String, required: true },
    email: { type: String, required: true },
    collaborator_id: { type: String, required: true },
    name: { type: Object, required: true },
    display_name: { type: String, required: true },
    profile_photo: { type: String, required: true },
    courses: { type: Array },
    accessToken: { type: String },
    refreshToken: { type: String }
});
const Collaborator = mongoose_1.default.model("Collaborator", collaboratorSchema);
exports.default = Collaborator;
//# sourceMappingURL=collaborator.js.map