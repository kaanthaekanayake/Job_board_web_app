import { Suspense } from "react";
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react";
import Link from "next/link";
import JobCard from "../components/JobCard";
import JobSearchFilters from "../components/JobSearchFilters";
import { jobs } from "../../data/jobs";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata = {
  title: "Search Jobs - Metegno Job Board",
  description: "Find your dream software engineering job",
};

export default async function JobsPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  
  // Extract search params
  const q = typeof searchParams.q === 'string' ? searchParams.q.toLowerCase() : "";
  const location = typeof searchParams.location === 'string' ? searchParams.location : "";
  const type = typeof searchParams.type === 'string' ? searchParams.type : "";
  
  const pageParam = searchParams.page;
  const page = typeof pageParam === 'string' ? parseInt(pageParam) : 1;
  const currentPage = isNaN(page) || page < 1 ? 1 : page;
  
  // Filter jobs
  let filteredJobs = jobs;
  
  if (q) {
    filteredJobs = filteredJobs.filter(job => 
      job.title.toLowerCase().includes(q) || 
      job.company.toLowerCase().includes(q) ||
      job.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }
  
  if (location) {
    filteredJobs = filteredJobs.filter(job => job.location.includes(location));
  }
  
  if (type) {
    filteredJobs = filteredJobs.filter(job => job.type === type);
  }

  // Pagination
  const jobsPerPage = 6;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const currentJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div className="flex-1 bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Explore Opportunities
          </h1>
          <p className="text-xl text-gray-600">
            Discover roles that match your skills and career goals.
          </p>
        </div>

        <Suspense fallback={<div className="h-20 bg-gray-100 rounded-2xl animate-pulse mb-8"></div>}>
          <JobSearchFilters />
        </Suspense>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn&apos;t find any jobs matching your current filters. Try adjusting your search criteria or clearing the filters.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center text-sm text-gray-500 font-medium">
              <span>Showing {currentJobs.length} of {filteredJobs.length} jobs</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Link 
                  href={{
                    pathname: '/jobs',
                    query: { ...searchParams, page: currentPage - 1 > 0 ? currentPage - 1 : 1 }
                  }}
                  className={`p-2 rounded-lg border ${currentPage === 1 ? 'border-gray-200 text-gray-400 pointer-events-none' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Link>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNumber = i + 1;
                    return (
                      <Link
                        key={pageNumber}
                        href={{
                          pathname: '/jobs',
                          query: { ...searchParams, page: pageNumber }
                        }}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                          pageNumber === currentPage 
                            ? 'bg-purple-600 text-white shadow-sm' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {pageNumber}
                      </Link>
                    );
                  })}
                </div>
                <Link 
                  href={{
                    pathname: '/jobs',
                    query: { ...searchParams, page: currentPage < totalPages ? currentPage + 1 : totalPages }
                  }}
                  className={`p-2 rounded-lg border ${currentPage === totalPages ? 'border-gray-200 text-gray-400 pointer-events-none' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors`}
                >
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
