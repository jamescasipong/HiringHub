import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Filter, X, ChevronDown, Briefcase, Clock, DollarSign } from 'lucide-react';
import JobCard from '../../components/job/JobCard';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Job, JobFilter } from '../../types/job';
import { mockJobs } from '../../data/mockData';

const JobSearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<JobFilter>({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [location, setLocation] = useState('');
  
  // Load initial data
  useEffect(() => {
    // In a real app, this would be an API call
    setJobs(mockJobs);
    
    // Initialize filters from URL params
    const initialFilters: JobFilter = {};
    if (searchParams.get('q')) {
      initialFilters.query = searchParams.get('q') || undefined;
      setSearchQuery(searchParams.get('q') || '');
    }
    if (searchParams.get('location')) {
      initialFilters.location = searchParams.get('location') || undefined;
      setLocation(searchParams.get('location') || '');
    }
    if (searchParams.get('remote') === 'true') {
      initialFilters.remote = true;
    }
    if (searchParams.get('type')) {
      initialFilters.employmentType = searchParams.get('type')?.split(',');
    }
    
    setFilters(initialFilters);
  }, [searchParams]);
  
  // Apply filters
  useEffect(() => {
    let result = [...jobs];
    
    if (filters.query) {
      const query = filters.query.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.company.toLowerCase().includes(query) ||
        job.shortDescription.toLowerCase().includes(query) ||
        job.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }
    
    if (filters.location) {
      const locationQuery = filters.location.toLowerCase();
      result = result.filter(job => 
        job.location.toLowerCase().includes(locationQuery)
      );
    }
    
    if (filters.remote) {
      result = result.filter(job => job.remote);
    }
    
    if (filters.employmentType && filters.employmentType.length > 0) {
      result = result.filter(job => 
        filters.employmentType?.includes(job.employmentType)
      );
    }
    
    if (filters.experience && filters.experience.length > 0) {
      // In a real app, you would parse the experience requirement
      // For simplicity, we'll just do simple filtering
      result = result.filter(job => 
        filters.experience?.some(exp => job.experience.includes(exp))
      );
    }
    
    if (filters.postedWithin) {
      const now = new Date();
      const days = parseInt(filters.postedWithin);
      const cutoff = new Date(now.setDate(now.getDate() - days));
      
      result = result.filter(job => 
        new Date(job.postedAt) >= cutoff
      );
    }
    
    setFilteredJobs(result);
    
    // Update URL with filters
    const params = new URLSearchParams();
    if (filters.query) params.set('q', filters.query);
    if (filters.location) params.set('location', filters.location);
    if (filters.remote) params.set('remote', 'true');
    if (filters.employmentType && filters.employmentType.length > 0) {
      params.set('type', filters.employmentType.join(','));
    }
    
    setSearchParams(params, { replace: true });
  }, [filters, jobs, setSearchParams]);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({ ...filters, query: searchQuery, location });
  };
  
  const handleFilterChange = (filterType: keyof JobFilter, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  
  const handleClearFilters = () => {
    setFilters({});
    setSearchQuery('');
    setLocation('');
  };
  
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
  
  const datePostedOptions = [
    { label: 'Last 24 hours', value: '1' },
    { label: 'Last 3 days', value: '3' },
    { label: 'Last 7 days', value: '7' },
    { label: 'Last 14 days', value: '14' },
    { label: 'Last 30 days', value: '30' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600">Discover opportunities that match your skills and career goals</p>
        </div>
        
        {/* Search Form */}
        <form onSubmit={handleSearchSubmit} className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="City, state, or remote"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <Button 
              type="submit" 
              variant="primary"
              className="py-3 px-6"
            >
              Search Jobs
            </Button>
          </div>
        </form>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters - Desktop */}
          <div className="hidden lg:block space-y-6">
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">Filters</h3>
                <button 
                  className="text-sm text-blue-600 hover:text-blue-800"
                  onClick={handleClearFilters}
                >
                  Clear all
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Job Type</h4>
                  {employmentTypes.map((type) => (
                    <div key={type} className="flex items-center mb-2">
                      <input
                        id={`type-${type}`}
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={filters.employmentType?.includes(type)}
                        onChange={(e) => {
                          const current = filters.employmentType || [];
                          const updated = e.target.checked
                            ? [...current, type]
                            : current.filter(t => t !== type);
                          handleFilterChange('employmentType', updated);
                        }}
                      />
                      <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Remote Only</h4>
                  <div className="flex items-center">
                    <input
                      id="remote"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={!!filters.remote}
                      onChange={(e) => handleFilterChange('remote', e.target.checked)}
                    />
                    <label htmlFor="remote" className="ml-2 text-sm text-gray-700">
                      Remote Jobs
                    </label>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Experience Level</h4>
                  {experienceLevels.map((level) => (
                    <div key={level} className="flex items-center mb-2">
                      <input
                        id={`exp-${level}`}
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={filters.experience?.includes(level)}
                        onChange={(e) => {
                          const current = filters.experience || [];
                          const updated = e.target.checked
                            ? [...current, level]
                            : current.filter(l => l !== level);
                          handleFilterChange('experience', updated);
                        }}
                      />
                      <label htmlFor={`exp-${level}`} className="ml-2 text-sm text-gray-700">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Date Posted</h4>
                  {datePostedOptions.map((option) => (
                    <div key={option.value} className="flex items-center mb-2">
                      <input
                        id={`date-${option.value}`}
                        type="radio"
                        name="datePosted"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        checked={filters.postedWithin === option.value}
                        onChange={() => handleFilterChange('postedWithin', option.value)}
                      />
                      <label htmlFor={`date-${option.value}`} className="ml-2 text-sm text-gray-700">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          
          {/* Job Listings */}
          <div className="lg:col-span-3">
            {/* Mobile Filters Button */}
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                className="w-full"
                leftIcon={<Filter size={16} />}
                rightIcon={<ChevronDown size={16} />}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                Filters ({Object.keys(filters).filter(k => !!filters[k as keyof JobFilter]).length})
              </Button>
              
              {isFilterOpen && (
                <Card className="mt-2 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-900">Filters</h3>
                    <button 
                      className="text-sm text-blue-600 hover:text-blue-800"
                      onClick={handleClearFilters}
                    >
                      Clear all
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Job Type</h4>
                      <div className="flex flex-wrap gap-2">
                        {employmentTypes.map((type) => (
                          <div key={type} className="flex items-center">
                            <input
                              id={`m-type-${type}`}
                              type="checkbox"
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              checked={filters.employmentType?.includes(type)}
                              onChange={(e) => {
                                const current = filters.employmentType || [];
                                const updated = e.target.checked
                                  ? [...current, type]
                                  : current.filter(t => t !== type);
                                handleFilterChange('employmentType', updated);
                              }}
                            />
                            <label htmlFor={`m-type-${type}`} className="ml-2 text-sm text-gray-700">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Remote Only</h4>
                      <div className="flex items-center">
                        <input
                          id="m-remote"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          checked={!!filters.remote}
                          onChange={(e) => handleFilterChange('remote', e.target.checked)}
                        />
                        <label htmlFor="m-remote" className="ml-2 text-sm text-gray-700">
                          Remote Jobs
                        </label>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-2"
                      onClick={() => setIsFilterOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </Card>
              )}
            </div>
            
            {/* Active Filters */}
            {Object.keys(filters).some(k => !!filters[k as keyof JobFilter]) && (
              <div className="mb-4 flex flex-wrap gap-2">
                {filters.query && (
                  <div className="inline-flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm">
                    <span>Keyword: {filters.query}</span>
                    <button 
                      className="ml-1" 
                      onClick={() => handleFilterChange('query', undefined)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {filters.location && (
                  <div className="inline-flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm">
                    <span>Location: {filters.location}</span>
                    <button 
                      className="ml-1" 
                      onClick={() => handleFilterChange('location', undefined)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {filters.remote && (
                  <div className="inline-flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm">
                    <span>Remote Only</span>
                    <button 
                      className="ml-1" 
                      onClick={() => handleFilterChange('remote', undefined)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {filters.employmentType && filters.employmentType.map(type => (
                  <div key={type} className="inline-flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm">
                    <span>{type}</span>
                    <button 
                      className="ml-1" 
                      onClick={() => {
                        const updated = filters.employmentType?.filter(t => t !== type);
                        handleFilterChange('employmentType', updated.length ? updated : undefined);
                      }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {/* Results count */}
            <div className="mb-4">
              <p className="text-gray-600">
                {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            {/* Job listings */}
            {filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} featured={job.featured} />
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No matching jobs found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <Button variant="outline" onClick={handleClearFilters}>Clear all filters</Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchPage;