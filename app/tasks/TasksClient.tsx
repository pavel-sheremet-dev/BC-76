"use client";

import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import TaskList from "@/components/TaskList/TaskList";
// import Modal from "@/components/Modal/Modal";
// import TaskForm from "@/components/TaskForm/TaskForm";
import SearchBox from "@/components/SearchBox/SearchBox";
import Loader from "@/components/Loader/Loader";
import Pagination from "@/components/Pagination/Pagination";

// import { useModal } from "@/hooks/useModal";

import css from "./page.module.css";

import { getTasks } from "@/lib/api";
import Link from "next/link";

export default function TasksClient() {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);

  // const [isFormOpen, toggleFormModal] = useModal();

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
    refetchOnMount: false,
  });

  const handleSearch = useDebouncedCallback((search: string) => {
    setFilterValue(search);
    setPage(1);
  }, 300);

  const changePage = (page: number) => {
    setPage(page);
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
        <Link className={css.createButton} href="/tasks/action/create">
          Create task
        </Link>
        {/* <button className={css.createButton} onClick={toggleFormModal}>
          Create task
        </button> */}
      </header>
      {isLoading && <Loader />}
      {/* Task List */}
      {isSuccess && tasks.length > 0 && <TaskList tasks={tasks} />}
      {/* New Task Form */}
      {/* {isFormOpen && (
        <Modal onClose={toggleFormModal}>
          <TaskForm onClose={toggleFormModal} />
        </Modal>
      )} */}
    </div>
  );
}
