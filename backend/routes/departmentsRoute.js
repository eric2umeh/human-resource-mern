import express from 'express'
import bcrypt from 'bcryptjs'
import Departments from '../models/departmentsModel.js';

const departmentsRoute = express.Router();

//add department
departmentsRoute.post('/add', async(req, res) => {

    const newDepartment= new Departments({
        departmentName: req.body.departmentName,
        departmentHead: req.body.departmentHead,
        totalEmployee: req.body.totalEmployee,
    });

    const department = await newDepartment.save();
    res.send({
        departmentName: department.departmentName,
        departmentHead: department.departmentHead,
        totalEmployee: department.totalEmployee,
    });

});

//get all departments
departmentsRoute.get('/all', async(req, res) => {
    const departments = await Departments.find();
    res.send(departments);
});

export default departmentsRoute;