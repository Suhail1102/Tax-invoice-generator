import React from "react";
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'
import Table from "./Table";
import Qrcode from './Qrcode'

const TaxInvoiceOutput = ({ formData }) => {
  const calculateTax = (amount, taxRate) => {
    return (amount * taxRate) / 100;
  };

  const calculateTotal = () => {
    const subtotal = formData.items.reduce((sum, item) => {
      const itemTotal = item.qty * item.rate;
      return sum + itemTotal;
    }, 0);

    const taxAmount = formData.items.reduce((sum, item) => {
      const itemTax = calculateTax(item.qty * item.rate, item.tax);
      return sum + itemTax;
    }, 0);

    return { subtotal, taxAmount, grandTotal: subtotal + taxAmount };
  };

  const totals = calculateTotal();

  return (
    // <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", border: "1px solid #ddd" }}>
    //   <h2 style={{ textAlign: "center" }}>TAX INVOICE</h2>
    //   <hr />
    //   {/* Header Section */}
    //   <div style={{ display: "flex", justifyContent: "space-between" }}>
    //     <div>
    //       <h3>{formData.companyDetails.name}</h3>
    //       <p>GSTIN: {formData.companyDetails.gstin}</p>
    //       <p>{formData.companyDetails.address}</p>
    //       <p>Contact: {formData.companyDetails.contact}</p>
    //     </div>
    //     <div>
    //       <p><strong>Invoice #:</strong> {formData.invoiceDetails.number}</p>
    //       <p><strong>Invoice Date:</strong> {formData.invoiceDetails.date}</p>
    //       <p><strong>Due Date:</strong> {formData.invoiceDetails.dueDate}</p>
    //       <p><strong>Place of Supply:</strong> {formData.invoiceDetails.placeOfSupply}</p>
    //     </div>
    //   </div>
    //   <hr />
    //   {/* Customer Details */}
    //   <div>
    //     <h4>Customer Details</h4>
    //     <p><strong>Name:</strong> {formData.customerDetails.name}</p>
    //     <p><strong>Address:</strong> {formData.customerDetails.address}</p>
    //     <p><strong>Contact:</strong> {formData.customerDetails.contact}</p>
    //   </div>
    //   <hr />
    //   {/* Items Table */}
    //   <table
    //     style={{
    //       width: "100%",
    //       borderCollapse: "collapse",
    //       marginBottom: "20px",
    //       textAlign: "left",
    //     }}
    //   >
    //     <thead>
    //       <tr>
    //         <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
    //         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Item</th>
    //         <th style={{ border: "1px solid #ddd", padding: "8px" }}>HSN/SAC</th>
    //         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Qty</th>
    //         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Rate</th>
    //         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tax (%)</th>
    //         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Amount</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {formData.items.map((item, index) => {
    //         const itemTotal = item.qty * item.rate;
    //         const itemTax = calculateTax(itemTotal, item.tax);
    //         return (
    //           <tr key={index}>
    //             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
    //             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.name}</td>
    //             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.hsn}</td>
    //             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.qty}</td>
    //             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.rate}</td>
    //             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.tax}</td>
    //             <td style={{ border: "1px solid #ddd", padding: "8px" }}>
    //               ₹{(itemTotal + itemTax).toFixed(2)}
    //             </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    //   {/* Totals */}
    //   <div style={{ textAlign: "right" }}>
    //     <p><strong>Subtotal:</strong> ₹{totals.subtotal.toFixed(2)}</p>
    //     <p><strong>Tax:</strong> ₹{totals.taxAmount.toFixed(2)}</p>
    //     <p><strong>Grand Total:</strong> ₹{totals.grandTotal.toFixed(2)}</p>
    //   </div>
    //   <hr />
    //   {/* Bank Details */}
    //   <div>
    //     <h4>Bank Details</h4>
    //     <p><strong>Bank:</strong> {formData.bankDetails.name}</p>
    //     <p><strong>Account #:</strong> {formData.bankDetails.accountNumber}</p>
    //     <p><strong>IFSC:</strong> {formData.bankDetails.ifsc}</p>
    //     <p><strong>Branch:</strong> {formData.bankDetails.branch}</p>
    //   </div>
    // </div>
    <>
    {/* <h1 className="text-red-400 text-4xl text-center">TaxInvoiceOutput</h1> */}
<div className="border-[2px] border-slate-600 w-[8.3in] h-[11.6in] mx-auto mt-5 flex flex-col box-border ">
 {/* Tax Invoice heading */}
<div className=" basis-2" > 
        <h1 className="text-2xl text-center border-b-[2px] border-slate-600 font-bold">Tax Invoice</h1>
     </div>

     {/* form header */}
    
   
    <div className="header basis-1/4 border-b-2  border-slate-600 box-border  ">
   
        {/* header main content */}
        <div className="form-header w-full h-full">
      
        {/* header-division */}

        <div className=" flex h-full ">

{/* header left */}

        <div className="header-left border-r-[2px] border-slate-600  basis-2/4  " style={{fontSize:"0.98rem" }}>
             <div className="flex flex-col h-full w-full ">
                <div className="header-up border-b-2 border-slate-600 basis-2/4 flex justify-between items-center gap-2 px-1 ">
                <div className="company-logo  h-[7rem] basis-2/5 ">
                  <img src={formData.companyDetails.image} className="logo w-full h-full object-contain" alt="logo" />
                </div>
                <div className="company-details " style={{fontSize:"0.9rem"}}>
                  <span className="block font-bold text-lg">{formData.companyDetails.name}</span>
                  <span className="block ">{formData.companyDetails.gstin} </span>
                  <span className="block">{formData.companyDetails.address} </span>
                  
                  <span> mobile:{formData.companyDetails.contact}</span>
                </div>
                </div>
                <div className="header-down  basis-2/4" >
                <div className="cutomer-details px-2 mt-2 " style={{fontSize:"0.9rem"}}>
                  <span className="block font-bold ">Cutomer Detail </span>
                  <span className="block font-bold ">{formData.customerDetails.name} </span>
                  <span className="block">{formData.customerDetails.address} </span>
                  
                  <span className=" ">GSTIN:27AAACT2727Q1ZW</span> &nbsp;|&nbsp;
                  <span> Mobile:{formData.customerDetails.contact}</span>
                </div>
                
                </div>
             </div>
           </div>
 {/* header right */}
                 
        <div className="header-right basis-2/4 ">
        <div className="flex flex-col h-full w-full ">
          {/* header up */}
        <div className="header-up border-b-2 border-slate-600 basis-2/4 grid grid-rows-2 grid-cols-2 font-bold " style={{fontSize:"0.9rem"}}>
                  <div className="px-2"><span className="block">Invoice #</span><span>{formData.invoiceDetails.number}</span></div>
                  <div className=" px-2  border-l-2 border-slate-600">
                    <span className="block">Invoice Date-</span><span>{formData.invoiceDetails.date}</span>
                  </div>
                  <div className=" px-2  border-t-2 border-slate-600">Place Of Supply - {formData.invoiceDetails.placeOfSupply}</div>
                  <div className=" px-2 border-s-2 border-t-2 border-slate-600">Due date -{formData.invoiceDetails.dueDate}</div>
                 
                
                </div>

                {/* header down */}
                <div className="header-down  basis-2/4">
                 <div className="shipping-address px-2 mt-2 " style={{fontSize:"0.9rem"}}>
                  <span className="block font-bold ">Shipping Address </span>
                  <span className="block font-bold ">{formData.customerDetails.name} </span>
                  <span className="block">{formData.customerDetails.address} </span>
                 
                  <span className=" ">GSTIN:27AAACT2727Q1ZW</span> &nbsp;|&nbsp;
                  <span> Mobile:+91-{formData.customerDetails.contact}</span>
                </div>
                    
                </div>
             </div>
            
        </div>
        
        </div>
    </div>
    </div>

    {/* main content */}
    <div className=" basis-3/5  border-b-2   flex flex-col ">
    {/* main container 1 */}

   <div className=" basis-4/5 ">
   <table className="w-full h-full">
        <thead className="border-b-2 border-slate-600">
            <tr>
                <th>S.No</th>
                <th>Item</th>
                <th className="hsn-col">HSN</th>
                <th>Rate</th>
                <th style={{width:"4rem"}}>Qty</th>
                
                <th>Amount</th>
            </tr>
        </thead>
        <tbody className=" h-96" >
        {formData.items.map((item, index) => {
            const itemTotal = item.qty * item.rate;
            const itemTax = calculateTax(itemTotal, item.tax);
            return (
              <tr key={index} className='border-b-[3px] border-t-[3px]   border-slate-500'>
                <td >{index + 1}</td>
                <td >{item.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.hsn}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.qty}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.rate}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.tax}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  ₹{(itemTotal + itemTax).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="">
            <tr className='border-b-[3px] border-t-[3px] border-slate-500'>
                <td className='border-none'></td>
                <td className='text-end '>Total</td>
                <td className='border-none'></td>
                <td className='border-none'></td>
                <td className=''>500</td>
                <td className=''>2346768.98</td>
            </tr>
        </tfoot>
    </table>
    
   </div>
    {/* main container 2 */}

   <div className="main-container2 flex h-full w-full ">
   {/* bank details */}
    <div className="bank-details basis-2/3  px-3 border-r-2 border-slate-600">
    <h3 className="font-bold mt-2 text-xl">Bank Details:</h3>
    <div className="details " style={{fontSize:"0.9rem"}} >
       <div className="flex text-lg gap-[4.2rem]">
        <span>Bank:</span> 
        <span className="text-start"> {formData.bankDetails.name}</span>
       </div>
       <div className="flex text-lg gap-10">
        <span>Account:</span> 
        <span> {formData.bankDetails.accountNumber}</span>
       </div>
       <div className="flex text-lg gap-[4.5rem]">
        <span>IFSC:</span> 
        <span>{formData.bankDetails.ifsc}</span>
       </div>
       <div className="flex text-lg gap-[3.3rem]">
        <span>Branch:</span> 
        <span> {formData.bankDetails.branch}</span>
       </div>
       
    </div>
    </div>
    <div className="total basis-2/6 grid grid-rows-5">
    {/* right column */}

        <div className="flex justify-around">
          <h3>Taxable Amount</h3>
          <span>24324.43545</span>
        </div>
        <div className="flex justify-around">
          <h3>Igst</h3>
          <span>24324.43545</span>
        </div>
        <div className="flex justify-around">
          <h3>CGST</h3>
          <span>24324.43545</span>
        </div>
        <div className="flex justify-around">
          <h3>SGST </h3>
          <span>24324.43545</span>
        </div>
        <div>
          <h2>GrandTotal</h2>
        </div>
       
    
    </div>
          
   </div>
    </div>
    {/* footer basis-1/6 */}
    
    <div className="footer flex border-t-2 border-slate-600 basis-1/12 box-border text-sm  ">
    {/* footer left */}
     <div className="basis-4/6 border-r-2 border-slate-600 footer-left pl-2">
     <div>
     <h3 className="font-bold mt-2">Notes:</h3>
     <p>Thankyou for the Buisness!</p>
     </div>
     <div>
        <h3 className="font-bold ">Terms And Conditions</h3>
        <ul className="list-decimal pl-3 box-border leading-6">
            <li>Goods once sold cannot be taken back or exchanged</li>
            {/* <li>We are not manufacturer company will stand for warranty as per terms and Conditions</li> */}
            <li>Interest at 24% will be charged for unclear bills beyond 15 days</li>
            <li>subject to local jurisdiction.</li>
        </ul>
     </div>

     
     </div>
     {/* footer right */}
     <div className="basis-2/6">
    <h1 className="text-end font-bold text-lg mr-4">For Company Name</h1>
        <Qrcode/>
     </div>
     </div>

</div>

    </>
  );
};

export default TaxInvoiceOutput;
