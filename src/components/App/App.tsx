import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import SearchBox from "../SearchBox/SearchBox";
import { useModal } from "../../hooks/useModal";

import css from "./App.module.css";

import { getTasks } from "../../services/taskService";
import type { Task } from "../../types/task";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

export default function App() {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);

  const [selectedTask, setSelectedTask] = useState<null | Task>(null);

  const [isFormOpen, toggleFormModal] = useModal();
  const [isDetailsOpen, toggleDetailsModal] = useModal();

  const {
    data: tasks,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["tasks", filterValue, page],
    queryFn: () =>
      getTasks({
        search: filterValue,
        page,
      }),
    placeholderData: keepPreviousData,
  });

  const handleSearch = useDebouncedCallback((search: string) => {
    setFilterValue(search);
    setPage(1);
  }, 300);

  const changePage = (page: number) => {
    setPage(page);
  };

  const selectTask = (task: Task) => {
    setSelectedTask(task);
    toggleDetailsModal();
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox onChange={handleSearch} />
        <div>
          {isSuccess && (
            <Pagination
              currentPage={page}
              totalPages={4}
              onPageChange={changePage}
            />
          )}
        </div>
        <button className={css.createButton} onClick={toggleFormModal}>
          Create task
        </button>
      </header>
      {isLoading && <Loader />}
      {/* Task List */}
      {isSuccess && tasks.length > 0 && (
        <TaskList tasks={tasks} onSelect={selectTask} />
      )}
      {/* New Task Form */}
      {isFormOpen && (
        <Modal onClose={toggleFormModal}>
          <TaskForm onClose={toggleFormModal} />
        </Modal>
      )}

      {/* Task Details */}
      {isDetailsOpen && (
        <Modal onClose={toggleDetailsModal}>
          {selectedTask && (
            <div>
              <div>{selectedTask.text}</div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}
