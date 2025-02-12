import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true }, // Associate invoice with user
  companyDetails: {
    name: String,
    gstin: String,
    address: String,
    contact: String,
    image: String, 
  },
  customerDetails: {
    name: String,
    address: String,
    contact: String,
  },
  invoiceDetails: {
    number: String,
    date: String,
    dueDate: String,
    placeOfSupply: String,
  },
  items: [
    {
      name: String,
      hsn: String,
      rate: Number,
      qty: Number,
      tax: Number,
    }
  ],
  bankDetails: {
    name: String,
    accountNumber: String,
    ifsc: String,
    branch: String,
  },
}, { timestamps: true });

export default mongoose.model("Invoice", InvoiceSchema);
