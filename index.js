var express = require("express");

var app = express();

let port = 5500;

let day = new Date().getDay(); 

let hr = new Date().getHours(); 


let logger = function (req, res, next) {
    if (!(day < 6 && hr <= 17)) {
             res.send("We are not open to customers yet or we have closed for the day/week. Please kindly check back between 9am-5pm(Mon-Fri). Thank you!");
    }

    else {
        
    next()
}

}
app.use(logger);

app.set("view engine", "ejs");

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

app.listen(port, console.log("App listening on port(5500) @ " + new Date().getHours()+"hrs: "+ new Date().getMinutes()+"mins: "+new Date().getSeconds()+"sec"));