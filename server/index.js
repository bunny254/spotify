require('dotenv').config();
require('express-async-errors');
const express=require('express');
const cors=require('cors');
const db=require('./db/db');
const userRoutes=require('./routes/users');
const app=express()
const port=3500;


const start=async()=>{
    try {
        await db()
        app.listen(port, ()=>{
            console.log(`App is listening on ${port}...`);
        })
    } catch (error) {
        console.log(error);  
    }
}
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json("Welcome to the home page")
})
app.use('/api/users', userRoutes)

start()
