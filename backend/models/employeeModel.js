import mongoose from "mongoose";

//create table for users
const employeeSchema = new mongoose.Schema({

    employeeId: {type: String, required: true, unique: true}, //only one id
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true}, //only one email
    phone: {type: String, required: true},
    role: {type: String, required: true},

}, {
    timestamps: true //add date
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;