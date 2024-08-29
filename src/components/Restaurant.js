import { CDN_URL } from "../utils/constants";
const Restaurant = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRating,
  } = resData;

  return (
    <div className="m-4 p-4 w-[250px]  bg-gray-100 hover:bg-gray-400 rounded-lg">
      <img
        alt="Biryani"
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{sla.lastMileTravel} KM</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Rating</h4>
    </div>
  );
};

export const OpenRestaurant = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label>closed</label>
        <Restaurant {...props} />
      </div>
    );
  };
};

export default Restaurant;
