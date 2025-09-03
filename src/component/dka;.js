



import React, { useEffect, useState } from "react";
import RestaurantCard from "./restaurantCard.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [searchText, setsearchText] = useState("");

  const [resListNew, setResListNew] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchedData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const actualData = await fetchedData.json();
    console.log(actualData);
    // API ke structure ke hisaab se restaurant list nikaal ke state me daalo
    const restaurants =
      actualData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // Agar mil gaya to set karo, warna existing mock data hi rahega
    if (restaurants) {
      // restaurants is array of objects with "info" inside, toh unko flatten karo
      const formattedRestaurants = restaurants.map((res) => res.info);

      setResListNew(formattedRestaurants);
    }
  };

  //conditional rendering
  // if (resListNew.length === 0) {
  //   return <Shimmer />;
  // }

  return resListNew.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />
            <button
              className="search-button"
              onClick={() => {
                const filteredRestaurant = resListNew.filter((res) => {
                  res.name.toLowerCase().includes(searchText.toLowerCase());
                });
                console.log(searchText);
                setResListNew(filteredRestaurant);
              }}
            >
              search
            </button>
          </div>

          <button
            className="filter-btn"
            onClick={() => {
              // Filter restaurants with avgRating > 4
              let resListNewJs = resListNew.filter(
                (res) => parseFloat(res.avgRating) > 4.2
              );
              setResListNew(resListNewJs);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {resListNew.map((restaurantL) => (
            <RestaurantCard key={restaurantL.id} restaurant={restaurantL} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
<script type="module" src="./src/app.js"></script>;