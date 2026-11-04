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

  return {
    currentPage,
    totalPages,
  };
}