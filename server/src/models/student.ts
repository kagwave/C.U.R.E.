import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  account_type: {type: String, required: true},
  email: {type: String, required: true},
  unity_id: {type: String, required: true},
  name: {type: Object, required: true},
  display_name: {type: String, required: true},
  profile_photo: {type: String, required: true},
  projects: {type: Array},
  accessToken: {type: String},
  refreshToken: {type: String}
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
