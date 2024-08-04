import { CDN_URL } from "../utils/constants";
const Restaurant= ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRating,
  }) => {

    return(<div className="restaurant-card">
        <img alt="Biryani" src={CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h4>{sla.lastMileTravel} KM</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} Rating</h4>
    </div>)
}
 export default Restaurant;