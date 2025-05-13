import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase as BriefcaseBusiness, Clock, Bell, TrendingUp, ChevronRight, Search, Building, Bookmark, FileCheck, User } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { mockJobs } from '../../data/mockData';
import { Job } from '../../types/job';
import { formatDistanceToNow } from 'date-fns';

const ApplicantDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  
  // Mock data
  const recommendedJobs = mockJobs.slice(0, 3);
  const savedJobs = mockJobs.slice(3, 5);
  
  // Mock recent applications
  const recentApplications = [
    {
      id: 'app1',
      job: mockJobs[0],
      date: '2024-03-25T14:30:00Z',
      status: 'pending'
    },
    {
      id: 'app2',
      job: mockJobs[2],
      date: '2024-03-20T09:15:00Z',
      status: 'reviewed'
    }
  ];
  
  // Render job card
  const renderJobCard = (job: Job, applied: boolean = false) => (
    <div key={job.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-start">
        <div className="h-12 w-12 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden mr-4">
          {job.companyLogo ? (
            <img
              src={job.companyLogo}
              alt={job.company}
              className="h-full w-full object-contain"
            />
          ) : (
            <Building size={24} className="text-blue-500" />
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">
            <Link to={`/jobs/${job.id}`} className="hover:text-blue-700">{job.title}</Link>
          </h3>
          <p className="text-sm text-gray-600">{job.company}</p>
          
          <div className="flex flex-wrap items-center mt-1 text-xs text-gray-500">
            <span className="flex items-center">
              <Clock size={12} className="mr-1" />
              {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
            </span>
            <span className="mx-2">•</span>
            <span>{job.location}{job.remote ? ' (Remote)' : ''}</span>
            {applied && (
              <>
                <span className="mx-2">•</span>
                <span className="text-blue-600 font-medium">Applied</span>
              </>
            )}
          </div>
        </div>
        
        <div className="ml-2">
          <Button
            variant="outline"
            size="sm"
            as={Link}
            to={`/jobs/${job.id}`}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {currentUser?.name}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button 
            variant="primary"
            as={Link}
            to="/jobs"
            leftIcon={<Search size={16} />}
          >
            Find Jobs
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Completeness */}
          <Card className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Complete Your Profile</h2>
              <p className="mb-4">A complete profile helps employers find you and increases your chances of getting hired!</p>
              
              <div className="w-full bg-blue-800 rounded-full h-2.5 mb-2">
                <div className="bg-white h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-sm">Profile strength: <span className="font-medium">45% - Basic</span></p>
              
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-blue-800"
                  as={Link}
                  to="/applicant/profile"
                >
                  Complete Profile
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Recommended Jobs */}
          <Card>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Recommended Jobs</h2>
                <Link to="/jobs" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  View more <ChevronRight size={16} />
                </Link>
              </div>
              
              <div className="space-y-3">
                {recommendedJobs.map(job => renderJobCard(job))}
              </div>
            </div>
          </Card>
          
          {/* Recent Applications */}
          <Card>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Your Applications</h2>
                <Link to="/applicant/applications" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  View all <ChevronRight size={16} />
                </Link>
              </div>
              
              {recentApplications.length > 0 ? (
                <div className="space-y-3">
                  {recentApplications.map(application => (
                    <div key={application.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden mr-4">
                          {application.job.companyLogo ? (
                            <img
                              src={application.job.companyLogo}
                              alt={application.job.company}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <Building size={24} className="text-blue-500" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">
                            <Link to={`/jobs/${application.job.id}`} className="hover:text-blue-700">{application.job.title}</Link>
                          </h3>
                          <p className="text-sm text-gray-600">{application.job.company}</p>
                          
                          <div className="flex flex-wrap items-center mt-1 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Clock size={12} className="mr-1" />
                              Applied {formatDistanceToNow(new Date(application.date), { addSuffix: true })}
                            </span>
                            <span className="mx-2">•</span>
                            {application.status === 'pending' && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                Pending
                              </span>
                            )}
                            {application.status === 'reviewed' && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                Reviewed
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="ml-2">
                          <Button
                            variant="outline"
                            size="sm"
                            as={Link}
                            to={`/applicant/applications/${application.id}`}
                          >
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <BriefcaseBusiness size={48} className="mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No applications yet</h3>
                  <p className="text-gray-500 mb-4">Start applying to jobs to track your applications here</p>
                  <Button
                    variant="primary"
                    as={Link}
                    to="/jobs"
                  >
                    Find Jobs
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          {/* Profile Card */}
          <Card>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl mr-4">
                  {currentUser?.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{currentUser?.name}</h2>
                  <p className="text-gray-500">{currentUser?.email}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Resume</span>
                  <span className="text-red-500">Missing</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Skills</span>
                  <span className="text-yellow-500">Incomplete</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Experience</span>
                  <span className="text-red-500">Missing</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Education</span>
                  <span className="text-red-500">Missing</span>
                </div>
              </div>
              
              <Button
                variant="outline"
                className="w-full"
                leftIcon={<User size={16} />}
                as={Link}
                to="/applicant/profile"
              >
                Complete Profile
              </Button>
            </div>
          </Card>
          
          {/* Saved Jobs */}
          <Card>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Saved Jobs</h2>
                <Link to="/applicant/saved-jobs" className="text-sm text-blue-600 hover:text-blue-800">
                  View all
                </Link>
              </div>
              
              {savedJobs.length > 0 ? (
                <div className="space-y-3">
                  {savedJobs.map(job => (
                    <div key={job.id} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="h-10 w-10 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden mr-3">
                        {job.companyLogo ? (
                          <img
                            src={job.companyLogo}
                            alt={job.company}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <Building size={20} className="text-blue-500" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 text-sm truncate">
                          <Link to={`/jobs/${job.id}`} className="hover:text-blue-700">{job.title}</Link>
                        </h3>
                        <p className="text-xs text-gray-500 truncate">{job.company}</p>
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-2"
                        as={Link}
                        to={`/jobs/${job.id}`}
                      >
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <Bookmark size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500 text-sm">No saved jobs yet</p>
                </div>
              )}
            </div>
          </Card>
          
          {/* Quick Actions */}
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  leftIcon={<Search size={18} />}
                  as={Link}
                  to="/jobs"
                >
                  Find Jobs
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  leftIcon={<FileCheck size={18} />}
                  as={Link}
                  to="/applicant/applications"
                >
                  My Applications
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  leftIcon={<Bookmark size={18} />}
                  as={Link}
                  to="/applicant/saved-jobs"
                >
                  Saved Jobs
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  leftIcon={<Bell size={18} />}
                  as={Link}
                  to="/applicant/alerts"
                >
                  Job Alerts
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;