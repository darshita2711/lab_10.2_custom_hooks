import { useState } from "react";
import { usePagination } from "../hooks/usePagination";

function PaginationDemo() {

    const [itemsPerPage, setItemsPerPage] = useState(10);
  const items = Array.from(
    { length: 100 },
    (_, index) => `Item ${index + 1}`
    );
  const { currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage, 
    setPage, nextPage, prevPage, canNextPage, canPrevPage } = usePagination({
    totalItems: items.length,
    itemsPerPage: itemsPerPage,
    initialPage: 1,
  });
  const currentItems = items.slice(startIndex, endIndex);
  return (
    <div className="pagination-card">
      <h2>Pagination Demo</h2>

      {/* Items per page and total items */}
      <div className="pagination-info">
        <label>
          Items per page:
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>

        <span>Total Items: {items.length}</span>
      </div>

      {/* Display current page items */}
      <ol className="pagination-list">
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      {/* Previous, current page, and Next */}
      <div className="pagination-navigation">
        <button onClick={prevPage} disabled={!canPrevPage}>
          Previous
        </button>

        <span>
          Page <strong>{currentPage}</strong> of {totalPages}
        </span>

        <button onClick={nextPage} disabled={!canNextPage}>
          Next
        </button>
      </div>

      {/* Display current item range */}
      <p className="pagination-summary">
        Showing items {startIndex + 1} - {endIndex}
        {" "}(Total on this page: {itemsOnCurrentPage})
      </p>

      {/* Page number buttons */}
      <div className="pagination-numbers">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            disabled={currentPage === index + 1}
            className={currentPage === index + 1 ? "active-page" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaginationDemo;