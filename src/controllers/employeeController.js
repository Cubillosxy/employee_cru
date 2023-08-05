const Employee = require('../models/employeeModel');

const employeeController = {
    getAllEmployees: async (req, res) => {
        try {
            const employees = await Employee.find();
            return res.json(employees);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server Error :' + error })
        }
    },
    createEmployee: async (req, res) => {
        try {
            const employee = await Employee.create(req.body);
            return res.json(employee);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server Error :' + error});
        }
    },
    getEmployeeById: async (req, res) => {
        try {
            const employee = await Employee.findById(req.params.id);
            return res.json(employee);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server Error: ' + error})
        }
    },
    updateEmployee: async (req, res) => {
        try {
            const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            return res.json(employee);
            // const employee = await Employee.findById(req.params.id);
           // Object.assign(employee, req.body);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server Error: ' + error})
        }
    },
    deleteEmployee: async (req, res) => {
        try {
            const employee = await Employee.findByIdAndDelete(req.params.id);
            return res.json(employee);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server Error: ' + error})
        }
    }
}

module.exports = employeeController;
