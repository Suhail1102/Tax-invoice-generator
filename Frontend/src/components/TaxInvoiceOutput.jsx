import React, { useRef } from "react";
import Qrcode from './Qrcode'
import html2canvas from "html2canvas";
import {jsPDF }from "jspdf"

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
  const componentRef= useRef(null);

  const handleDownload = async () => {
    const element = componentRef.current;
  
    // Ensure the page is at the top before capturing
    window.scrollTo(0, 0);
  
    const canvas = await html2canvas(element, {
      scale: 1.5, // Adjust scale for better quality
      useCORS: true,
      scrollX: 0,
      scrollY: -window.scrollY, // Fix shifting issue
      backgroundColor: "#ffffff", // Ensure white background
    });
  
    const imageData = canvas.toDataURL("image/jpeg", 0.6); // Use JPEG to reduce size
  
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
  
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
  
    // Define margins to prevent content being cut off
    const marginX = 10;
    const marginY = 10;
  
    // Maintain aspect ratio
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min((pdfWidth - 2 * marginX) / imgWidth, (pdfHeight - 2 * marginY) / imgHeight);
  
    const finalWidth = imgWidth * ratio;
    const finalHeight = imgHeight * ratio;
  
    // Add compressed image with proper margins
    pdf.addImage(imageData, "JPEG", marginX, marginY, finalWidth, finalHeight);
  
    pdf.save("TaxInvoice.pdf");
  };
  
  

  return (
    
    <>
 <div className="p-7">
 <div ref={componentRef} 
  className="border-[2px] border-slate-600 
             w-[8.27in] h-[11.69in] 
             mx-auto mt-5 flex flex-col box-border 
             overflow-hidden mb-5 bg-white">
 {/* Tax Invoice heading */}
 <div className="flex-none">
    <h1 className="text-2xl text-center border-b-[2px] border-slate-600 font-bold">
        Tax Invoice
    </h1>
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
   <table className=" h-full w-full ">
        <thead className="border-b-2 border-slate-600 ">
            <tr>
                <th style={{width:"1rem"}}>S.No</th>
                <th>Item</th>
                <th className="hsn-col">HSN</th>
                <th style={{width:"6rem"}}>Rate</th>
                <th style={{width:"4rem"}}>Qty</th>
                <th style={{width:"8rem"}}>Amount</th>
            </tr>
        </thead>
        <tbody className="h-96  align-top " >
        {formData.items.map((item, index) => {
            const itemTotal = item.qty * item.rate;
            const itemTax = calculateTax(itemTotal, item.tax);
            return (
              <tr key={index} className='border-b-[1px]  border-slate-500' style={{height:"2rem"}}>
                <td >{index + 1}</td>
                <td >{item.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.hsn}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.rate}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.qty}</td>
                {/* <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.tax}</td> */}
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  ₹{(itemTotal + itemTax).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="h-9">
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
    
    <div className="footer flex border-t-2 border-slate-600 box-border text-sm h-auto min-h-[150px]">
  <div className="basis-4/6 border-r-2 border-slate-600 p-2">
    <h3 className="font-bold">Notes:</h3>
    <p>Thank you for the business!</p>

    <h3 className="font-bold mt-2">Terms and Conditions</h3>
    <ul className="list-decimal pl-4 space-y-1">
      <li>Goods once sold cannot be taken back or exchanged.</li>
      <li>Interest at 24% will be charged for unclear bills beyond 15 days.</li>
      <li>Subject to local jurisdiction.</li>
    </ul>
  </div>

  <div className="basis-2/6 flex flex-col justify-center items-end pr-4">
    <h1 className="font-bold text-lg">For Company Name</h1>
    <Qrcode />
  </div>
</div>

</div>
</div>

<button onClick={handleDownload} className=" bg-red-200 p-3 text-xl">
        Print Invoice
      </button>

    </>
  );
};

export default TaxInvoiceOutput;
