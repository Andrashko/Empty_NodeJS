import express from 'express';
import mongoose from "mongoose";

//новий екземпляр додатку 
const app = express();

//параметри бази
const dbUrl = 'mongodb://localhost:27017/bookDB';
mongoose.connect (dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=>{console.log("DB connected!")})
.catch(error=>{console.log(error)});

//додаткові методи для обробки запитів POST і PUT 
app.use(express.json());
app.use(express.urlencoded());

app.listen(3000);

console.log("Started");