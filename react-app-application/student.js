import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        age: {
            type: Number,
            required: true,
            min: 0
        },

        course: {
            type: String,
            required: true
        }
    },
    {
        collection: "student"
    }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;