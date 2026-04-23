import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-purple-100 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Metegno
              </span>
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              Connecting brilliant student software engineers with the world&apos;s most innovative companies.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Candidates</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-purple-600">Browse Jobs</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-purple-600">Companies</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-purple-600">Salaries</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Employers</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-purple-600">Post a Job</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-purple-600">Search Resumes</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-purple-600">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-purple-600">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-purple-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Metegno Job Board. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social Icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
