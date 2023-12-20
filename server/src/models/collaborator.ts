import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const collaboratorSchema = new mongoose.Schema({
  account_type: {type: String, required: true},
  email: {type: String, required: true},
  collaborator_id: {type: String, required: true},
  name: {type: Object, required: true},
  display_name: {type: String, required: true},
  profile_photo: {type: String, required: true},
  courses: {type: Array},
  accessToken: {type: String},
  refreshToken: {type: String}
});


const Collaborator = mongoose.model("Collaborator", collaboratorSchema);
export default Collaborator;
