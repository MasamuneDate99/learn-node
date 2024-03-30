const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require("./routes/product.routes.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/products", productRoutes);

app.get('/test', (req, res) => {
    res.send("Hello this is only local connection without going to databases !");
});

mongoose.connect("mongodb+srv://TYR:IP9gEgJrjvCxP5x6@testdatabase.eypip65.mongodb.net/Learn-Node?retryWrites=true&w=majority&appName=TestDatabase")
.then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
        console.log("Starting app at Localhost:3000");
    })
}).catch(() => { 
    console.log("Connection failed !");
});