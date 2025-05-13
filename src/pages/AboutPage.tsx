import React from 'react';
import { Building2, Users, Trophy } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About JobConnect</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting talented professionals with innovative companies to create meaningful career opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">For Employers</h3>
            <p className="text-gray-600">
              Access a diverse pool of qualified candidates and streamline your hiring process with our advanced matching system.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">For Job Seekers</h3>
            <p className="text-gray-600">
              Discover opportunities that match your skills and aspirations, and take the next step in your career journey.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize the job search experience by creating meaningful connections between employers and candidates.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>
              Founded with a vision to transform the job search landscape, JobConnect has grown into a trusted platform 
              that brings together employers and job seekers in a meaningful way.
            </p>
            <p>
              We understand that finding the right job or the perfect candidate is more than just matching keywords. 
              It's about creating connections that lead to fulfilling careers and successful businesses.
            </p>
            <p>
              Our platform leverages cutting-edge technology while maintaining a human-centered approach, ensuring 
              that both employers and job seekers find value in every interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;