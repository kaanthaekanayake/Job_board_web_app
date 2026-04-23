import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { jobs } from "../data/jobs";
import JobCard from "./components/JobCard";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const pageParam = searchParams.page;
  const page = typeof pageParam === 'string' ? parseInt(pageParam) : 1;
  const currentPage = isNaN(page) || page < 1 ? 1 : page;
  const jobsPerPage = 4;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  
  const currentJobs = jobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="z-10 relative">
              <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6">
                #1 Job Board for Software Students
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Software Career</span> Today
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Metegno connects brilliant student software engineers with the world&apos;s most innovative companies. Find internships, entry-level roles, and start building your future.
              </p>
              
              {/* Search Box */}
              <div className="bg-white p-2 rounded-2xl shadow-lg border border-purple-100 flex flex-col md:flex-row gap-2 max-w-3xl">
                <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-xl">
                  <Search className="w-5 h-5 text-gray-400 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Job title, keywords, or company" 
                    className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 py-3 px-3 outline-none"
                  />
                </div>
                <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-xl">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="City, state, or Remote" 
                    className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 py-3 px-3 outline-none"
                  />
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-sm hover:shadow-md flex items-center justify-center">
                  Search
                </button>
              </div>
              
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                <span>Popular:</span>
                <Link href="#" className="hover:text-purple-600 underline decoration-purple-200 underline-offset-4">Frontend</Link>
                <Link href="#" className="hover:text-purple-600 underline decoration-purple-200 underline-offset-4">Backend</Link>
                <Link href="#" className="hover:text-purple-600 underline decoration-purple-200 underline-offset-4">AI Engineer</Link>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent z-10 mix-blend-overlay"></div>
              <Image 
                src="/hero-image.png"
                alt="Abstract illustration representing software development and career growth"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-purple-200/50 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[400px] h-[400px] rounded-full bg-purple-300/30 blur-3xl opacity-50 pointer-events-none"></div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="py-6 px-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10k+</h3>
              <p className="text-gray-500 font-medium">Active Tech Jobs</p>
            </div>
            <div className="py-6 px-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5,000+</h3>
              <p className="text-gray-500 font-medium">Hiring Companies</p>
            </div>
            <div className="py-6 px-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100k+</h3>
              <p className="text-gray-500 font-medium">Student Placements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Opportunities</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Hand-picked roles from top companies looking for student talent. Discover where your skills can take you.
              </p>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              View all jobs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <Link 
                href={`/?page=${currentPage - 1}`}
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
                      href={`/?page=${pageNumber}`}
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
                href={`/?page=${currentPage + 1}`}
                className={`p-2 rounded-lg border ${currentPage === totalPages ? 'border-gray-200 text-gray-400 pointer-events-none' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors`}
              >
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          )}
          
          <div className="mt-8 text-center md:hidden">
             <Link href="#" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              View all jobs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to jumpstart your software engineering career?
          </h2>
          <p className="text-purple-200 mb-8 text-lg">
            Create your profile, upload your resume, and let top tech companies find you. It takes less than two minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="px-8 py-3.5 bg-white text-purple-700 font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
              Create Student Profile
            </Link>
            <Link href="#" className="px-8 py-3.5 bg-purple-700 text-white font-bold rounded-xl border border-purple-500 hover:bg-purple-600 transition-colors">
              I&apos;m an Employer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
