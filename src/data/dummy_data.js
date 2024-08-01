import HotelIcon from "../assets/icons/Hotel.jsx";
import CarIcon from "../assets/icons/Car.jsx";
import RestaurantIcon from "../assets/icons/Restaurant.jsx";
import MobileIcon from "../assets/icons/Mobile.jsx";

export const statistics = [
  {
    name: "Damascus",
    sales: 5000,
    profit: 1300,
    loss: 300
  },
  {
    name: "Aleppo",
    sales: 7000,
    profit: 1100,
    loss: 140
  },
  {
    name: "Hama",
    sales: 3000,
    profit: 1000,
    loss: 170
  },
  {
    name: "Homs",
    sales: 12000,
    profit: 3000,
    loss: 1030
  },
  {
    name: "Tartous",
    sales: 8000,
    profit: 2200,
    loss: 347
  }
];

export const newCustomers = [
  {
    type: "Mobile Users",
    number: 21200,
    Icon: MobileIcon
  },
  {
    type: "Hotel Admins",
    number: 183,
    Icon: HotelIcon
  },
  {
    type: "Restaurant Admins",
    number: 41,
    Icon: RestaurantIcon
  },
  {
    type: "Car Renting Admins",
    number: 117,
    Icon: CarIcon
  }
];

export const data0 = [
  {
    name: "Mobile",
    value: 400
  },
  {
    name: "Hotels",
    value: 335
  },
  {
    name: "Restaurants",
    value: 393
  },
  {
    name: "Car Renting",
    value: 217
  }
];

export const dummyServiceTypes = [
  {
    id: 1,
    name: "HotelAdmin"
  },
  {
    id: 2,
    name: "CarAdmin"
  },
  {
    id: 3,
    name: "TripAdmin"
  }
];
