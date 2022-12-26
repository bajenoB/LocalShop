

const express= require('express')
const cors = require('cors')


const mongoose = require('mongoose')



const {UserRouter} = require('./routes/userrout')
const  {CarRouter}  = require('./routes/carrout')


const PORT = process.env.PORT||3000

const url="mongodb+srv://bajenob:Savelstan123@cluster0.hpu47xh.mongodb.net/test"

const app=express()
app.use(express.json());
app.use(cors());







async function run() {
  CarRouter(app);
  UserRouter(app);
  try {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
       
    })
    mongoose.set('strictQuery', true);
    app.listen(PORT, () => {
        console.log(`Server is working now on port ${PORT}`);
    });
}
catch (e) {
    console.log(e.message);
}
}
run();














