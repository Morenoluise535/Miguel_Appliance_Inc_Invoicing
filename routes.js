module.exports = function(app){

    var home = require("./routes/home");
    var about = require("./routes/about");
    var contact = require("./routes/contact");
    var login = require("./routes/login");
    var ownerCreds = require("./routes/owner");
    var customerCreds = require("./routes/customer");

    app.use("/", home);
    app.use("/about", about);
    app.use("/contact", contact);
    app.use("/login", login);
    app.use("/owner", ownerCreds);
    app.use("/customer", customerCreds);
}