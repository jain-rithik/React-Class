import { CDN_URL } from "../utils/constants";
import { COVID_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    aggregatedDiscountInfoV3,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="Food-item">
      <div className="Food-item-margin">
        <a href={resData.cta.link}>
          <div className="card-img">
            <img src={CDN_URL + cloudinaryImageId} alt="restaurant img" />
          </div>
          <div className="off">
            <p>
              {aggregatedDiscountInfoV3.header +
                " " +
                aggregatedDiscountInfoV3.subHeader}
            </p>
          </div>
        </a>
        <a href={resData.cta.link}>
          <div className="pname">
            <h4>{name}</h4>

            <div className="rating">
              <p>{avgRating} </p>
              <i className="fa-solid fa-star" style={{ color: "#ffffff" }} />
            </div>
          </div>
          <div className="Category">
            <p className="p1">{cuisines.join(", ")}</p>
            <p className="p2">{costForTwo}</p>
          </div>
          <div className="time">
            <p>{sla.deliveryTime} min</p>
          </div>
          <div className="line"></div>
          <div className="covid">
            <div className="covid-img">
              <img src={COVID_URL} alt="Covid img" />
            </div>
            <p>Follows all Max Safety measures to ensure your food is safe</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
