var Router = require("express").Router()
// var util = require("./util.js")
var expenseController = require('../db/controllers/expenseController.js')
// var userFunctions = require("../database-mongo/user-handler.js")
var bodyParser = require("body-parser")
var path = require("path")

Router.use(bodyParser.json())
Router.use(bodyParser.urlencoded({extended: true}))

// Home page route.
Router.route("/")
    .get(function (req, res) {
        console.log("in routes /")

        res.sendFile(path.join(__dirname, "../react-client/dist/index.html"))
    })
    .post(function (req, res) {

    })
    Router.route("/expenses")
        .get(function (req, res) {
          // GET TOTAL OF ALL EXPENSES
          expenseController.getTotalExpenses(req,res)
        })
        .post(function(req,res){
          expenseController.createExpense(req,res)
        })

Router.route("/categories")
    .get(function (req, res) {

        res.sendFile(path.join(__dirname, "../react-client/dist/index.html"))
    })

Router.route("/subtotal/:category")
    .get(function (req, res) {
      expenseController.getExpensesByCategory(req,res)

    })
module.exports = Router
