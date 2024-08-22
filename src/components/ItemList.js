import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
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
            <img src={CDN_URL + item.card.info.imageId} alt="image"className="w-16" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;