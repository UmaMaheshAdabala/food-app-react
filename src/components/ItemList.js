import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch =useDispatch();
  const handleClick =(item)=>{
    dispatch(addItem(item));
    
  }
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left border-gray-400 border-b-2 m-2 p-2 flex justify-between"
        >
          <div className="pr-2 mr-2">
            <span className="my-2 py-2">{item.card.info.name}</span>-{" "}
            <span>
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs  pb-2">{item.card.info.description}</p>
          </div>
          <div className="">
            <button className="absolute bg-black text-white align-top" onClick={()=>handleClick(item)}>
              Add +
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="image"
              className="w-16"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
