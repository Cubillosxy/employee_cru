const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    surname: {
        type: String, required: true
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
    }
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
