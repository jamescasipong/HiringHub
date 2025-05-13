export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'employer' | 'applicant';
  avatar?: string;
  createdAt: string;
}

export interface ApplicantProfile extends UserProfile {
  phone?: string;
  location?: string;
  title?: string;
  summary?: string;
  skills: string[];
  experience: WorkExperience[];
  education: Education[];
  certifications?: Certification[];
  languages?: Language[];
  resumeUrl?: string;
  portfolioUrl?: string;
  socialLinks?: SocialLinks;
  availability?: string;
  preferredJobTypes?: string[];
  preferredLocations?: string[];
  salaryExpectation?: string;
  willingToRelocate?: boolean;
}

export interface EmployerProfile extends UserProfile {
  companyName: string;
  industry: string;
  companySize?: string;
  founded?: string;
  website?: string;
  location: string;
  description?: string;
  mission?: string;
  logo?: string;
  coverImage?: string;
  socialLinks?: SocialLinks;
  benefits?: string[];
  culture?: string[];
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  skills?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Language {
  name: string;
  proficiency: 'Basic' | 'Conversational' | 'Proficient' | 'Fluent' | 'Native';
}

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  portfolio?: string;
  facebook?: string;
  instagram?: string;
}