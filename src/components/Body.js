import Restaurant from "./Restaurant";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = ()=> {
    const [listRestaurant, setListRestaurant]=useState(restList);
    
    // useEffect(()=>{
    //     fetchdata();
    // },[]);
    //const fetchdata= async()=>{
        //   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        //   const json=await data.json();
        //   console.log(json);
        //   setListRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        //     }
    return listRestaurant.length===0 ? <Shimmer/>
     : (<div className="body"> 
        <div className="search">
        <input type="search" placeholder="search"></input>
        <span> <button className="filter-btn" onClick={()=>{
            console.log("Button clicked")
           const filterrest= listRestaurant.filter(
            (res)=> res.data.avgRating > 4);
            setListRestaurant(filterrest);
        }}>Top Rated Restaurants</button> </span>
        </div> 
        <div className="restaurant-cont">
            {listRestaurant.map((restaurant)=> { 
                return <Restaurant {...restaurant.data}/>
                
            })}
            
            
        </div>
    </div>)
}
 export default Body;