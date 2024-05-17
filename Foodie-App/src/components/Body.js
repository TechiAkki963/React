import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utilities/mockData";

const Body = () => {
  // How to use State Variable
  //Creating a state variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  //NormalJs Variable
  // const listOfRestaurants = [
  //   {
  //     info: {
  //       id: "568728",
  //       name: "Pizza Hut",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "Akota Dandia Bazar road",
  //       areaName: "Kharghar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 3.8,
  //       parentId: "721",
  //       avgRatingString: "4.1",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 32,
  //         lastMileTravel: 2.8,
  //         serviceability: "SERVICEABLE",
  //         slaString: "30-35 mins",
  //         lastMileTravelString: "2.8 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "568729",
  //       name: "Dominos",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "Akota Dandia Bazar road",
  //       areaName: "Kharghar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.1,
  //       parentId: "721",
  //       avgRatingString: "4.1",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 32,
  //         lastMileTravel: 2.8,
  //         serviceability: "SERVICEABLE",
  //         slaString: "30-35 mins",
  //         lastMileTravelString: "2.8 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },

  //   {
  //     info: {
  //       id: "568730",
  //       name: "MC Donalds",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "Akota Dandia Bazar road",
  //       areaName: "Kharghar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.5,
  //       parentId: "721",
  //       avgRatingString: "4.1",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 32,
  //         lastMileTravel: 2.8,
  //         serviceability: "SERVICEABLE",
  //         slaString: "30-35 mins",
  //         lastMileTravelString: "2.8 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Clicked");
            //Filter logic
            const filteredResList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            // console.log(filteredResList);
            setListOfRestaurant(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurants Container */}
      <div className="res-container">
        {/* <RestaurantCard resData={resList[11]} /> */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
