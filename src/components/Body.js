import Restaurant, { OpenRestaurant } from "./Restaurant";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const Body = () => {
  // const [listRestaurant, setListRestaurant]=useState(restList);
  const [listRestaurant, setListRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const IsOpenRestaurant = OpenRestaurant(Restaurant);

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8072523&lng=81.5316033&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return listRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="search"
          className="border border-solid border-black px-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="searchbtn rounded-lg mx-3 bg-yellow-400 px-4 py-1 m-2"
          onClick={() => {
            const searchListres = listRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestaurant(searchListres);
          }}
        >
          Search
        </button>
        <span>
          {" "}
          <button
            className="filter-btn rounded-lg mx-3 bg-yellow-400 px-4 py-1 m-2"
            onClick={() => {
              console.log("Button clicked");
              const filterrest = listRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRestaurant(filterrest);
            }}
          >
            Top Rated Restaurants
          </button>{" "}
        </span>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <Restaurant resData={restaurant.info} />
              ) : (
                <IsOpenRestaurant resData={restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
