import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/collegeDB");

const Student=mongoose.model("Student",{
    name:String,
    age:Number
})
const student=new Student({
    name:"honey",
    age:22
})

await student.save();
console.log("Data Saved");
