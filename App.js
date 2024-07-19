import React from "react";
import ReactDOM from "react-dom/client";

const Header= () =>{
    return(
        <div className="header">
            <div className="logo-cont">
                <img className="logo" alt="Logo" src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"/>
            </div>
            <div className="nav-cont">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const Reastaurant= () => {
    return(<div className="restaurant-card">
        <img alt="Biryani" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qtda4lwfmlwweg3ecibu"/>
        <h3>Mubharak</h3>
        <h4>Biryani, Chicken, Fry piece</h4>
        <h5>5 star</h5>
        <h5>15 mins</h5>
    </div>)
}
const Body = ()=> {
    return (<div className="body"> 
        <div className="search">
        <input type="search" placeholder="search"></input>
        </div>
        <div className="restaurant-cont">
            <Reastaurant/>
        </div>
    </div>)
}
const AppLayout =()=> {
   return (<div>
        <Header/>
        <Body/>
    </div>)
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
