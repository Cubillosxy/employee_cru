const express = require('express');
const connectDb = require('./config/db');
const app = express();

// Middlewares and configurations
app.use(express.json());

connectDb();
// Routes
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');


app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);

module.exports = app;