import React from "react";

export default function Cart({ cartItems ,addItem, removeItem, removeProduct}) {

  return (
    <>
      <div className="my-5  ">
    <h1 className="cart-items mt-5 py-5">Cart Items</h1>
    {cartItems.length == 0 ? <h5 className="text-center">Cart is empty</h5>:''}
        {cartItems.map((item) => {
          return (
            <div  key={item.id}>
              <div className="cartItem  text-center d-flex justify-content-center align-items-center ">
                <div className="cart-img  ">
                  <img
                    className="w-100"
                    src={item.image}
                    alt=""
                  />
                </div>

                <div className="cart-action  ">
                  <h6>{item.title}</h6>
                  <p className="price">${item.price}</p>
                  <button onClick={() => addItem(item)} className="btn btn-info">+</button>
                  <span className="px-3">{item.qty}</span>
                  <button onClick={() => removeItem(item)}  className="btn btn-danger">-</button>
                  <button onClick={() => removeProduct(item)}  className="btn btn-danger ms-3">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}
