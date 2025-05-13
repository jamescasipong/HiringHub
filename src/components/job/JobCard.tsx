import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { MapPin, Clock, Briefcase, DollarSign, Building, BookmarkPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Job } from '../../types/job';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface JobCardProps {
  job: Job;
  featured?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`overflow-hidden ${featured ? 'ring-2 ring-blue-500' : ''}`}
    >
      <Card className="h-full">
        <div className="flex flex-col h-full">
          {featured && (
            <div className="absolute top-0 right-0">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-bl-md bg-blue-100 text-xs font-medium text-blue-800">
                Featured
              </span>
            </div>
          )}

          <div className="flex items-start mb-4">
            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 border border-gray-200 mr-4">
              {job.companyLogo ? (
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-700">
                  <Building size={24} />
                </div>
              )}
            </div>
            <div>
              <h3 className="font-medium text-lg text-gray-900 hover:text-blue-600">
                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
              </h3>
              <p className="text-gray-600 text-sm">{job.company}</p>
            </div>
            <button className="ml-auto text-gray-400 hover:text-blue-500 transition-colors" title="Save job">
              <BookmarkPlus size={20} />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full">
              {job.employmentType}
            </span>
            {job.remote && (
              <span className="inline-flex items-center text-xs bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full">
                Remote
              </span>
            )}
            {job.featured && (
              <span className="inline-flex items-center text-xs bg-yellow-50 text-yellow-700 px-2.5 py-0.5 rounded-full">
                Featured
              </span>
            )}
            {job.urgent && (
              <span className="inline-flex items-center text-xs bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full">
                Urgent
              </span>
            )}
          </div>

          <div className="mb-4 text-sm line-clamp-2 text-gray-600">
            {job.shortDescription}
          </div>

          <div className="mt-auto grid grid-cols-2 gap-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}</span>
            </div>
            <div className="flex items-center">
              <Briefcase size={16} className="mr-1" />
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center">
              <DollarSign size={16} className="mr-1" />
              <span>{job.salary || 'Not specified'}</span>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 mr-2"
              leftIcon={<BookmarkPlus size={16} />}
            >
              Save
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              as={Link}
              to={`/jobs/${job.id}`}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default JobCard;