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

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="restaurant-card" style={{ backgroundColor: "gainsboro" }}>
      <img
        className="restaurant-logo"
        alt="veg-biryani"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xqwpuhgnsaf18te7zvtv"
      />
      <h3>{props.restaurantName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard
          restaurantName="Meghana Foods"
          cuisine="Biryani North Indian, Asian"
          rating="4.5"
        />
        <RestaurantCard
          restaurantName="KFC"
          cuisine="Burger, Fast Food "
          rating="4.3 "
        />
        <RestaurantCard
          restaurantName="Domino's"
          cuisine="Pizza,Italian "
          rating="4"
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
