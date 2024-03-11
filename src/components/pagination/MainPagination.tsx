import { useState } from "react";

//types
import { PaginationType } from "@/@types/global.types";

export default function MainPagination({
  totalItems: defaultTotalItems = 500,
  itemsPerPage: defaultItemsPerPage = 10,
}: PaginationType) {
  const [totalItems, setTotalItems] = useState<number>(defaultTotalItems);
  const [itemsPerPage, setItemsPerPage] = useState<number>(defaultItemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = 1;
    if (currentPage > 3) {
      startPage = currentPage - 2;
    }
    for (let i = startPage; i <= Math.min(startPage + 4, totalPages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`mx-1 px-2 py-1 rounded-md ${
            i === currentPage ? "bg-blue text-white" : "bg-blue-dr text-blue"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setItemsPerPage(value);
    }
  };

  return (
    <div className="card-main items-center">
      <div className="container-title">
        <div className="flex flex-col">
          <h4>Pagination component with TypeScript</h4>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h6 className="w-fit">All items: {totalItems}</h6>
        <div className="flex justify-end items-center w-fit">
          <input
            type="number"
            value={totalItems}
            onChange={(e) => setTotalItems(parseInt(e.target.value))}
            className="mr-2 px-2 py-1 rounded-md bg-blue-dr text-blue"
          />
          <span>Total Items</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 pad-main flex-wrap">
        <div className="pagination-group">
          <button
            onClick={handleFirstPage}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded-md mr-2 bg-blue-dr text-blue"
          >
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded-md mr-2 bg-blue-dr text-blue"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          {renderPageNumbers()}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-2 py-1 rounded-md ml-2 bg-blue-dr text-blue"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
            className="px-2 py-1 rounded-md ml-2 bg-blue-dr text-blue"
          >
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
        <div className="flex items-center">
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="w-20 ml-4 mr-2 px-2 py-1 rounded-md bg-blue-dr text-blue"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={80}>80</option>
            <option value={100}>100</option>
          </select>
          <span>Items Per Page</span>
        </div>
      </div>
    </div>
  );
}
