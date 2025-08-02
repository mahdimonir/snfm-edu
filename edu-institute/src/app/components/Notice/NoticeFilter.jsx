"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, Search } from "lucide-react";

export default function NoticeFilter({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
}) {
  return (
    <section className="py-8 bg-accent rounded-lg shadow-sm mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700 font-semibold">
            <Filter className="h-5 w-5" />
            <span>Filter Notices</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full text-gray-700 placeholder:text-gray-400 bg-white border border-gray-300 focus:border-primary focus:ring-0"
              />
            </div>

            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-48 bg-white text-gray-700 border border-gray-300 focus:border-primary focus:ring-0">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="admission">Admission</SelectItem>
                <SelectItem value="result">Results</SelectItem>
                <SelectItem value="event">Events</SelectItem>
                <SelectItem value="scholarship">Scholarship</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
