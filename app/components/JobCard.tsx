import Link from "next/link";
import { MapPin, Clock, DollarSign, Building } from "lucide-react";
import type { Job } from "../../data/jobs";

export const getThemeClasses = (theme: string) => {
  switch (theme) {
    case 'purple': return { bg: 'bg-purple-50', text: 'text-purple-600', hover: 'group-hover:text-purple-600' };
    case 'orange': return { bg: 'bg-orange-50', text: 'text-orange-600', hover: 'group-hover:text-orange-600' };
    case 'teal': return { bg: 'bg-teal-50', text: 'text-teal-600', hover: 'group-hover:text-teal-600' };
    case 'pink': return { bg: 'bg-pink-50', text: 'text-pink-600', hover: 'group-hover:text-pink-600' };
    case 'indigo': return { bg: 'bg-indigo-50', text: 'text-indigo-600', hover: 'group-hover:text-indigo-600' };
    case 'blue':
    default: return { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'group-hover:text-blue-600' };
  }
};

export default function JobCard({ job }: { job: Job }) {
  const theme = getThemeClasses(job.colorTheme);
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl ${theme.bg} ${theme.text} flex items-center justify-center shrink-0`}>
            <Building className="w-6 h-6" />
          </div>
          <div>
            <Link href={`/jobs/${job.id}`}>
              <h3 className={`text-xl font-bold text-gray-900 ${theme.hover} transition-colors`}>{job.title}</h3>
            </Link>
            <p className="text-gray-500 font-medium">{job.company}</p>
          </div>
        </div>
        {job.isNew && <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full shrink-0">New</span>}
        {job.isHot && <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full shrink-0">Hot</span>}
      </div>
      <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
        {job.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {job.tags.map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">{tag}</span>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-4 gap-4 mt-auto">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
          <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {job.salary}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
        </div>
        <Link href={`/jobs/${job.id}`} className="px-4 py-2 bg-purple-50 text-purple-700 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors w-full sm:w-auto text-center block">
          Apply Now
        </Link>
      </div>
    </div>
  );
}
