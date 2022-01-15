import mongoose from "mongoose";
const Schema = mongoose.Schema;
const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("student", studentSchema);
export default Student;
