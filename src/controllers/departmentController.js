const Department = require('../models/departmentModel');

const departmentController = {
    getAllDepartments: async (req, res) => {
        try {
            const departments = await Department.find();
            return res.json(departments);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server Error :' + error })
        }
    },
    createDepartment: async (req, res) => { 
        try {
            const department = await Department.create(req.body);
            return res.json(department);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server Error :' + error});
        }
    },
    getDepartmentById: async (req, res) => {
        try {
            const department = await Department.findById(req.params.id);
            return res.json(department);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server Error: ' + error})
        }
    },
    updateDepartment: async (req, res) => {
        try {
            const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            return res.json(department);
                        // const department = await Department.findById(req.params.id);
           // Object.assign(department, req.body);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server Error: ' + error})
        }
    },
    deleteDepartment: async (req, res) => {
        try {
            const department = await Department.findByIdAndDelete(req.params.id);
            return res.json(department);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server Error: ' + error})
        }
    }
}

module.exports = departmentController;