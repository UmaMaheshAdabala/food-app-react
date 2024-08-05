import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const {resId}= useParams();
    console.log(resId); 

    const fetchMenu = async()=>{
        const data= await fetch(
            MENU_URL+resId);
        const json = await data.json();
        console.log(json)
        setResInfo(json.data);
    }
    if(resInfo===null) return <Shimmer/>;
    
    const {name, cuisines, costForTwoMessage,id} =resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    
    return (
        <div className="resMenu">
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwoMessage}</h4>
            <h3>Menu</h3>
            <ul>
                {itemCards.map(items=><li key={items.card.info.id}>
                    {items.card.info.name} - {items.card.info.price/100 || items.card.info.defaultPrice/100} 
                
                </li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;