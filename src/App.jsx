import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { useEffect, useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([])


  function addToLocalStorge(data) {
    localStorage.setItem('data',JSON.stringify(data))
  }
  function addItem(item) {
    let exist = cartItems.find((elm)=> {
      return elm.id ==item.id
    })
    if(exist) {

      let cart = cartItems.map((elm) => elm.id == item.id ?{...exist ,qty:exist.qty + 1} : elm)
      setCartItems(cart)
      addToLocalStorge(cart)
    }else {

      let myItems = [...cartItems,{...item,qty:1}]
      setCartItems(myItems)
      addToLocalStorge(myItems)
    }
  }

  function removeItem (item) {
    let exist = cartItems.find((elm) => elm.id == item.id)

    if(exist.qty > 1 ) {
      let cart = cartItems.map(elm => elm.id === exist.id ? {...exist , qty: exist.qty - 1} : elm)
      setCartItems(cart)
      addToLocalStorge(cart)
    }
  }

  function removeProduct (item) {
    let cart = cartItems.filter(elm => elm.id !== item.id)
    setCartItems(cart)
    addToLocalStorge(cart)
  }

  useEffect(() => {
    let data =  JSON.parse( localStorage.getItem('data'))
    if(data != null) {
      setCartItems(data)
    }
  } , [])
  
  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 border-end border border-2">
            <Products addItem = {addItem}/>
          </div>
          <div className="col-md-3">
            <Cart removeProduct={removeProduct} removeItem={removeItem} addItem = {addItem} cartItems={cartItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
