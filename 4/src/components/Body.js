import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react"

const Body = () => {

  const [listOfRest, setListOfRest] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredRest = listOfRest.filter((res) => res.info.avgRating > 4);
            setListOfRest(filteredRest);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="Food-menu">
        <div className="Food-card">
          {listOfRest.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
