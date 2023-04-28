const Employee = require('../models/employeeModel');

const filterQueries = async (req, res) => {
  try {
    const { firstName, lastName } = req.query || '';
    const sort = req.query.sort || 'salary';
    const page = parseInt(req.query.page) || 1; // Default page is 1
    const limit = parseInt(req.query.limit) || 5; // Default limit is 5
    const queryObject = {};

    if (firstName) {
      queryObject.firstName = { $regex: firstName, $options: 'i' };
    }
    if (lastName) {
      queryObject.lastName = { $regex: lastName, $options: 'i' };
    }
    const employee = await Employee.find(queryObject)
      .sort(sort.startsWith('-') ? sort.substring(1) : sort)
      .skip((page - 1) * limit) // Skip records for pagination
      .limit(limit); // Limit the number of records returned for pagination

    res.status(200).json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { filterQueries };
