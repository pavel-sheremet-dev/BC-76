import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { type OrderValue } from "../../services/taskService";
import css from "./App.module.css";
import SortFilter from "../SortFilter/SortFilter";
import SearchBox from "../SearchBox/SearchBox";
import { useModal } from "../../hooks/useModal";
import { useGetTasksQuery } from "../../hooks/useGetTasksQuery";

export default function App() {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);

  // const [debouncedFilterValue] = useDebounce(filterValue, 1000);

  const [orderValue, setOrderValue] = useState<OrderValue>("asc");

  const { data: tasks, isLoading } = useGetTasksQuery({
    filterValue,
    orderValue,
    page,
  });

  const { closeModal, isOpen, openModal } = useModal();

  // useDebaouncedCallback + uncontrolled input (SearchBox)
  const handleSearch = useDebouncedCallback((search: string) => {
    setFilterValue(search);
    setPage(1);
  }, 300);

  // or useDebounce + controlledInput + but 2 requests (not user friendly)

  const getOrderValue = (order: OrderValue) => {
    setOrderValue(order);
    setPage(1);
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox onChange={handleSearch} />
        <SortFilter order={orderValue} getOrderValue={getOrderValue} />
        <div>
          {[1, 2, 3, 4].map((item) => (
            <button
              key={item}
              onClick={() => changePage(item)}
              style={{
                backgroundColor: page === item ? "green" : "transparent",
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {tasks && !isLoading && <TaskList tasks={tasks} />}
      {isOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
