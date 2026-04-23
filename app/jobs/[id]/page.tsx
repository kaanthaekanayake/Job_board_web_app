import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, DollarSign, Building, Share2, BookmarkPlus, CheckCircle2 } from "lucide-react";
import { jobs } from "../../../data/jobs";
import { getThemeClasses } from "../../components/JobCard";

// Enable static generation for these routes
export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const job = jobs.find((j) => j.id === params.id);
  
  if (!job) {
    return { title: 'Job Not Found - Metegno Job Board' };
  }
  
  return {
    title: `${job.title} at ${job.company} - Metegno Job Board`,
    description: job.description.substring(0, 160) + '...',
  };
}

export default async function SingleJobPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const job = jobs.find((j) => j.id === params.id);

  if (!job) {
    notFound();
  }

  const theme = getThemeClasses(job.colorTheme);

  return (
    <div className="flex-1 bg-gray-50 pt-8 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to all jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
                <div className={`w-20 h-20 rounded-2xl ${theme.bg} ${theme.text} flex items-center justify-center shrink-0`}>
                  <Building className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                      <div className="text-xl text-gray-600 font-medium">{job.company}</div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors">
                        <BookmarkPlus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">{job.type}</span>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Role</h2>
              <div className="prose prose-purple max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">{job.description}</p>
                <p className="mb-4">
                  As a key member of our team at {job.company}, you will be instrumental in shaping the future of our product. We are looking for passionate individuals who are eager to learn, build, and grow with us.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Required Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map(tag => (
                    <span key={tag} className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl font-medium">{tag}</span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span>Competitive compensation package ({job.salary})</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span>Flexible work arrangements ({job.location})</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span>Mentorship from senior engineers and dedicated growth budget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span>Health, dental, and vision insurance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-lg sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Interested in this role?</h3>
              <p className="text-gray-500 mb-6 text-sm">Submit your application today. It only takes a few minutes.</p>
              
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all mb-4">
                Apply Now
              </button>
              
              <p className="text-xs text-center text-gray-400">
                By applying, you agree to Metegno&apos;s Terms of Service and Privacy Policy.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">About {job.company}</h4>
                <div className={`w-12 h-12 rounded-xl ${theme.bg} ${theme.text} flex items-center justify-center mb-4`}>
                  <Building className="w-6 h-6" />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {job.company} is building the next generation of software products. Join us to make a lasting impact.
                </p>
                <Link href="#" className="text-sm font-medium text-purple-600 hover:text-purple-700">
                  View company profile &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
