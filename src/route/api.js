const express = require("express");
const bodyParser = require("body-parser")
var cors = require('cors')
const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({
	extended:true
}));
app.post("/user", function(req, res) {
  b="dfs"
  res.status(200).json(b);

  });
app.listen(5000, function(){
console.log("server is running on port 3000");
})
