import { usePagination } from "../hooks/usePagination";

function PaginationDemo() {
  const { currentPage, totalPages, startIndex, endIndex } = usePagination({
    totalItems: 100,
    itemsPerPage: 10,
    initialPage: 1,
  });

  return (
    <div>
      <h2>Pagination Demo</h2>
      <p>Current Page: {currentPage}</p>
      <p>Total Pages: {totalPages}</p>
      <p>Start Index: {startIndex}</p>
      <p>End Index: {endIndex}</p>
    </div>
  );
}

export default PaginationDemo;