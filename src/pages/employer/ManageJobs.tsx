import Card from '../../components/ui/Card';
import { Briefcase, Edit, Trash2 } from 'lucide-react';
import Button from '../../components/ui/Button';

const ManageJobs = () => {
  // This would typically fetch from your backend
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      location: 'Remote',
      type: 'Full-time',
      applicants: 12,
      status: 'Active',
      postedDate: '2024-01-15',
    },
    {
      id: 2,
      title: 'Product Designer',
      location: 'New York, NY',
      type: 'Full-time',
      applicants: 8,
      status: 'Active',
      postedDate: '2024-01-14',
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Manage Job Listings
        </h1>
        <p className="text-gray-600">
          View and manage all your posted job listings
        </p>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <div className="mt-1 space-y-1">
                    <p className="text-sm text-gray-600">
                      {job.location} • {job.type}
                    </p>
                    <p className="text-sm text-gray-600">
                      Posted on {new Date(job.postedDate).toLocaleDateString()}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {job.status}
                      </span>
                      <span className="text-sm text-gray-600">
                        {job.applicants} applicants
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => {
                    /* Handle edit */
                  }}
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-red-600 hover:text-red-700"
                  onClick={() => {
                    /* Handle delete */
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageJobs;
