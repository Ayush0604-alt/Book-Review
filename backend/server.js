const express=require('express');
const connectToDB=require('./Database/db');


const app=express();
connectToDB();

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})


