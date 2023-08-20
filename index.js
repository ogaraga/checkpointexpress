//import a module called express
var express = require("express");

var app = express();//initialize app;

let PORT = process.env.PORT || 5500;//setting up the port server

// SETTING TIME OF OPENING/CLOSING OFFICE
let day = new Date().getDay(); 
let hr = new Date().getHours(); 

//set up a middleware for timing conditions control

let logger = function (req, res, next) {
    if (!(day < 6 && hr <= 17)) {
                res.send("We are not open to customers yet or we have closed for the day/week. Please kindly check back between 9am-5pm(Mon-Fri). Thank you!");  
    }

    else {
        
    next()
}

}
app.use(logger);

app.set("view engine", "ejs");//template engine

app.get("/", (req, res) => {
    res.render("pages/Home")
});

app.get("/contact", (req, res) => {
    res.render("pages/Contact")
});

app.get("/Services", (req, res) => {
    res.render("pages/Services")
});

app.use("/public", express.static("public"));

app.listen(PORT, console.log(`App listening on port ${PORT} @ ` + new Date().getHours()+"hrs: "+ new Date().getMinutes()+"mins: "+new Date().getSeconds()+"sec"));//listening to server