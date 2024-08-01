import { useQuery } from "@tanstack/react-query";
import { get } from "../../../util/http/methods/get.js";

import "./Gategory.css";

export default function Gategory({ stId }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      get(
        `SeededValues/${stId === 1 ? "RoomCategories" : "CarCategories"}`,
        "Couldn't get gategories."
      ),
  });

  if (isError) {
    return <p className="category error">{error.message}</p>;
  }

  if (isLoading) {
    return <p className="category">Loading categories...</p>;
  }

  if (data) {
    const category = data.find((category) => category.id === stId);

    return (
      <p className="detail">
        <span>Category:</span> {category.name}
      </p>
    );
  }
}
