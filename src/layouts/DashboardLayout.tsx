import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/navigation/Sidebar';
import DashboardHeader from '../components/navigation/DashboardHeader';
import { motion } from 'framer-motion';

interface DashboardLayoutProps {
  userType: 'employer' | 'applicant';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType }) => {
  const { isAuthenticated, userRole } = useAuth();

  // Redirect if not authenticated or wrong role
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== userType) {
    return <Navigate to={`/${userRole}`} replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar userType={userType} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        <motion.main 
          className="flex-1 overflow-y-auto p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardLayout;