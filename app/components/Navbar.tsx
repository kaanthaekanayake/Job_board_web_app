import Link from "next/link";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">
                Metegno
              </span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/jobs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors">
                Find Jobs
              </Link>
              <Link href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors">
                Companies
              </Link>
              <Link href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors">
                Salaries
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-gray-400 hover:text-purple-600 cursor-pointer p-2 rounded-full hover:bg-purple-50 transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Sign In
            </Link>
            <Link href="#" className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 shadow-sm hover:shadow-md transition-all">
              Post a Job
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button className="text-gray-500 hover:text-gray-700 p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
