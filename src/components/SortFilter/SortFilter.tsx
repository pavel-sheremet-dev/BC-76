import type { OrderValue } from "../../services/taskService";

interface SortFilterProps {
  order: OrderValue;
  getOrderValue: (order: OrderValue) => void;
}

export default function SortFilter({ order, getOrderValue }: SortFilterProps) {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as OrderValue;
    getOrderValue(value);
  };

  return (
    <select value={order} onChange={onChange}>
      <option value="acs">Asc</option>
      <option value="desc">Desc</option>
    </select>
  );
}
