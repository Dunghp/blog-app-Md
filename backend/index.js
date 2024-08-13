const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;

//parse oprions
app.use(express.json());
app.use(cors);

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.use('/', (req, res)=>{
        res.send('Hello Dev');
    })
}
main().then(()=>console.log('Mongdb connected successfully')).catch(err=>console.log(err));


app.listen(port, ()=>{
    console.log(`App is listening on port: ${port}`);
})