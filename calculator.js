const express = require("express")
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
    res.send("Hello!")
});

app.get("/bmiCalculator", function(req,res){
    res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    bmi = weight/(height*height);

    res.send("Your BMI is "+ bmi);
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})