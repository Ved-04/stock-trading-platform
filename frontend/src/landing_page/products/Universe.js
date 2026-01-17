import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      
      
      <div className="row text-center mb-5">
        <div className="col-12">
          <h1>The Zerodha Universe</h1>
          <p style={{ color: "#6c757d" }}>
            Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>
      </div>

      
      <div className="row text-center g-5">
        
        <div
          className="col-12 col-md-4"
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px"
            }}
          >
            <img
              src="media/images/smallcaseLogo.png"
              alt="Smallcase"
              style={{ maxHeight: "45px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>

        
        <div
          className="col-12 col-md-4"
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px"
            }}
          >
            <img
              src="media/images/streakLogo.png"
              alt="Streak"
              style={{ maxHeight: "45px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>

        
        <div
          className="col-12 col-md-4"
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px"
            }}
          >
            <img
              src="media/images/sensibullLogo.svg"
              alt="Sensibull"
              style={{ maxHeight: "45px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
          </p>
        </div>
      </div>

      
      <div className="row text-center g-5 mt-4">
        
        <div
          className="col-12 col-md-4"
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px"
            }}
          >
            <img
              src="media/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              style={{ maxHeight: "45px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>

       
        <div
          className="col-12 col-md-4"
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px"
            }}
          >
            <img
              src="media/images/goldenpiLogo.png"
              alt="GoldenPi"
              style={{ maxHeight: "45px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>
            Bonds Trading Platform
          </p>
        </div>

        
        <div
          className="col-12 col-md-4"
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px"
            }}
          >
            <img
              src="media/images/dittoLogo.png"
              alt="Ditto"
              style={{ maxHeight: "45px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
      </div>
      <div className="text-center">
      <button className='p-2 btn btn-primary fs-5 mb-5 mt-5 text-center' style={{width:"20%", margin:"0 auto"}}>SignUp Now</button>
      </div>
    </div>
  );
}

export default Universe;
