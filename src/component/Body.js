import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useRestaurantData from "../utils/useRestaurantData.js";
import OfflineOverlay from "./OfflineOverlay.js";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resListNew, setResListNew] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const actualData = useRestaurantData();

  useEffect(() => {
    if (actualData) {
      const restaurants =
        actualData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants) {
        const formattedRestaurants = restaurants.map((res) => res.info);
        setResListNew(formattedRestaurants);
        setFilteredList(formattedRestaurants);
      }
    }
  }, [actualData]);

    
    //showing online or not status
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
       <OfflineOverlay onRetry={() => window.location.reload()} />
    );
  }

    
    
  return filteredList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            const filtered = resListNew.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredList(filtered);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const topRated = resListNew.filter(
              (res) => parseFloat(res.avgRating) > 4.2
            );
            setFilteredList(topRated);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurantL) => (
          <Link key={restaurantL.id} to={`/restaurant/${restaurantL.id}`}>
            <RestaurantCard restaurant={restaurantL} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
