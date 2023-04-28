const Employee = require('../models/employeeModel');

const filterQueries = async (req, res) => {
  try {
    //Write your code here for sorting, pagination, & searching
    //1) For sorting sort salary from ascending to descending order
    //2) For Pagination set limit 5 as a default limit and default page is 1
    //3) For searching search for firstName and lastName with caseinsensitive
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { filterQueries };
