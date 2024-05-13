const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h3>{name}</h3>
      <p>{cuisines.join(" , ")}</p>
      <p>{avgRating} stars</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} Minutes</p>
    </div>
  );
};

export default RestaurantCard;
