export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  remote: boolean;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  experience: string;
  salary?: string;
  description: string;
  shortDescription: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  skills: string[];
  postedAt: string;
  deadline?: string;
  featured: boolean;
  urgent: boolean;
  companyId: string;
  contactEmail: string;
  applications?: number;
  views?: number;
}

export interface JobFilter {
  query?: string;
  location?: string;
  employmentType?: string[];
  remote?: boolean;
  experience?: string[];
  salary?: string;
  postedWithin?: string;
  skills?: string[];
}

export interface JobApplication {
  id: string;
  jobId: string;
  applicantId: string;
  applicantName: string;
  applicantEmail: string;
  resume: string;
  coverLetter?: string;
  appliedAt: string;
  status: 'pending' | 'reviewed' | 'interviewing' | 'rejected' | 'hired';
  notes?: string;
}