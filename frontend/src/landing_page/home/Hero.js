import React from 'react';

function Hero() {
    const handleSignUp = () => {
        window.location.href = 'http://localhost:3003/signup';
    };

    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'> Invest in Everything</h1>
                <p> Online platform to invest in stocks, mutual funds and more</p>
                <button onClick={handleSignUp} className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>SignUp Now</button>
            </div>
        </div>
     );
}

export default Hero;