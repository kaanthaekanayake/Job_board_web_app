import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Briefcase, Clock, DollarSign, Building, ArrowRight } from "lucide-react";

export default function Home() {
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
            {/* Job Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Frontend Developer Intern</h3>
                    <p className="text-gray-500 font-medium">TechNova Systems</p>
                  </div>
                </div>
                <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full shrink-0">New</span>
              </div>
              <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
                Join our core product team to build scalable, high-performance React and Next.js applications. You will be working directly on features that impact millions of users, implementing modern UI/UX designs.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">React</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">TypeScript</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">Tailwind CSS</span>
              </div>
              <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-4 gap-4 mt-auto">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Remote</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> $30-$45/hr</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Full-time</span>
                </div>
                <button className="px-4 py-2 bg-purple-50 text-purple-700 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors w-full sm:w-auto text-center">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Machine Learning Engineer</h3>
                    <p className="text-gray-500 font-medium">Cognitive AI</p>
                  </div>
                </div>
                <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full shrink-0">Hot</span>
              </div>
              <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
                Help us push the boundaries of artificial intelligence. You will be training large language models (LLMs), fine-tuning neural networks, and deploying models to production using Python and PyTorch.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">Python</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">PyTorch</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">LLMs</span>
              </div>
              <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-4 gap-4 mt-auto">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> SF, CA</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> $120k-$150k</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Full-time</span>
                </div>
                <button className="px-4 py-2 bg-purple-50 text-purple-700 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors w-full sm:w-auto text-center">
                  Apply Now
                </button>
              </div>
            </div>
            
            {/* Job Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Backend Engineering Co-op</h3>
                    <p className="text-gray-500 font-medium">DataStream</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
                Dive into distributed systems and microservices. You&apos;ll be writing Go and Rust to build scalable data pipelines processing millions of events per second in a fast-paced environment.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">Go</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">Rust</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">Kafka</span>
              </div>
              <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-4 gap-4 mt-auto">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> NYC, NY</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> $35-$50/hr</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Internship</span>
                </div>
                <button className="px-4 py-2 bg-purple-50 text-purple-700 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors w-full sm:w-auto text-center">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 4 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Full Stack Developer</h3>
                    <p className="text-gray-500 font-medium">CloudNative Labs</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
                Take ownership of features from database design to UI implementation. You&apos;ll work with Next.js on the frontend and Node.js on the backend to deliver seamless user experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">Next.js</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">Node.js</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">PostgreSQL</span>
              </div>
              <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-4 gap-4 mt-auto">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Remote</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> $90k-$110k</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Full-time</span>
                </div>
                <button className="px-4 py-2 bg-purple-50 text-purple-700 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors w-full sm:w-auto text-center">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          
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
