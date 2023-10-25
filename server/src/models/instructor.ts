import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
  email: {type: String, required: true},
  name: {type: Object, required: true},
});

const Instructor = mongoose.model("Instructor", instructorSchema);
export default Instructor;
