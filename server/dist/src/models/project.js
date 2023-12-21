"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const projectSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    id: { type: String, required: true },
    students: { type: Array, required: true },
    collaborators: { type: Array, required: true }
});
const Project = mongoose_1.default.model("Project", projectSchema);
exports.default = Project;
//# sourceMappingURL=project.js.map