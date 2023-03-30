const source= process.env.url;

const dotenv = require('dotenv').config()
const express = require('express')
const app = express();
// let user = require('./model/userschema')
require('./models/config');
const userRouter = require('./router/userRouter')
app.use(express.json())


//database connectivity
// mongoose.connect('mongodb://127.0.0.1:27017/practice');
// mongoose.set("strictQuery", false);
// const connection = mongoose.connection;
// connection.once('open', function () {
//     console.log("MongoDB database connection established successfully");
// })

app.use('/',userRouter)
console.log('helo mmm env is running',process.env.port);
const servar = app.listen(process.env.port, (req, res)=>{
    console.log('server is running on port no :9000');
})