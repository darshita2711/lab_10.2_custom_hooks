import { useState } from "react";
import type { UsePaginationProps } from "../types/index";

export function usePagination({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}: UsePaginationProps) {

  // Calculate total pages
// Use Math.ceil to round up to the nearest whole number
// currentPage stores the current page number.setCurrentPage changes the page number.
// initialPage tells React which page to start on.

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Store current page
  const [currentPage, setCurrentPage] = useState(initialPage);

   // Calculate starting index
  const startIndex = (currentPage - 1) * itemsPerPage;
   // Calculate ending index
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    totalItems
  );

  const itemsOnCurrentPage = endIndex - startIndex;

   // Jump to a specific page
    const setPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Go to the next page
    const nextPage = () => {
        setPage(currentPage + 1);
    };

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
  };
}