require("./database/db");
const express = require("express");
const app = express();
const port = 5000;
// const bodyparser = require("body-parser");
const path = require('path')

const order = require("./router/order");
const register = require("./router/register");
const product = require('./router/product');
const Decorate = require('./router/Decorate');
const Groomwear = require('./router/groomwear');
const Photography = require('./router/Photography');
const payment_details = require('./router/payment_details');
const login = require('./router/login');
const adminregister = require('./admin/adminregister');
const adminlogin = require('./admin/login');
const user = require('./admin/user');


app.use(express.json());

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: false }));

app.use(order);
app.use(register);
app.use(product);
app.use(Groomwear);
app.use(Decorate);
app.use(Photography);
app.use(payment_details);
app.use(login);
app.use("/admin", adminregister);
app.use("/admin", adminlogin);
app.use("/admin", user);

app.use("/upload", express.static(path.join(__dirname + "/images")));

app.listen(port);