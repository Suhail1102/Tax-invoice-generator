import mongoose from "mongoose";

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

const UserSchema= new mongoose.Schema({
    fullName:String,
    email: String,
    password: String
})

connection();
const FormModel = mongoose.model("UserModel", UserSchema);

export default FormModel;