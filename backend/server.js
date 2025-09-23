require('dotenv').config();
const express=require('express');
const connectToDB=require('./Database/db');
const cors=require('cors');
const bookReview=require('./Router/authRouter');
const path = require('path');



const app=express();
connectToDB();
//Middleware
app.use(express.json());
app.use(cors());


//routes
app.use('/api',bookReview);
app.use('/images', express.static(path.join(__dirname, 'BooksPicture')));


const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})


