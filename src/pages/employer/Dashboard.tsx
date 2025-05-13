import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase as BriefcaseBusiness, Users, TrendingUp, Eye, MessageSquare, ChevronRight, Clock, FileCheck, FileSearch, UserCheck } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { mockJobs } from '../../data/mockData';

const EmployerDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const employerJobs = mockJobs.slice(0, 3); // For demo purposes
  
  // Mock statistics
  const stats = {
    activeJobs: 5,
    totalApplications: 47,
    viewsThisMonth: 1256,
    hiredCandidates: 3
  };
  
  // Mock recent applications
  const recentApplications = [
    {
      id: 'app1',
      applicantName: 'David Johnson',
      jobTitle: 'Senior Frontend Developer',
      date: '2024-03-25T14:30:00Z',
      status: 'new'
    },
    {
      id: 'app2',
      applicantName: 'Jennifer Smith',
      jobTitle: 'UX/UI Designer',
      date: '2024-03-24T09:15:00Z',
      status: 'reviewed'
    },
    {
      id: 'app3',
      applicantName: 'Michael Brown',
      jobTitle: 'Full Stack Developer',
      date: '2024-03-23T16:45:00Z',
      status: 'interviewing'
    }
  ];

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
            to="/employer/post-job"
          >
            Post a New Job
          </Button>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full">
              <BriefcaseBusiness className="h-6 w-6 text-blue-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Active Jobs</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.activeJobs}</p>
              <p className="text-sm text-green-600">+2 from last month</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-indigo-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Applications</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.totalApplications}</p>
              <p className="text-sm text-green-600">+12 this week</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start">
            <div className="bg-orange-100 p-3 rounded-full">
              <Eye className="h-6 w-6 text-orange-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Profile Views</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.viewsThisMonth}</p>
              <p className="text-sm text-green-600">+23% this month</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-full">
              <UserCheck className="h-6 w-6 text-green-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Hired Candidates</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.hiredCandidates}</p>
              <p className="text-sm text-green-600">+1 this month</p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Recent Activity & Job Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
                <Link to="/employer/applications" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  View all <ChevronRight size={16} />
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                        {application.applicantName.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{application.applicantName}</p>
                      <p className="text-sm text-gray-500 truncate">Applied for {application.jobTitle}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {application.status === 'new' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          New
                        </span>
                      )}
                      {application.status === 'reviewed' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Reviewed
                        </span>
                      )}
                      {application.status === 'interviewing' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Interviewing
                        </span>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-4"
                      as={Link}
                      to={`/employer/applications/${application.id}`}
                    >
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          
          <Card className="mt-6">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Your Active Job Listings</h2>
                <Link to="/employer/manage-jobs" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  Manage all <ChevronRight size={16} />
                </Link>
              </div>
              
              <div className="space-y-4">
                {employerJobs.map((job) => (
                  <div key={job.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="mb-3 md:mb-0">
                      <h3 className="font-medium text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap items-center mt-1 text-sm text-gray-500">
                        <Clock size={14} className="mr-1" />
                        <span>Posted {new Date(job.postedAt).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <Users size={14} className="mr-1" />
                        <span>{job.applications || 0} applications</span>
                        <span className="mx-2">•</span>
                        <Eye size={14} className="mr-1" />
                        <span>{job.views || 0} views</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<FileSearch size={14} />}
                        as={Link}
                        to={`/jobs/${job.id}`}
                      >
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<FileCheck size={14} />}
                        as={Link}
                        to={`/employer/applications?job=${job.id}`}
                      >
                        Applications
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  variant="primary"
                  as={Link}
                  to="/employer/post-job"
                >
                  Post a New Job
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Overview</h2>
              
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                    {currentUser?.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{currentUser?.name}</h3>
                  <p className="text-gray-500">{currentUser?.email}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Profile Completion</h4>
                  <div className="mt-1 relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div style={{ width: '70%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">70% complete</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Profile Visibility</h4>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Visible to Candidates
                  </span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <Link 
                  to="/employer/profile" 
                  className="block text-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Complete Your Company Profile
                </Link>
              </div>
            </div>
          </Card>
          
          <Card className="mt-6">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  leftIcon={<BriefcaseBusiness size={18} />}
                  as={Link}
                  to="/employer/post-job"
                >
                  Post a New Job
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  leftIcon={<Users size={18} />}
                  as={Link}
                  to="/employer/applications"
                >
                  View Applications
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  leftIcon={<TrendingUp size={18} />}
                  as={Link}
                  to="/employer/analytics"
                >
                  View Analytics
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  leftIcon={<MessageSquare size={18} />}
                  as={Link}
                  to="/employer/messages"
                >
                  Messages
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;