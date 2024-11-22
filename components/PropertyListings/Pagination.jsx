import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination flex justify-center space-x-2">
      <button
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded ${
            page === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300'
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;