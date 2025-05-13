import React, { createContext, useState, useContext, useEffect } from 'react';

type UserRole = 'employer' | 'applicant' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  userRole: UserRole;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserRole>(null);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      setIsAuthenticated(true);
      setUserRole(user.role);
    }
  }, []);

  // Mock login function - in a real app this would call an API
  const login = async (email: string, password: string, role: UserRole) => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock user data - in real app, this would come from backend
    const mockUser: User = {
      id: `user-${Date.now()}`,
      name: email.split('@')[0],
      email,
      role,
      avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`
    };
    
    setCurrentUser(mockUser);
    setIsAuthenticated(true);
    setUserRole(role);
    
    // Store user in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  // Mock register function - in a real app this would call an API
  const register = async (name: string, email: string, password: string, role: UserRole) => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role,
      avatar: `https://ui-avatars.com/api/?name=${name}&background=random`
    };
    
    setCurrentUser(mockUser);
    setIsAuthenticated(true);
    setUserRole(role);
    
    // Store user in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('user');
  };

  const value = {
    currentUser,
    isAuthenticated,
    userRole,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};