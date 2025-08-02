"use client";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav
      className="inline-flex rounded-md shadow-sm space-x-2"
      aria-label="Pagination"
    >
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded-md disabled:opacity-50"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`px-3 py-1 border rounded-md ${
            page === currentPage ? "bg-primary text-white" : "hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
}
