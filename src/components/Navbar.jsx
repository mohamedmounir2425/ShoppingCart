import React from "react";

export default function Navbar({cartItems}) {
  let cartNums = cartItems.reduce((a,b) => a + b.qty ,0)
  let cartPrices = cartItems.reduce((a,b) => a + b.qty * b.price , 0)
  return (
    <>
     <nav className="navbar navbar-expand-lg  navbar-dark mainColor py-3">
     <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
              <li className="nav-item text-white cart position-relative">
               <span>${cartPrices.toFixed(2)}</span>
               <span className="">Cart <i className="fa-solid fa-cart-shopping"></i></span>
               <span className="badge text-bg-info p-2 badgeCart">{cartNums}</span>
              </li>
            
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
}
