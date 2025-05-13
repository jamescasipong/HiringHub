import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

// Layout components
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import EmployerDashboard from './pages/employer/Dashboard';
import PostJob from './pages/employer/PostJob';
import ManageJobs from './pages/employer/ManageJobs';
// import ApplicationsPage from './pages/employer/ApplicationsPage';
import ApplicantDashboard from './pages/applicant/Dashboard';
import JobSearchPage from './pages/jobs/JobSearchPage';
import JobDetailsPage from './pages/jobs/JobDetailsPage';
// import ProfilePage from './pages/applicant/ProfilePage';
// import CompanyProfilePage from './pages/employer/CompanyProfilePage';
// import ApplicationsManagementPage from './pages/applicant/ApplicationsManagementPage';
// import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-center" />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="jobs" element={<JobSearchPage />} />
            <Route path="jobs/:id" element={<JobDetailsPage />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>

          {/* Employer routes */}
          <Route
            path="/employer"
            element={<DashboardLayout userType="employer" />}
          >
            <Route index element={<EmployerDashboard />} />
            <Route path="post-job" element={<PostJob />} />
            <Route path="manage-jobs" element={<ManageJobs />} />
            {/* <Route path="applications" element={<ApplicationsPage />} />
            <Route path="profile" element={<CompanyProfilePage />} /> */}
          </Route>

          {/* Applicant routes */}
          <Route
            path="/applicant"
            element={<DashboardLayout userType="applicant" />}
          >
            <Route index element={<ApplicantDashboard />} />
            {/* <Route path="profile" element={<ProfilePage />} />
            <Route
              path="applications"
              element={<ApplicationsManagementPage />}
            /> */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
