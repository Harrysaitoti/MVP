// controllers/authController.js
const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res) => {
  // Implement user authentication logic
  const { employeeID, password } = req.body;

  // Example logic: Check employeeID and password against the database
  const user = { employeeID, password };
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};
