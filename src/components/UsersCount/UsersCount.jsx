import { useQuery } from "@tanstack/react-query";

import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner.jsx";

import CarIcon from "../../assets/icons/Car.jsx";
import AdminIcon from "../../assets/icons/Car.jsx";
import HotelIcon from "../../assets/icons/Hotel.jsx";
import MobileIcon from "../../assets/icons/Mobile.jsx";
import RestaurantIcon from "../../assets/icons/Restaurant.jsx";

import { get } from "../../util/http/methods/get.js";
import { separateString } from "../../util/separateString.js";
import { cardColors } from "../../data/colors.js";

import "./UsersCount.css";

export default function UsersCount() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () => get("Account/report/NumOfUsers", "Couldn't get"),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p className="user-error">Faild to fetch total users</p>;
  }

  if (data) {
    const totalUsers = data.map((userCount, index) => {
      const Icon =
        userCount.typeName === "User"
          ? MobileIcon
          : userCount.typeName === "HotelOwner"
          ? HotelIcon
          : userCount.typeName === "TourismOffice"
          ? RestaurantIcon
          : userCount.typeName === "CarRental"
          ? CarIcon
          : AdminIcon;
      const { color, background } = cardColors[index];

      return (
        <li key={userCount.typeName} className="user" style={{ background }}>
          <div className="container" style={{ background: color }}>
            <Icon stroke={background} />
          </div>
          <div>
            <p className="user-type" style={{ color }}>
              {separateString(userCount.typeName) + "s"}
            </p>
            <p className="users-count" style={{ color }}>
              {userCount.numberOfType}
            </p>
          </div>
        </li>
      );
    });

    return <ul id="total-users">{totalUsers}</ul>;
  }
}
