const Sequelize = require('sequelize');

const sequelize = new Sequelize('expensesDB', 'monty', 'some_pass', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });






//
//   var categories=['housing','entertainment','taxes','repair & maintenance','electricity & water fees']
//
//   categories.forEach((word) =>{
//   var q=`INSERT INTO categories (name)
//   VALUES ('${word}');`
//   sequelize.query(q).then(x => console.log('saved!'))}
// )
//
//
// sequelize.query('select * from categories').then(x => console.log(x));

module.exports=sequelize;
