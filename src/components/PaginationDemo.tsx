import { usePagination } from "../hooks/usePagination";

function PaginationDemo() {

  const items = Array.from(
    { length: 100 },
    (_, index) => `Item ${index + 1}`
    );
  const { currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage, 
    setPage, nextPage, prevPage, canNextPage, canPrevPage } = usePagination({
    totalItems: items.length,
    itemsPerPage: 10,
    initialPage: 1,
  });
  const currentItems = items.slice(startIndex, endIndex);
  return (
    <div>
      <h2>Pagination Demo</h2>
      <p>Current Page: {currentPage}</p>
      <p>Total Pages: {totalPages}</p>
      <p>Start Index: {startIndex}</p>
      <p>End Index: {endIndex}</p>
      <p>Items on Current Page: {itemsOnCurrentPage}</p>

      <button onClick={() => setPage(15)}>
        Go to Page 15
        </button>

        <button onClick={() => setPage(0)}>
        Go to Page 1
        </button>

        <button onClick={prevPage} disabled={!canPrevPage}>
        Previous
        </button>

        <button onClick={nextPage} disabled={!canNextPage}>
        Next
        </button>

        <h3>Items on this page:</h3>

        <ul>
        {currentItems.map((item) => (
            <li key={item}>{item}</li>
        ))}
        </ul>

        {/* ADD PAGE NUMBERS HERE */}
    <div>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setPage(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
    </div>

  );
}

export default PaginationDemo;