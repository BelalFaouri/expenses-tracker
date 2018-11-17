const Sequelize = require('sequelize');
var sequelize = require('../db.js')

const Expense = sequelize.define('expense', {
  date: {
    defaultValue: Sequelize.NOW,
    type: Sequelize.DATE
  },
  amount: {
    type: Sequelize.INTEGER
  },
  category: {
    type: Sequelize.TEXT
  }
});

// force: true will drop the table if it already exists
// Expense.sync({force: true}).then(() => {
//   // Table created
//   return Expense.create({
//     amount: 200,
//     category: 'housing'
//   });
// });

module.exports=Expense;
