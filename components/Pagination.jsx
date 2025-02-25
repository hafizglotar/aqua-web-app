export default function Pagination({ currentPage, lastPage, onPageChange }) {
    
    console.log("Last Page: ", lastPage);
    
    const visiblePages = 4; 
    const pageNumbers = [];



    let startPage = Math.max(1, currentPage - 2);
    console.log("Starting page: ", startPage);

    let endPage = Math.min(lastPage, startPage + visiblePages - 1);
    console.log("Ending page: ", endPage);

    if (endPage >= lastPage - 1) {
        startPage = Math.max(1, lastPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    console.log("total number of page" + pageNumbers);
    return (
        <div className="flex justify-center mt-4 space-x-2">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
                Previous
            </button>
            {/* Show First Page + Dots if necessary */}
            {startPage > 1 && (
                <>
                    <button 
                        onClick={() => onPageChange(1)}
                        className={`px-4 py-2 rounded ${
                            currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        1
                    </button>
                    {startPage > 2 && <span className="px-3 py-2">...</span>}
                </>
            )}
            {/* Dynamic Page Numbers */}
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-4 py-2 rounded ${
                        currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                >
                    {number}
                </button>
            ))}
            {/* Show Last Page + Dots if necessary */}
            {endPage < lastPage && (
                <>
                    {endPage < lastPage - 1 && <span className="px-3 py-2">...</span>}
                    <button 
                        onClick={() => onPageChange(lastPage)}
                        className={`px-4 py-2 rounded ${
                            currentPage === lastPage ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        {lastPage}
                    </button>
                </>
            )}
            {/* Next Button */}
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
