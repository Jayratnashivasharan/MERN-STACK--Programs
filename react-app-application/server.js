import express from "express";
import mongoose from "mongoose";
import Student from "./student.js";

const app = express();


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(express.json());


// ==========================================
// MONGODB CONNECTION
// ==========================================

mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
    .then(() => {
        console.log("MongoDB connected successfully");
        console.log("Database:", mongoose.connection.name);
        console.log("Collection: student");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });


// ==========================================
// HOME
// ==========================================

app.get("/", (req, res) => {
    res.send("Student CRUD API is running");
});


// ==========================================
// CREATE STUDENT
// POST /student
// ==========================================

app.post("/student", async (req, res) => {

    try {

        const student = new Student({
            name: req.body.name,
            age: req.body.age,
            course: req.body.course
        });

        const savedStudent = await student.save();

        res.status(201).json({
            message: "Student created successfully",
            student: savedStudent
        });

    } catch (err) {

        res.status(500).json({
            message: "Error creating student",
            error: err.message
        });

    }

});


// ==========================================
// GET ALL STUDENTS
// GET /student
// ==========================================

app.get("/student", async (req, res) => {

    try {

        console.log("GET /student called");

        const students = await Student.find();

        console.log("Students found:", students);

        res.status(200).json(students);

    } catch (err) {

        console.log("Error:", err);

        res.status(500).json({
            message: "Error getting students",
            error: err.message
        });

    }

});


// ==========================================
// GET ONE STUDENT
// GET /student/:id
// ==========================================

app.get("/student/:id", async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json(student);

    } catch (err) {

        res.status(500).json({
            message: "Error getting student",
            error: err.message
        });

    }

});


// ==========================================
// UPDATE STUDENT
// PUT /student/:id
// ==========================================

app.put("/student/:id", async (req, res) => {

    try {

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                age: req.body.age,
                course: req.body.course
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json({
            message: "Student updated successfully",
            student: student
        });

    } catch (err) {

        res.status(500).json({
            message: "Error updating student",
            error: err.message
        });

    }

});


// ==========================================
// DELETE STUDENT
// DELETE /student/:id
// ==========================================

app.delete("/student/:id", async (req, res) => {

    try {

        const student = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json({
            message: "Student deleted successfully",
            student: student
        });

    } catch (err) {

        res.status(500).json({
            message: "Error deleting student",
            error: err.message
        });

    }

});


// ==========================================
// START SERVER
// ==========================================

app.listen(3000, () => {

    console.log(
        "Server running on http://localhost:3000"
    );

});