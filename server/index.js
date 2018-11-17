var express = require("express")
var path = require("path")
var Router = require("./routes")
var app = express()



app.use("/", Router)
app.use(express.static(__dirname + "/../react-client/dist"))
// app.get('*',function(req,res){
//   res.sendFile(path.join(__dirname, "../react-client/dist/index.html"))
//
// })
var port =  process.env.PORT || 3000
if (!module.parent) {
    app.listen(port, function () {
        console.log("listening on port "+port+"!")
    })
}

module.exports = app
