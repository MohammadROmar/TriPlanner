import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import Detail from "../../../components/Detail/Detail.jsx";

import { get } from "../../../util/http/methods/get.js";

import "./Gategory.css";

export default function Gategory() {
  const serviceTypeId = useSelector((state) => state.service.serviceTypeId);
  const subservice = useSelector((state) => state.service.subservice);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      get(
        `SeededValues/${
          serviceTypeId === 1 ? "RoomCategories" : "CarCategories"
        }`,
        "Couldn't get gategories."
      ),
  });

  if (isError) {
    return <p className="category error">Couldn't get gategories.</p>;
  }

  if (isLoading) {
    return <p className="category">Loading categories...</p>;
  }

  if (data) {
    const category = data.find(
      (category) =>
        category.id === subservice.roomCategoryId ||
        category.id === subservice.carCategoryId
    );

    return <Detail detail="Category: " value={category.name} />;
  }
}
