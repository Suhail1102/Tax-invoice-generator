const mongoose = require('mongoose');

const connection= async ()=>{ 
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/taxform", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully!");
    }
catch(error){
    console.log(error)
}}

const FormSchema= new mongoose.Schema({
    name:String,
    email: String
})

connection();
module.exports = mongoose.model("UserSchema", FormSchema);