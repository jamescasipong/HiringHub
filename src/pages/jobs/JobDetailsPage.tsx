import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase as BriefcaseBusiness, DollarSign, Building, Share2, BookmarkPlus, Send } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Job } from '../../types/job';
import { mockJobs } from '../../data/mockData';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState('');
  const { isAuthenticated, userRole } = useAuth();
  
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchedJob = mockJobs.find(j => j.id === id);
    setJob(fetchedJob || null);
    
    // Scroll to top when job details load
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleApplyClick = () => {
    if (!isAuthenticated) {
      toast.error('Please log in to apply for this job');
      return;
    }
    
    if (userRole !== 'applicant') {
      toast.error('Only applicants can apply for jobs');
      return;
    }
    
    setIsApplying(true);
  };
  
  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resumeFile) {
      toast.error('Please upload your resume');
      return;
    }
    
    // In a real app, this would be an API call to submit the application
    toast.success('Your application has been submitted successfully!');
    setIsApplying(false);
    setCoverLetter('');
    setResumeFile(null);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };
  
  if (!job) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job listing you're looking for doesn't exist or has been removed.</p>
          <Link to="/jobs">
            <Button variant="primary">Browse All Jobs</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Job Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="mb-6">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                  {job.companyLogo ? (
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Building size={32} className="text-blue-500" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{job.title}</h1>
                      <p className="text-lg text-gray-700 mt-1">{job.company}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Featured
                        </span>
                      )}
                      {job.urgent && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Urgent
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-4 mt-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-2 text-gray-500" />
                      <span>{job.location}</span>
                      {job.remote && <span className="ml-2 text-green-600">(Remote)</span>}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <BriefcaseBusiness size={18} className="mr-2 text-gray-500" />
                      <span>{job.employmentType}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={18} className="mr-2 text-gray-500" />
                      <span>Posted {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign size={18} className="mr-2 text-gray-500" />
                      <span>{job.salary || 'Salary not specified'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1 sm:flex-none"
                  onClick={handleApplyClick}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 sm:flex-none"
                  leftIcon={<BookmarkPlus size={20} />}
                >
                  Save Job
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hidden sm:flex"
                  leftIcon={<Share2 size={20} />}
                >
                  Share
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {/* Job Description */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
                <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Requirements */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            
            {/* Responsibilities */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            
            {/* Benefits if available */}
            {job.benefits && job.benefits.length > 0 && (
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Benefits</h2>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 text-sm font-medium">
                          ✓
                        </span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )}
            
            {/* Apply Section */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Apply for this position</h2>
                
                {isApplying ? (
                  <form onSubmit={handleSubmitApplication}>
                    <div className="space-y-4">
                      <div>
                        <label 
                          htmlFor="resume" 
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Upload Resume/CV (Required)
                        </label>
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-medium
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
                          required
                        />
                        <p className="mt-1 text-sm text-gray-500">
                          Accepted formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>
                      
                      <div>
                        <label 
                          htmlFor="coverLetter" 
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Cover Letter (Optional)
                        </label>
                        <textarea
                          id="coverLetter"
                          rows={6}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Explain why you're a good fit for this position..."
                          value={coverLetter}
                          onChange={(e) => setCoverLetter(e.target.value)}
                        ></textarea>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          rightIcon={<Send size={16} />}
                        >
                          Submit Application
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          onClick={() => setIsApplying(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-600 mb-4">
                      Ready to apply for this {job.title} position at {job.company}?
                    </p>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleApplyClick}
                    >
                      Apply Now
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
          
          {/* Sidebar */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {/* Company Info */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Company</h2>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden mr-3">
                    {job.companyLogo ? (
                      <img
                        src={job.companyLogo}
                        alt={job.company}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Building size={24} className="text-blue-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{job.company}</h3>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700">
                    A leading company in the {job.employmentType.toLowerCase()} sector with a focus on innovation and growth.
                  </p>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full"
                >
                  View Company Profile
                </Button>
              </div>
            </Card>
            
            {/* Job Overview */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Job Overview</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Posted On:</span>
                    <span className="text-gray-900 font-medium">
                      {new Date(job.postedAt).toLocaleDateString()}
                    </span>
                  </li>
                  {job.deadline && (
                    <li className="flex justify-between">
                      <span className="text-gray-600">Deadline:</span>
                      <span className="text-gray-900 font-medium">
                        {new Date(job.deadline).toLocaleDateString()}
                      </span>
                    </li>
                  )}
                  <li className="flex justify-between">
                    <span className="text-gray-600">Job Type:</span>
                    <span className="text-gray-900 font-medium">{job.employmentType}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="text-gray-900 font-medium">{job.experience}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="text-gray-900 font-medium">{job.location}</span>
                  </li>
                  {job.salary && (
                    <li className="flex justify-between">
                      <span className="text-gray-600">Salary:</span>
                      <span className="text-gray-900 font-medium">{job.salary}</span>
                    </li>
                  )}
                  <li className="flex justify-between">
                    <span className="text-gray-600">Applications:</span>
                    <span className="text-gray-900 font-medium">{job.applications || 0}</span>
                  </li>
                </ul>
              </div>
            </Card>
            
            {/* Similar Jobs */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Similar Jobs</h2>
                <div className="space-y-4">
                  {mockJobs
                    .filter(j => j.id !== job.id && j.skills.some(skill => job.skills.includes(skill)))
                    .slice(0, 3)
                    .map((similarJob) => (
                      <div key={similarJob.id} className="flex border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden mr-3 flex-shrink-0">
                          {similarJob.companyLogo ? (
                            <img
                              src={similarJob.companyLogo}
                              alt={similarJob.company}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <Building size={18} className="text-blue-500" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 hover:text-blue-700">
                            <Link to={`/jobs/${similarJob.id}`}>{similarJob.title}</Link>
                          </h3>
                          <p className="text-sm text-gray-500">{similarJob.company}</p>
                          <div className="flex items-center mt-1 text-xs text-gray-500">
                            <MapPin size={12} className="mr-1" />
                            <span>{similarJob.location}</span>
                            <span className="mx-1">•</span>
                            <span>{formatDistanceToNow(new Date(similarJob.postedAt), { addSuffix: true })}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    as={Link}
                    to="/jobs"
                  >
                    View More Jobs
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;