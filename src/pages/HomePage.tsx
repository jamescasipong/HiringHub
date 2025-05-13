import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Briefcase as BriefcaseBusiness, Users, Building2, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/jobs?q=${encodeURIComponent(searchQuery)}`);
  };

  const features = [
    {
      icon: <BriefcaseBusiness size={24} className="text-blue-500" />,
      title: 'Thousands of Jobs',
      description: 'Access thousands of job listings from top companies across various industries.'
    },
    {
      icon: <Users size={24} className="text-blue-500" />,
      title: 'Verified Employers',
      description: 'All employers on our platform are verified to ensure legitimate job opportunities.'
    },
    {
      icon: <Building2 size={24} className="text-blue-500" />,
      title: 'Company Insights',
      description: 'Get detailed information about potential employers before applying.'
    },
    {
      icon: <TrendingUp size={24} className="text-blue-500" />,
      title: 'Career Growth',
      description: 'Find opportunities that align with your career goals and aspirations.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Find Your Dream Job or Perfect Candidate
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              HireHub connects top talent with the best employers. Whether you're looking for your next career move or searching for the perfect addition to your team.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row">
                  <div className="relative flex-grow mb-3 md:mb-0 md:mr-2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Job title, keyword, or company"
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 focus:ring-orange-400"
                  >
                    Search Jobs
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center space-x-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              variant="outline" 
              className="bg-white bg-opacity-10 text-white border-white border-opacity-20 hover:bg-opacity-20"
              onClick={() => navigate('/register')}
            >
              For Job Seekers
            </Button>
            <Button 
              variant="outline" 
              className="bg-white bg-opacity-10 text-white border-white border-opacity-20 hover:bg-opacity-20"
              onClick={() => navigate('/register')}
            >
              For Employers
            </Button>
          </motion.div>
        </div>
        
        {/* Wave Divider */}
        <svg className="w-full h-16 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HireHub?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-700 mb-2">5,000+</div>
              <div className="text-xl text-gray-700">Active Job Listings</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-700 mb-2">10,000+</div>
              <div className="text-xl text-gray-700">Registered Companies</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-700 mb-2">25,000+</div>
              <div className="text-xl text-gray-700">Successful Placements</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of job seekers and employers who trust HireHub for their hiring needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-gray-100"
              onClick={() => navigate('/register')}
            >
              Create an Account
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-blue-800"
              onClick={() => navigate('/jobs')}
            >
              Browse Jobs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;