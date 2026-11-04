import { usePagination } from "../hooks/usePagination";

function PaginationDemo() {

  const items = Array.from(
    { length: 100 },
    (_, index) => `Item ${index + 1}`
    );
  const { currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage, setPage, nextPage, prevPage } = usePagination({
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
        Go to Page 5
        </button>

        <button onClick={() => setPage(0)}>
        Go to Page 0
        </button>

        <button onClick={nextPage}>
        Next
        </button>

        <button onClick={prevPage}>
        Previous
        </button>

        <h3>Items on this page:</h3>

        <ul>
        {currentItems.map((item) => (
            <li key={item}>{item}</li>
        ))}
        </ul>
    </div>

  );
}

export default PaginationDemo;