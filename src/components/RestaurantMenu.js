import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  // useEffect(()=>{
  //     fetchMenu();
  // },[]);
  const { resId } = useParams();
  // console.log(resId);

  // const fetchMenu = async()=>{
  //     const data= await fetch(
  //         MENU_URL+resId);
  //     const json = await data.json();
  //     console.log(json)
  //     setResInfo(json.data);
  // }
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, id } =
    resInfo?.cards[2]?.card?.card?.info;
  // console.log(resInfo);
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(category);
  // const [showIndex, setShowIndex] = useState(0);

  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl">{name}</h2>
      <h4 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h4>
      <h3>Menu</h3>
      {category.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          // showItems={index===showIndex?true:false}
          // setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
