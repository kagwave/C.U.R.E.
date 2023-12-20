import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
  account_type: {type: String, required: true},
  email: {type: String, required: true},
  unity_id: {type: String, required: true},
  name: {type: Object, required: true},
  display_name: {type: String, required: true},
  profile_photo: {type: String, required: true},
  courses: {type: Array},
  accessToken: {type: String},
  refreshToken: {type: String}
});

const Instructor = mongoose.model("Instructor", instructorSchema);
export default Instructor;
