const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authenticateToken = require('../middleware/auth');

router.get('/empleados', authenticateToken, employeeController.getAllEmployees);
router.get('/empleados/:id', authenticateToken, employeeController.getEmployeeById);
router.delete('/empleados/:id', authenticateToken, employeeController.deleteEmployee);
router.put('/empleados/:id', authenticateToken, employeeController.updateEmployee);

module.exports = router;