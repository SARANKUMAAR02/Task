const express=require('express')
const app=express()
require('dotenv').config()
const mongoose=require('mongoose')
const taskRoute = require('./routes/taskroute')
const cors=require('cors')
app.use(
    cors({
        origin:"*",
        methods:["GET","POST","PUT","PATCH","DELETE"],
    })
)

//MIDDLEWARE

// app.use((req,res,next)=>{
//     console.log('path '+req.path+"method "+req.method)
//     next();
// })

app.use(express.json());


// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

// db connection

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Db connected successfully and listening port "+process.env.PORT);
    });
})
.catch((err)=>{
    console.log(err)
});


app.use('/api/tasks',taskRoute);
