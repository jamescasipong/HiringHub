import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LayoutDashboard, Briefcase as BriefcaseBusiness, ListChecks, Users, FileText, User, Building2, MessageSquare, LogOut, Search } from 'lucide-react';

interface SidebarProps {
  userType: 'employer' | 'applicant';
}

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  const { logout, currentUser } = useAuth();
  
  const employerLinks = [
    { to: '/employer', icon: <LayoutDashboard size={20} />, label: 'Dashboard', exact: true },
    { to: '/employer/post-job', icon: <FileText size={20} />, label: 'Post a Job' },
    { to: '/employer/manage-jobs', icon: <ListChecks size={20} />, label: 'Manage Jobs' },
    { to: '/employer/applications', icon: <Users size={20} />, label: 'Applications' },
    { to: '/employer/profile', icon: <Building2 size={20} />, label: 'Company Profile' },
  ];
  
  const applicantLinks = [
    { to: '/applicant', icon: <LayoutDashboard size={20} />, label: 'Dashboard', exact: true },
    { to: '/jobs', icon: <Search size={20} />, label: 'Find Jobs' },
    { to: '/applicant/applications', icon: <BriefcaseBusiness size={20} />, label: 'My Applications' },
    { to: '/applicant/profile', icon: <User size={20} />, label: 'My Profile' },
  ];
  
  const links = userType === 'employer' ? employerLinks : applicantLinks;

  return (
    <aside className="bg-gray-900 text-white w-64 hidden md:block flex-shrink-0">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <BriefcaseBusiness size={24} className="text-blue-400" />
            <span className="text-xl font-bold">HireHub</span>
          </div>
        </div>
        
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
              {currentUser?.avatar ? (
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white">
                  {currentUser?.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div>
              <div className="font-medium">{currentUser?.name}</div>
              <div className="text-xs text-gray-400 capitalize">{userType}</div>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.exact}
                  className={({ isActive }) => 
                    `flex items-center space-x-3 px-4 py-3 transition-colors ${
                      isActive ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-800'
                    }`
                  }
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={logout}
            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors w-full px-4 py-2"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;