import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=422863&catalog_qa=undefined&isMenuUx4=true&query=Biryani&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

 // const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h3>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
