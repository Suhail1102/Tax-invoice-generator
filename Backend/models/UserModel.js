import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    fullName:String,
    email: String,
    password: String
})


const FormModel = mongoose.model("UserModel", UserSchema);

export default FormModel;