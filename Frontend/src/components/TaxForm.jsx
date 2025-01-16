import React, { useState } from "react";

const TaxInvoiceForm = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    companyDetails: {
      image:"",
      name: "",
      gstin: "",
      address: "",
      contact: "",
    },
    customerDetails: {
      name: "",
      address: "",
      contact: "",
    },
    invoiceDetails: {
      number: "",
      date: "",
      dueDate: "",
      placeOfSupply: "",
    },
    items: [
      {
        name: "",
        hsn: "",
        tax: "",
        qty: "",
        rate: "",
        unit: "",
      },
    ],
    bankDetails: {
      name: "",
      accountNumber: "",
      ifsc: "",
      branch: "",
    },
  });

  const handleInputChange = (section, field, value, index = null) => {
    if (section === "items" && index !== null) {
      const updatedItems = [...formData.items];
      updatedItems[index][field] = value;
      setFormData({ ...formData, items: updatedItems });
    } else {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: value,
        },
      });
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { name: "", hsn: "", tax: "", qty: "", rate: "", unit: "" },
      ],
    });
  };

  const removeItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Format the data and pass it to the output generator logic
    onSubmit(formData)
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        handleInputChange("companyDetails", "image", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" w-[85rem] mx-auto ">
      <h1 className=" text-3xl font-bold tracking-tighter text-center my-4">Tax Invoice Form</h1>
      <form onSubmit={handleSubmit} className=" p-3 w-full rounded-md  ">
        {/* Company Details */}
        <fieldset className="border-[2px] border-zinc-500 shadow-lg p-2 rounded-md w-3/4 mx-auto ">
        <legend className="text-2xl tracking-tight font-semibold">Company Details:</legend>
        {/* logo */}
        <input  type="file"
        accept="image/*"
        className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"  onChange={handleImageUpload}
        
         />

          <input className=" px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="text"
            placeholder="Company Name"
            value={formData.companyDetails.name}
            onChange={(e) =>
              handleInputChange("companyDetails", "name", e.target.value)
            }
          />
          <input className=" px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="text"
            placeholder="GSTIN"
            value={formData.companyDetails.gstin}
            onChange={(e) =>
              handleInputChange("companyDetails", "gstin", e.target.value)
            }
          />
          <textarea className="px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow resize-none "
            placeholder="Address"
            value={formData.companyDetails.address}
            onChange={(e) =>
              handleInputChange("companyDetails", "address", e.target.value)
            }
          ></textarea>
          <input className=" px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="phone"
            placeholder="Contact"
            value={formData.companyDetails.contact}
            onChange={(e) =>
              handleInputChange("companyDetails", "contact", e.target.value)
            }
          />
        </fieldset>

        {/* Customer Details */}
        
        <fieldset className="border-[2px] border-zinc-500 shadow-lg p-2 rounded-md w-3/4 mx-auto">
        <legend className="text-2xl tracking-tight font-semibold">Customer Details</legend>
          <input className="px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="text"
            placeholder="Customer Name"
            value={formData.customerDetails.name}
            onChange={(e) =>
              handleInputChange("customerDetails", "name", e.target.value)
            }
          />
          <textarea className="px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow resize-none"
            placeholder="Billing Address"
            value={formData.customerDetails.address}
            onChange={(e) =>
              handleInputChange("customerDetails", "address", e.target.value)
            }
          ></textarea>
          <input className="px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="text"
            placeholder="Contact"
            value={formData.customerDetails.contact}
            onChange={(e) =>
              handleInputChange("customerDetails", "contact", e.target.value)
            }
          />
        </fieldset>

        {/* Invoice Details */}
        <fieldset className="border-[2px] border-zinc-500 shadow-lg p-2 rounded-md w-3/4 mx-auto">
          <legend className="text-2xl tracking-tight font-semibold">Invoice Details</legend>
          <input className="px-2 py-3 rounded-md text-gray-800 text-base w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"

            type="text"
            placeholder="Invoice Number"
            value={formData.invoiceDetails.number}
            onChange={(e) =>
              handleInputChange("invoiceDetails", "number", e.target.value)
            }
          />
          <input className="px-2 py-3 rounded-md text-gray-800 text-base w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="date"
            placeholder="Invoice Date"
            value={formData.invoiceDetails.date}
            onChange={(e) =>
              handleInputChange("invoiceDetails", "date", e.target.value)
            }
          />
          <input className="px-2 py-3 rounded-md text-gray-800 text-base w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="date"
            placeholder="Due Date"
            value={formData.invoiceDetails.dueDate}
            onChange={(e) =>
              handleInputChange("invoiceDetails", "dueDate", e.target.value)
            }
          />
          <input className="px-2 py-3 rounded-md text-gray-800 text-base w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="text"
            placeholder="Place of Supply"
            value={formData.invoiceDetails.placeOfSupply}
            onChange={(e) =>
              handleInputChange("invoiceDetails", "placeOfSupply", e.target.value)
            }
          />
        </fieldset>

        {/* Items */}
        <fieldset className="border-[2px] border-zinc-500 shadow-lg p-2 rounded-md w-3/4 mx-auto">
          <legend className="text-2xl tracking-tight font-semibold">Items</legend>
          {formData.items.map((item, index) => (
            <div key={index} className="itemRow">
              <input className="px-2 py-3 rounded-md text-gray-800 text-base w-3/4  my-2 border outline-none focus:shadow-md appearance-none shadow"
                type="text"
                placeholder="Item Name"
                value={item.name}
                onChange={(e) =>
                  handleInputChange("items", "name", e.target.value, index)
                }
              />
              <input className="px-2 py-3 rounded-md text-gray-800 text-base ml-3 w-1/5 my-2 border outline-none focus:shadow-md appearance-none shadow"
                type="text"
                placeholder="HSN/SAC"
                value={item.hsn}
                onChange={(e) =>
                  handleInputChange("items", "hsn", e.target.value, index)
                }
              />
              <input className="px-2 py-3 rounded-md text-gray-800 text-base w-1/5 mr-1  my-2 border outline-none focus:shadow-md appearance-none shadow"
                type="number"
                placeholder="Tax (%)"
                value={item.tax}
                onChange={(e) =>
                  handleInputChange("items", "tax", e.target.value, index)
                }
              />
              <input className="px-2 py-3 rounded-md text-gray-800 text-base w-1/5 mx-4 my-2 border outline-none focus:shadow-md appearance-none shadow"
                type="number"
                placeholder="Qty"
                value={item.qty}
                onChange={(e) =>
                  handleInputChange("items", "qty", e.target.value, index)
                }
              />
              <input className="px-2 py-3 rounded-md text-gray-800 text-base w-1/4 mx-4 my-2 border outline-none focus:shadow-md appearance-none shadow"
                type="number"
                placeholder="Rate"
                value={item.rate}
                onChange={(e) =>
                  handleInputChange("items", "rate", e.target.value, index)
                }
              />
              <input className="px-2 py-3 rounded-md text-gray-800 text-base w-1/5 ml-4   my-2 border outline-none focus:shadow-md appearance-none shadow"
                type="text"
                placeholder="Unit"
                value={item.unit}
                onChange={(e) =>
                  handleInputChange("items", "unit", e.target.value, index)
                }
              />
              <button type="button " className="bg-red-500 px-2 py-1 mt-4 rounded-md  block text-lg mb-3" onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button"  className="bg-green-500 px-2 py-1 rounded-md text-lg" onClick={addItem}>
            Add Item
          </button>
        </fieldset>

        {/* Bank Details */}
        <fieldset className="border-[2px] border-zinc-500 shadow-lg p-2 rounded-md w-3/4 mx-auto" > 
          <legend className="text-2xl tracking-tight font-semibold">Bank Details</legend>
          <input className=" px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="text" 
            placeholder="Bank Name"
            value={formData.bankDetails.name}
            onChange={(e) =>
              handleInputChange("bankDetails", "name", e.target.value)
            }
          />
          <input
          className=" px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="text"
            placeholder="Account Number"
            value={formData.bankDetails.accountNumber}
            onChange={(e) =>
              handleInputChange("bankDetails", "accountNumber", e.target.value)
            }
          />
          <input className=" px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="text"
            placeholder="IFSC"
            value={formData.bankDetails.ifsc}
            onChange={(e) =>
              handleInputChange("bankDetails", "ifsc", e.target.value)
            }
          />
          <input className=" px-2 py-3 rounded-md text-gray-800 text-lg w-full block my-2 border outline-none focus:shadow-md appearance-none shadow"
            type="text"
            placeholder="Branch"
            value={formData.bankDetails.branch}
            onChange={(e) =>
              handleInputChange("bankDetails", "branch", e.target.value)
            }
          />
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="text-3xl bg-blue-500 py-2 px-3 rounded-md mt-5 text-center  mx-auto text-white hover:bg-blue-600 flex justify-center ">Generate Invoice</button>
      </form>
    </div>
  );
};

export default TaxInvoiceForm;
