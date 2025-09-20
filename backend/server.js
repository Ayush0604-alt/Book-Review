const express=require('express');
const connectToDB=require('./Database/db');
const cors=require('cors');
const bookReview=require('./Router/authRouter');


const app=express();
connectToDB();

app.use(express.json());
app.use(cors());
app.use('/',bookReview);

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})


