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
