import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
//   console.log(data);
  const [showItems, setShowItems] = useState(false);
  const clickhandler =()=>{
    setShowItems(!showItems);
  }
  return (
    <div className="w-6/12 mx-auto my-2 bg-gray-200 shadow-lg p-2">
      <div className="flex justify-between cursor-pointer" onClick={clickhandler}>
        {/* Header */}
        <span className="font-bold">{data.title}({data.itemCards.length})</span>
        <span>🔻</span>
      </div>
      {/* Item List */}
    {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
