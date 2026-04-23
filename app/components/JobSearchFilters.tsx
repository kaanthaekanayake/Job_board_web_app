"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, MapPin, Briefcase } from "lucide-react";

export default function JobSearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [type, setType] = useState(searchParams.get("type") || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    
    // Always reset to page 1 on new search
    params.set("page", "1");
    
    router.push(`/jobs?${params.toString()}`);
  };

  const handleClear = () => {
    setQuery("");
    setLocation("");
    setType("");
    router.push("/jobs");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 mb-8">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Job title, company, or skills..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors"
          />
        </div>
        
        <div className="md:w-64 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm appearance-none transition-colors"
          >
            <option value="">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="SF, CA">San Francisco, CA</option>
            <option value="NYC, NY">New York, NY</option>
            <option value="Austin, TX">Austin, TX</option>
            <option value="Chicago, IL">Chicago, IL</option>
            <option value="Washington, DC">Washington, DC</option>
            <option value="Seattle, WA">Seattle, WA</option>
            <option value="Boston, MA">Boston, MA</option>
            <option value="Miami, FL">Miami, FL</option>
            <option value="Los Angeles, CA">Los Angeles, CA</option>
          </select>
        </div>

        <div className="md:w-64 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Briefcase className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm appearance-none transition-colors"
          >
            <option value="">All Job Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm hover:shadow-md whitespace-nowrap"
          >
            Search Jobs
          </button>
          {(query || location || type) && (
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors whitespace-nowrap"
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
