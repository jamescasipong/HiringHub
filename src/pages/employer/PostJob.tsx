import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Briefcase as BriefcaseBusiness, MapPin, DollarSign, Calendar, Clock, Briefcase } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

interface JobFormData {
  title: string;
  category: string;
  employmentType: string;
  experience: string;
  location: string;
  remote: boolean;
  salary: {
    min: string;
    max: string;
    currency: string;
    period: string;
  };
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  deadline: string;
  applicationEmail: string;
  applicationUrl: string;
  featured: boolean;
  urgent: boolean;
}

const jobCategories = [
  'Software Development',
  'Design',
  'Marketing',
  'Sales',
  'Customer Service',
  'Finance',
  'Human Resources',
  'Product Management',
  'Data Science',
  'Engineering',
  'Healthcare',
  'Education',
  'Other'
];

const employmentTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship'
];

const experienceLevels = [
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'Executive'
];

const PostJob: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm<JobFormData>({
    defaultValues: {
      title: '',
      category: '',
      employmentType: 'Full-time',
      experience: 'Mid Level',
      location: '',
      remote: false,
      salary: {
        min: '',
        max: '',
        currency: 'USD',
        period: 'year'
      },
      description: '',
      requirements: '',
      responsibilities: '',
      benefits: '',
      deadline: '',
      applicationEmail: '',
      applicationUrl: '',
      featured: false,
      urgent: false
    }
  });
  
  const isRemote = watch('remote');
  
  const onSubmit = async (data: JobFormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call to save the job
      console.log('Submitting job data:', data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Job posted successfully!');
      navigate('/employer/manage-jobs');
    } catch (error) {
      console.error('Error posting job:', error);
      toast.error('Failed to post job. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Post a New Job</h1>
        <p className="text-gray-600">Create a compelling job listing to attract the best candidates</p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Info */}
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Basic Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <BriefcaseBusiness className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="title"
                          type="text"
                          {...register('title', { required: 'Job title is required' })}
                          className={`block w-full pl-10 py-3 border ${
                            errors.title ? 'border-red-300' : 'border-gray-300'
                          } rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500`}
                          placeholder="e.g. Senior Frontend Developer"
                        />
                      </div>
                      {errors.title && (
                        <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                          Job Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="category"
                          {...register('category', { required: 'Job category is required' })}
                          className={`block w-full py-3 border ${
                            errors.category ? 'border-red-300' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                        >
                          <option value="">Select a category</option>
                          {jobCategories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                        {errors.category && (
                          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700 mb-1">
                          Employment Type <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Briefcase className="h-5 w-5 text-gray-400" />
                          </div>
                          <select
                            id="employmentType"
                            {...register('employmentType', { required: 'Employment type is required' })}
                            className={`block w-full pl-10 py-3 border ${
                              errors.employmentType ? 'border-red-300' : 'border-gray-300'
                            } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                          >
                            {employmentTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                          Experience Level <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="experience"
                          {...register('experience', { required: 'Experience level is required' })}
                          className={`block w-full py-3 border ${
                            errors.experience ? 'border-red-300' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                        >
                          {experienceLevels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                          Application Deadline
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="deadline"
                            type="date"
                            {...register('deadline')}
                            className="block w-full pl-10 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                          Location <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center">
                          <input
                            id="remote"
                            type="checkbox"
                            {...register('remote')}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="remote" className="ml-2 block text-sm text-gray-700">
                            Remote Job
                          </label>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="location"
                          type="text"
                          {...register('location', { 
                            required: isRemote ? false : 'Location is required for non-remote jobs'
                          })}
                          className={`block w-full pl-10 py-3 border ${
                            errors.location ? 'border-red-300' : 'border-gray-300'
                          } rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500`}
                          placeholder={isRemote ? 'Remote (Optional office location)' : 'e.g. San Francisco, CA'}
                          disabled={isRemote}
                        />
                      </div>
                      {errors.location && (
                        <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Salary Range (Optional)
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <DollarSign className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="number"
                            {...register('salary.min')}
                            className="block w-full pl-10 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Min"
                          />
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <DollarSign className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="number"
                            {...register('salary.max')}
                            className="block w-full pl-10 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Max"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                          <select
                            {...register('salary.currency')}
                            className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                            <option value="CAD">CAD ($)</option>
                            <option value="AUD">AUD ($)</option>
                          </select>
                        </div>
                        <div>
                          <select
                            {...register('salary.period')}
                            className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="year">Per Year</option>
                            <option value="month">Per Month</option>
                            <option value="hour">Per Hour</option>
                            <option value="contract">Per Contract</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Job Details */}
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Job Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Job Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="description"
                        rows={6}
                        {...register('description', { required: 'Job description is required' })}
                        className={`block w-full py-3 border ${
                          errors.description ? 'border-red-300' : 'border-gray-300'
                        } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Provide a detailed description of the job..."
                      ></textarea>
                      {errors.description && (
                        <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                      )}
                      <p className="mt-1 text-sm text-gray-500">
                        You can use basic HTML formatting for the description.
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                        Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="requirements"
                        rows={4}
                        {...register('requirements', { required: 'Requirements are required' })}
                        className={`block w-full py-3 border ${
                          errors.requirements ? 'border-red-300' : 'border-gray-300'
                        } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="List the requirements for the job (education, skills, experience)..."
                      ></textarea>
                      {errors.requirements && (
                        <p className="mt-1 text-sm text-red-600">{errors.requirements.message}</p>
                      )}
                      <p className="mt-1 text-sm text-gray-500">
                        List each requirement on a new line for better formatting.
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700 mb-1">
                        Responsibilities <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="responsibilities"
                        rows={4}
                        {...register('responsibilities', { required: 'Responsibilities are required' })}
                        className={`block w-full py-3 border ${
                          errors.responsibilities ? 'border-red-300' : 'border-gray-300'
                        } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="List the key responsibilities for this role..."
                      ></textarea>
                      {errors.responsibilities && (
                        <p className="mt-1 text-sm text-red-600">{errors.responsibilities.message}</p>
                      )}
                      <p className="mt-1 text-sm text-gray-500">
                        List each responsibility on a new line for better formatting.
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-1">
                        Benefits (Optional)
                      </label>
                      <textarea
                        id="benefits"
                        rows={4}
                        {...register('benefits')}
                        className="block w-full py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="List the benefits and perks offered with this position..."
                      ></textarea>
                      <p className="mt-1 text-sm text-gray-500">
                        Highlighting benefits can attract more candidates. List each benefit on a new line.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Application Settings */}
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Application Settings</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="applicationEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Application Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="applicationEmail"
                        type="email"
                        {...register('applicationEmail', { 
                          required: 'Application email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className={`block w-full py-3 border ${
                          errors.applicationEmail ? 'border-red-300' : 'border-gray-300'
                        } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Where should applications be sent?"
                      />
                      {errors.applicationEmail && (
                        <p className="mt-1 text-sm text-red-600">{errors.applicationEmail.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="applicationUrl" className="block text-sm font-medium text-gray-700 mb-1">
                        External Application URL (Optional)
                      </label>
                      <input
                        id="applicationUrl"
                        type="url"
                        {...register('applicationUrl')}
                        className="block w-full py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g. https://your-company.com/careers/job-123"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        If you want candidates to apply through an external site, provide the URL here.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publishing Options */}
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Publishing Options</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="featured"
                        type="checkbox"
                        {...register('featured')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                        Feature this job (Recommended)
                      </label>
                    </div>
                    <p className="text-sm text-gray-500 pl-6">
                      Featured jobs are highlighted and shown at the top of search results.
                    </p>
                    
                    <div className="flex items-center pt-2">
                      <input
                        id="urgent"
                        type="checkbox"
                        {...register('urgent')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="urgent" className="ml-2 block text-sm text-gray-700">
                        Mark as urgent
                      </label>
                    </div>
                    <p className="text-sm text-gray-500 pl-6">
                      Urgent jobs are highlighted with a special tag to attract immediate attention.
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Preview & Submit */}
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Submit Job</h2>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Ready to publish your job listing? Click the button below to make it live.
                    </p>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      size="lg"
                      isLoading={isSubmitting}
                    >
                      Post Job Now
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => navigate('/employer/manage-jobs')}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* Help & Tips */}
              <Card className="bg-blue-50 border-blue-100">
                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Tips for a Great Job Post</h2>
                  
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Be clear and specific in the job title</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Provide a detailed job description</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>List specific requirements and qualifications</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Include salary range if possible</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Highlight company benefits and culture</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PostJob;