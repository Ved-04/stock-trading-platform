import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top' >
                <div className='col-8 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul style={{textAlign:"left", lineHeight:"2.5"}} className='text-muted'>
                        <li>Call & Trade and RMS auto-squareof: Additional charges of Rs50+ GST per orde.r</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shal be charged Rs20 per contract notes.<br/> Couriere charges apply.</li>
                        <li>For NRI account(non-PIS), 0.5% or 100 per executed order for equity(whichever is lower)</li>
                        <li>Call & trade orders will be charged an additional ₹50 per order placed through the dealer.</li>
                        <li>Account maintenance charges may vary based on the type of account and services opted.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href=''style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;