import React, { useState } from "react";

const TaxInvoiceForm = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    companyDetails: {
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

  return (
    <div>
      <h1>Tax Invoice Generator</h1>
      <form onSubmit={handleSubmit}>
        {/* Company Details */}
        <fieldset>
          <legend>Company Details</legend>
          <input
            type="text"
            placeholder="Company Name"
            value={formData.companyDetails.name}
            onChange={(e) =>
              handleInputChange("companyDetails", "name", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="GSTIN"
            value={formData.companyDetails.gstin}
            onChange={(e) =>
              handleInputChange("companyDetails", "gstin", e.target.value)
            }
          />
          <textarea
            placeholder="Address"
            value={formData.companyDetails.address}
            onChange={(e) =>
              handleInputChange("companyDetails", "address", e.target.value)
            }
          ></textarea>
          <input
            type="text"
            placeholder="Contact"
            value={formData.companyDetails.contact}
            onChange={(e) =>
              handleInputChange("companyDetails", "contact", e.target.value)
            }
          />
        </fieldset>

        {/* Customer Details */}
        <fieldset>
          <legend>Customer Details</legend>
          <input
            type="text"
            placeholder="Customer Name"
            value={formData.customerDetails.name}
            onChange={(e) =>
              handleInputChange("customerDetails", "name", e.target.value)
            }
          />
          <textarea
            placeholder="Billing Address"
            value={formData.customerDetails.address}
            onChange={(e) =>
              handleInputChange("customerDetails", "address", e.target.value)
            }
          ></textarea>
          <input
            type="text"
            placeholder="Contact"
            value={formData.customerDetails.contact}
            onChange={(e) =>
              handleInputChange("customerDetails", "contact", e.target.value)
            }
          />
        </fieldset>

        {/* Invoice Details */}
        <fieldset>
          <legend>Invoice Details</legend>
          <input
            type="text"
            placeholder="Invoice Number"
            value={formData.invoiceDetails.number}
            onChange={(e) =>
              handleInputChange("invoiceDetails", "number", e.target.value)
            }
          />
          <input
            type="date"
            placeholder="Invoice Date"
            value={formData.invoiceDetails.date}
            onChange={(e) =>
              handleInputChange("invoiceDetails", "date", e.target.value)
            }
          />
          <input
            type="date"
            placeholder="Due Date"
            value={formData.invoiceDetails.dueDate}
            onChange={(e) =>
              handleInputChange("invoiceDetails", "dueDate", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Place of Supply"
            value={formData.invoiceDetails.placeOfSupply}
            onChange={(e) =>
              handleInputChange("invoiceDetails", "placeOfSupply", e.target.value)
            }
          />
        </fieldset>

        {/* Items */}
        <fieldset>
          <legend>Items</legend>
          {formData.items.map((item, index) => (
            <div key={index} className="itemRow">
              <input
                type="text"
                placeholder="Item Name"
                value={item.name}
                onChange={(e) =>
                  handleInputChange("items", "name", e.target.value, index)
                }
              />
              <input
                type="text"
                placeholder="HSN/SAC"
                value={item.hsn}
                onChange={(e) =>
                  handleInputChange("items", "hsn", e.target.value, index)
                }
              />
              <input
                type="number"
                placeholder="Tax (%)"
                value={item.tax}
                onChange={(e) =>
                  handleInputChange("items", "tax", e.target.value, index)
                }
              />
              <input
                type="number"
                placeholder="Qty"
                value={item.qty}
                onChange={(e) =>
                  handleInputChange("items", "qty", e.target.value, index)
                }
              />
              <input
                type="number"
                placeholder="Rate"
                value={item.rate}
                onChange={(e) =>
                  handleInputChange("items", "rate", e.target.value, index)
                }
              />
              <input
                type="text"
                placeholder="Unit"
                value={item.unit}
                onChange={(e) =>
                  handleInputChange("items", "unit", e.target.value, index)
                }
              />
              <button type="button" onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addItem}>
            Add Item
          </button>
        </fieldset>

        {/* Bank Details */}
        <fieldset>
          <legend>Bank Details</legend>
          <input
            type="text"
            placeholder="Bank Name"
            value={formData.bankDetails.name}
            onChange={(e) =>
              handleInputChange("bankDetails", "name", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Account Number"
            value={formData.bankDetails.accountNumber}
            onChange={(e) =>
              handleInputChange("bankDetails", "accountNumber", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="IFSC"
            value={formData.bankDetails.ifsc}
            onChange={(e) =>
              handleInputChange("bankDetails", "ifsc", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Branch"
            value={formData.bankDetails.branch}
            onChange={(e) =>
              handleInputChange("bankDetails", "branch", e.target.value)
            }
          />
        </fieldset>

        {/* Submit Button */}
        <button type="submit">Generate Invoice</button>
      </form>
    </div>
  );
};

export default TaxInvoiceForm;
