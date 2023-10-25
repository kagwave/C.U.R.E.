import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const collaboratorSchema = new mongoose.Schema({
  email: {type: String, required: true},
  name: {type: Object, required: true},
  projects: {type: Array}
});


const Collaborator = mongoose.model("Collaborator", collaboratorSchema);
export default Collaborator;
