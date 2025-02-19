//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session')

const app = express();
const port = process.env.PORT || 4000;

//databse
mongoose.connect(process.env.db_uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => {
    console.log('Connected to MongoDB');
})
//mildllewarwes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
    session({
    secret: 'zahraamazloum',
    saveUninitialized: true,
    resave: false, })
);

app.use((req,res,next)=>{
    res.locals.message=req.session.message;
    delete req.session.message;
    next();

})


//route prefix
app.use("",require("./routes"))
app.use("",require("./user_route"))


app.listen(port, () => {
    console.log(`Server started at  http://localhost:${port}`);
});