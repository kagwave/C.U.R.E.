import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {type: String, required: true},
  id: {type: String, required: true},
  students: {type: Array, required: true},
  collaborators: {type: Array, required: true}
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
