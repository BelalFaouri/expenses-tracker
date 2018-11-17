var Expense=require('../model/Expense')


exports.createExpense=function(req,res){
  var { date , amount , category} = req.body;
  Expense.create({
    date:date,
    amount:amount,
    category:category
  })
  .then(function(expense){
    res.send(expense)
  })
  .catch(function(err){
    console.log(err);
  })
}

exports.getTotalExpenses=function(req,res){
  Expense.findAll().then(function(expenses){
    var total=0;

    expenses.forEach((expense)=>{
      if(expense.amount){
        total+=expense.amount
      }
    })
    console.log(total);
    res.json(total)
  })
}

exports.getExpensesByCategory=function(req,res){
  var {category} = req.params;

  Expense.findAll({ where: { category: category } }).then(expenses => {
    var months={
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0,
      7:0,
      8:0,
      9:0,
      10:0,
      11:0,
      12:0
    }
    expenses.forEach(expense =>{
      var month = expense.date.getMonth()+1
      var amount = expense.amount

      months[month]+=amount
    })
  console.log(months);


  res.json(months)
})
}
