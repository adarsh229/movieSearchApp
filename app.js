var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
})

app.get("/results", function(req, res) {
    var query = req.query.searchMovie
    var url = "http://www.omdbapi.com/?apikey=4c1feedf&s=" + query;
    request(url, function(err, response, body) {
        if(!err && response.statusCode == 200) {
           var data = JSON.parse(body)
           res.render("results", {data: data});
           
        }
    });
})



app.listen(3000, function() {
    console.log("listening at port 3000");

})