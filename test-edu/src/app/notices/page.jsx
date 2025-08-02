"use client";

import AnimatedWrapper from "@/components/AnimatedWrapper";
import NoticeCard from "@/components/Notice/NoticeCard";
import NoticeFilter from "@/components/Notice/NoticeFilter";
import Pagination from "@/components/Notice/Pagination";
import notices from "@/data/notice";
import { useEffect, useState } from "react";

export default function NoticesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 4;

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.titleBn.includes(searchTerm);
    const matchesFilter = filterType === "all" || notice.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);
  const paginatedNotices = filteredNotices.slice(
    (currentPage - 1) * noticesPerPage,
    currentPage * noticesPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterType]);

  return (
    <div className="min-h-screen bg-background">
      {/* Your original top header design */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg
              className="h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold">Notice Board</h1>
          </div>
          <p className="text-xl opacity-90">নোটিশ বোর্ড</p>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Stay updated with all the latest announcements, exam schedules, and
            important notices from our institution.
          </p>
        </div>
      </section>

      <AnimatedWrapper>
        <NoticeFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
        />

        {paginatedNotices.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No notices found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedNotices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </AnimatedWrapper>
    </div>
  );
}
