import { useSelector } from "react-redux";
// import { useQuery } from "@tanstack/react-query";

import Card from "../Card/Card.jsx";

import hotelImg from "../../assets/images/hotel_room.jpg";
import carImg from "../../assets/images/car-default.jpg";
import tripImg from "../../assets/images/trip-default.jpg";

// import { get } from "../../util/http/methods/get.js";

import "./Subservice.css";

export default function Subservice({ title, imagePath, background, ...props }) {
  // const {} = useQuery({
  //   queryKey: ["subservice", "image"],
  //   queryFn: () => get(),
  // });

  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);

  const image =
    serviceTypeId === 1 ? hotelImg : serviceTypeId === 2 ? carImg : tripImg;

  return (
    <li className="service" {...props}>
      <Card
        to="details"
        background={
          background !== undefined
            ? background
            : `url(${image}) center /cover no-repeat border-box`
        }
      >
        {/* <img src={'https://localhost:7219/api/\\\Images/Rooms\\e60752d6-9df1-4363-97c1-93ee841b59b3.png'} alt="" /> */}
        <h2 className="subsevice-title">{title}</h2>
      </Card>
    </li>
  );
}
