import { useQuery } from "@tanstack/react-query";
import { getTasks, type OrderValue } from "../services/taskService";

interface UseGetTasksQueryParams {
  filterValue: string;
  orderValue: OrderValue;
  page: number;
}

export const useGetTasksQuery = ({
  filterValue,
  orderValue,
  page,
}: UseGetTasksQueryParams) => {
  return useQuery({
    queryKey: ["tasks", filterValue, orderValue, page],
    queryFn: () =>
      getTasks({
        search: filterValue,
        order: orderValue,
        page,
      }),
  });
};
