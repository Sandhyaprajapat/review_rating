const mongoose = require('mongoose')



mongoose.connect(process.env.URL, { useNewUrlParser: true });
const con = mongoose.connection;

con.once('open', function(){
    console.log("database connection sucessfuly")
})