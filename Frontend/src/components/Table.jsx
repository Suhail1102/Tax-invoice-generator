import React from 'react'

function Table() {
  return (
    <>
    <table className="w-full">
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
        <tbody >
            <tr>
                <td>1</td>
                <td className="items-col">Sample Item</td>
                <td>12345678</td>
                <td>100000.00</td>
                <td></td>
                
                <td>218000.00</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Another Item</td>
                <td>5678</td>
                <td>200.00</td>
                <td>1</td>
                <td>236.00</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Another Item</td>
                <td>5678</td>
                <td>200.00</td>
                <td>1</td>
                <td>236.00</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Another Item</td>
                <td>5678</td>
                <td>200.00</td>
                <td>1</td>
                <td>236.00</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Another Item</td>
                <td>5678</td>
                <td>200.00</td>
                <td>1</td>
                <td>236.00</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Another Item</td>
                <td>5678</td>
                <td>200.00</td>
                <td>1</td>
                <td>236.00</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Another Item</td>
                <td>5678</td>
                <td>200.00</td>
                <td>1</td>
                <td>236.00</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Another Item</td>
                <td>5678</td>
                <td>200.00</td>
                <td>1</td>
                <td>236.00</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Another Item</td>
                <td>5678</td>
                <td>200.00</td>
                <td>1</td>
                <td>236.00</td>
            </tr>
        </tbody>
        <tfoot>
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
    </>
  )
}

export default Table