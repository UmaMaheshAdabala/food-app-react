import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header= () =>{
    const [loginbtn, setLoginBtn]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const data = useContext(UserContext);
    return(
        <div className="header flex justify-between">
            <div className="logo-cont">
                <img className="logo w-[140px]" alt="Logo" src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"/>
            </div>
            <div className="nav-cont">
                <ul className="flex space-x-3 m-12">
                    <li className="px-3">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About</Link></li>
                    <li className="px-3"><Link to="/contact">Contact us</Link></li>
                    <li className="px-3"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-3">Cart</li>
                    <button className="lgnbtn" onClick={
                        ()=>{
                            loginbtn==="Login" ? setLoginBtn("Logout")
                            : setLoginBtn("Login");
                        }
                    }>{loginbtn}</button>
                    <li className="px-3">{data.loggedInUser}</li>
                </ul>
                
            </div>
        </div>
    )
};
 export default Header;