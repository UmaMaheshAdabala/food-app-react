import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header= () =>{
    const [loginbtn, setLoginBtn]=useState("Login");
    return(
        <div className="header">
            <div className="logo-cont">
                <img className="logo" alt="Logo" src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"/>
            </div>
            <div className="nav-cont">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="lgnbtn" onClick={
                        ()=>{
                            loginbtn==="Login" ? setLoginBtn("Logout")
                            : setLoginBtn("Login");
                        }
                    }>{loginbtn}</button>
                </ul>
                
            </div>
        </div>
    )
};
 export default Header;