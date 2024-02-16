import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav bar
 * Body
 *  - Search
 *  - Restaurant Container
 *      -- Restaurant Card
 *            -- image
 *            -- Name of the Restaurant, Ratings, Cuisine etc, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul className="li">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard = {
//   backgroundColor: "grey"
// }


//  const RestaurantCard = (props) => {
//   const {restaurantName, cuisine, rating, delivery} = props;   // we can also do like this

const RestaurantCard = ({restaurantData}) => {

  //console.log(props);     {/**props are object */}
  
  
  
  return (
    <div className="restaurant-card" style={{ backgroundColor: "gainsboro" }}>
      <img
        className="restaurant-logo"
        alt="veg-biryani"
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurantData.info.cloudinaryImageId}
      />
      <h3>{restaurantData.info.name}</h3>
      <h4>{restaurantData.info.cuisines.join(", ")}</h4>
      <h4>{restaurantData.info.costForTwo }</h4>
      <h4>Ratings: {restaurantData.info.avgRating}</h4>
      <h4>Delivery: {restaurantData.info.sla.deliveryTime}</h4>
    </div>
  );
};


const resObj = {
  type: "restaurant",
  info: {
    id: "25620",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "Intermediate Ring Road",
    areaName: "Ejipura",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 0.8,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "0.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-16 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard
          restaurantData = {resObj}
        />
       
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
