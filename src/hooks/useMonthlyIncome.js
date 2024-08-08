import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { get } from "../util/http/methods/get.js";

export function useMonthlyIncome({ month, year }) {
  const governorateId = useSelector((state) => state.service.governorateId);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["serviceIncome", { month, year }],
    queryFn: () =>
      get(
        `governorates/${governorateId}/services/earnings?year=${year}&month=${month}`
      ),
  });

  return {
    data,
    isLoading,
    isError,
  };
}
