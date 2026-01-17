import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5  mt-5 '>
                <h1 className='fs-2 '>To create a ticket, select a relevant topic</h1> 
            </div>
            <div className='row'>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4><i class="fa fa-plus-circle" aria-hidden="true"></i>Accout opening</h4>
                    
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Online Account opening</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Offline Account opening</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUF Accout opening</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>NRI Account opening</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Charges at Zerodha</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a>
                    
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4><i class="fa fa-plus-circle" aria-hidden="true"></i>Your Zerodha Account</h4>
                    
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Login Credentials</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Account Modification and Segment Addition</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>DP ID and bank details</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of shares</a><br/>
                    
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4><i class="fa fa-plus-circle" aria-hidden="true"></i>Your Zerodha Account</h4>
                    
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Margin/leverage, Product and Order types</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Kite Web and Mobile</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate Actions</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Sentinel</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Kite API</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a>
                 
                </div>
                
            </div>
        </div>
     );
}

export default CreateTicket;