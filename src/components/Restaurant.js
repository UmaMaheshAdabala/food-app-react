import { CDN_URL } from "../utils/constants";
const Restaurant= ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {

    return(<div className="restaurant-card">
        <img alt="Biryani" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qtda4lwfmlwweg3ecibu"/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{area}</h5>
        <h5>{lastMileTravelString}</h5>
        <h5>{costForTwoString}</h5>
        <h5>{avgRating}</h5>
    </div>)
}
 export default Restaurant;