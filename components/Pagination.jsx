export default function Pagination({ currentPage, lastPage, onPageChange }) {
    return (
        <div className="flex justify-between mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
            Previous
            </button>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === lastPage}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
            Next
            </button>
        </div>
    );
  }
  