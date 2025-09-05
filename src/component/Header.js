import React, { useState } from "react";
import {Link }from "react-router-dom";
import ReactDom from "react-dom/client";
import { LOGO_URL } from "../utils/constans";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    

    //subscribing to the store using selector
    const cartItems = useSelector((store) =>  store.cart.items );
    // console.log("printng cartItems", cartItems);


  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                 {/* <li><Link to="/grocery">Grocery</Link>
                    </li> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                          <Link to="/cart">Cart({cartItems.length} items)</Link>
            </li>
            <li>
              <button
                className="login-btn"
                onClick={() => {
                  btnName === "Login"
                    ? setbtnName("Logout")
                    : setbtnName("Login");
                }}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
