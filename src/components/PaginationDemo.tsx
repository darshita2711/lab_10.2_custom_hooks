import { usePagination } from "../hooks/usePagination";

function PaginationDemo() {
  const { currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage, setPage } = usePagination({
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
      <p>Items on Current Page: {itemsOnCurrentPage}</p>

      <button onClick={() => setPage(5)}>
        Go to Page 5
        </button>
    </div>

  );
}

export default PaginationDemo;