// controllers/dashboardController.js
const Employee = require('../models/Employee');

exports.getDashboardData = async (req, res) => {
  try {
    // Fetch employee data based on the user's ID (you might want to use JWT to get user ID)
    const employeeData = await Employee.findOne({ employeeID: 'userEmployeeID' }).exec();

    res.json({ employeeData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
