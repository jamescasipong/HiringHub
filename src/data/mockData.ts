import { Job } from '../types/job';
import { ApplicantProfile, EmployerProfile } from '../types/user';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    companyLogo: 'https://ui-avatars.com/api/?name=TC&background=0D8ABC&color=fff',
    location: 'San Francisco, CA',
    remote: true,
    employmentType: 'Full-time',
    experience: 'Senior Level',
    salary: '$120,000 - $150,000',
    description: `<p>We are looking for a Senior Frontend Developer to join our team and help build amazing user experiences.</p>
    <p>As a Senior Frontend Developer, you will be responsible for implementing visual elements that users see and interact with in a web application. You'll work closely with our design and backend teams to build responsive and performant web applications.</p>`,
    shortDescription: 'Join our team to build amazing user experiences with React, TypeScript, and modern web technologies.',
    requirements: [
      'Minimum 5 years of experience with modern JavaScript frameworks (React, Vue, Angular)',
      'Strong knowledge of TypeScript, HTML5, and CSS3/SASS',
      'Experience with responsive design and cross-browser compatibility',
      'Understanding of server-side rendering and state management techniques',
      'Good understanding of SEO principles and performance optimization'
    ],
    responsibilities: [
      'Develop new user-facing features using React.js and related technologies',
      'Build reusable components and libraries for future use',
      'Collaborate with the design team to implement pixel-perfect UIs',
      'Optimize applications for maximum speed and scalability',
      'Participate in code reviews and help maintain code quality'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Unlimited PTO',
      'Remote-friendly policy',
      '401(k) matching'
    ],
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Redux', 'Webpack', 'Jest'],
    postedAt: '2024-03-15T12:00:00Z',
    deadline: '2024-04-15T12:00:00Z',
    featured: true,
    urgent: false,
    companyId: '101',
    contactEmail: 'jobs@techcorp.com',
    applications: 24,
    views: 310
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignHub',
    companyLogo: 'https://ui-avatars.com/api/?name=DH&background=5F3DC4&color=fff',
    location: 'New York, NY',
    remote: true,
    employmentType: 'Full-time',
    experience: 'Mid Level',
    salary: '$90,000 - $110,000',
    description: `<p>DesignHub is looking for a talented UX/UI Designer to create amazing user experiences.</p>
    <p>You'll work with our product team to design interfaces that are intuitive, accessible, and delightful to use. Your designs will help shape the future of our products.</p>`,
    shortDescription: 'Create intuitive and beautiful user interfaces for our growing suite of products.',
    requirements: [
      'At least 3 years of experience in UX/UI design',
      'Proficiency with design tools such as Figma, Sketch, or Adobe XD',
      'Portfolio demonstrating your design process and skills',
      'Understanding of user research and testing methodologies',
      'Experience in designing responsive websites and mobile applications'
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity mockups',
      'Conduct user research and testing to inform design decisions',
      'Collaborate with developers to ensure proper implementation of designs',
      'Maintain and evolve our design system',
      'Stay up to date with UX/UI trends and best practices'
    ],
    benefits: [
      'Flexible work schedule',
      'Health and wellness benefits',
      'Professional development budget',
      'Modern equipment and software allowance',
      'Fun, collaborative work environment'
    ],
    skills: ['UI Design', 'UX Design', 'Figma', 'Sketch', 'Prototyping', 'User Research', 'Design Systems'],
    postedAt: '2024-03-20T14:30:00Z',
    deadline: '2024-04-20T14:30:00Z',
    featured: false,
    urgent: true,
    companyId: '102',
    contactEmail: 'careers@designhub.com',
    applications: 18,
    views: 245
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    companyLogo: 'https://ui-avatars.com/api/?name=WS&background=2563EB&color=fff',
    location: 'Austin, TX',
    remote: false,
    employmentType: 'Full-time',
    experience: 'Mid Level',
    salary: '$100,000 - $130,000',
    description: `<p>WebSolutions is seeking a Full Stack Developer to join our growing engineering team.</p>
    <p>As a Full Stack Developer, you'll work on all aspects of our web applications, from the database to the user interface. You'll help build new features and improve existing ones.</p>`,
    shortDescription: 'Build scalable web applications from database to frontend as part of our engineering team.',
    requirements: [
      '3+ years of experience in full stack web development',
      'Proficiency with JavaScript/TypeScript and at least one backend language (Node.js, Python, Ruby, etc.)',
      'Experience with modern front-end frameworks (React, Angular, Vue)',
      'Familiarity with databases and ORM technologies',
      'Understanding of cloud services (AWS, GCP, or Azure)'
    ],
    responsibilities: [
      'Develop new features and maintain existing ones across the full stack',
      'Write clean, maintainable, and well-tested code',
      'Collaborate with product managers and designers to refine requirements',
      'Troubleshoot and debug issues across the stack',
      'Participate in code reviews and architectural discussions'
    ],
    benefits: [
      'Competitive compensation package',
      'Comprehensive health benefits',
      'Flexible work environment',
      'Continuous learning opportunities',
      'Regular team events and activities'
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Git', 'REST APIs'],
    postedAt: '2024-03-18T10:15:00Z',
    deadline: '2024-04-18T10:15:00Z',
    featured: true,
    urgent: false,
    companyId: '103',
    contactEmail: 'jobs@websolutions.com',
    applications: 32,
    views: 280
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'CloudTech',
    companyLogo: 'https://ui-avatars.com/api/?name=CT&background=047857&color=fff',
    location: 'Remote',
    remote: true,
    employmentType: 'Full-time',
    experience: 'Senior Level',
    salary: '$130,000 - $160,000',
    description: `<p>CloudTech is looking for a DevOps Engineer to help us build and maintain our cloud infrastructure.</p>
    <p>You'll be responsible for designing, implementing, and managing our cloud-based systems, ensuring high availability, scalability, and security.</p>`,
    shortDescription: 'Design and implement robust cloud infrastructure and CI/CD pipelines for our growing platform.',
    requirements: [
      '5+ years of experience in DevOps or SRE roles',
      'Strong knowledge of cloud platforms (AWS, GCP, or Azure)',
      'Experience with containerization technologies (Docker, Kubernetes)',
      'Familiarity with Infrastructure as Code (Terraform, CloudFormation)',
      'Understanding of CI/CD pipelines and automation tools'
    ],
    responsibilities: [
      'Design and implement cloud infrastructure using best practices',
      'Set up and maintain CI/CD pipelines for automated testing and deployment',
      'Monitor system performance and ensure high availability',
      'Implement security best practices and respond to security incidents',
      'Collaborate with development teams to improve system reliability and performance'
    ],
    benefits: [
      'Remote-first company culture',
      'Competitive salary and benefits',
      'Home office stipend',
      'Professional development budget',
      'Flexible working hours'
    ],
    skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Linux', 'Python', 'Monitoring'],
    postedAt: '2024-03-22T09:45:00Z',
    deadline: '2024-04-22T09:45:00Z',
    featured: false,
    urgent: false,
    companyId: '104',
    contactEmail: 'careers@cloudtech.io',
    applications: 15,
    views: 190
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'InnovateCo',
    companyLogo: 'https://ui-avatars.com/api/?name=IC&background=CA8A04&color=fff',
    location: 'Chicago, IL',
    remote: true,
    employmentType: 'Full-time',
    experience: 'Senior Level',
    salary: '$125,000 - $155,000',
    description: `<p>InnovateCo is seeking an experienced Product Manager to lead our product development efforts.</p>
    <p>As a Product Manager, you'll work closely with engineering, design, and business teams to define product strategy and deliver exceptional products that meet user needs.</p>`,
    shortDescription: 'Drive product strategy and execution to deliver exceptional user experiences for our customers.',
    requirements: [
      '5+ years of experience in product management',
      'Track record of shipping successful products',
      'Strong analytical and problem-solving skills',
      'Excellent communication and stakeholder management abilities',
      'Technical background or ability to understand technical concepts'
    ],
    responsibilities: [
      'Define product vision, strategy, and roadmap',
      'Gather and prioritize product requirements based on user needs and business goals',
      'Work closely with engineering and design teams throughout the product development lifecycle',
      'Monitor market trends and competitive landscape',
      'Analyze product metrics and use data to drive decisions'
    ],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health coverage',
      'Unlimited vacation policy',
      'Remote work options',
      '401(k) with generous matching'
    ],
    skills: ['Product Strategy', 'User Research', 'Agile Methodologies', 'Data Analysis', 'Roadmapping', 'Wireframing', 'A/B Testing'],
    postedAt: '2024-03-21T13:20:00Z',
    deadline: '2024-04-21T13:20:00Z',
    featured: true,
    urgent: true,
    companyId: '105',
    contactEmail: 'jobs@innovateco.com',
    applications: 28,
    views: 320
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'DataMinds',
    companyLogo: 'https://ui-avatars.com/api/?name=DM&background=BE185D&color=fff',
    location: 'Boston, MA',
    remote: false,
    employmentType: 'Full-time',
    experience: 'Mid Level',
    salary: '$110,000 - $140,000',
    description: `<p>DataMinds is looking for a Data Scientist to help us extract insights from our data.</p>
    <p>You'll work with large datasets to build models and algorithms that solve business problems and improve our product offerings.</p>`,
    shortDescription: 'Use machine learning and statistical analysis to drive data-based decision making for our organization.',
    requirements: [
      '3+ years of experience in data science or related field',
      'Strong background in statistics, mathematics, or computer science',
      'Proficiency with Python and data science libraries (Pandas, NumPy, scikit-learn)',
      'Experience with machine learning techniques and modeling',
      'Ability to communicate complex findings to non-technical stakeholders'
    ],
    responsibilities: [
      'Analyze large datasets to identify patterns and trends',
      'Develop and implement machine learning models',
      'Create data visualizations and reports',
      'Collaborate with engineering and product teams to integrate insights',
      'Stay up to date with advances in data science and machine learning'
    ],
    benefits: [
      'Competitive compensation',
      'Health and wellness programs',
      'Continuous learning opportunities',
      'Modern office environment',
      'Regular team social events'
    ],
    skills: ['Python', 'Machine Learning', 'SQL', 'Data Analysis', 'Statistics', 'Data Visualization', 'Deep Learning'],
    postedAt: '2024-03-19T11:30:00Z',
    deadline: '2024-04-19T11:30:00Z',
    featured: false,
    urgent: false,
    companyId: '106',
    contactEmail: 'careers@dataminds.ai',
    applications: 20,
    views: 230
  }
];

export const mockEmployerProfiles: EmployerProfile[] = [
  {
    id: '101',
    email: 'hr@techcorp.com',
    name: 'John Anderson',
    role: 'employer',
    avatar: 'https://ui-avatars.com/api/?name=JA&background=0D8ABC&color=fff',
    companyName: 'TechCorp',
    industry: 'Software Development',
    companySize: '50-200 employees',
    founded: '2015',
    website: 'https://techcorp.com',
    location: 'San Francisco, CA',
    description: 'TechCorp is a leading software development company focused on creating innovative solutions for businesses of all sizes.',
    mission: 'To build software that makes businesses more efficient and productive.',
    logo: 'https://ui-avatars.com/api/?name=TC&background=0D8ABC&color=fff',
    socialLinks: {
      linkedin: 'https://linkedin.com/company/techcorp',
      twitter: 'https://twitter.com/techcorp',
      facebook: 'https://facebook.com/techcorp'
    },
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Unlimited PTO',
      'Remote-friendly policy',
      '401(k) matching'
    ],
    culture: [
      'Innovation-driven',
      'Collaborative environment',
      'Work-life balance',
      'Continuous learning'
    ],
    createdAt: '2023-01-15T12:00:00Z'
  },
  {
    id: '102',
    email: 'careers@designhub.com',
    name: 'Sarah Miller',
    role: 'employer',
    avatar: 'https://ui-avatars.com/api/?name=SM&background=5F3DC4&color=fff',
    companyName: 'DesignHub',
    industry: 'Design & Creative',
    companySize: '10-50 employees',
    founded: '2018',
    website: 'https://designhub.com',
    location: 'New York, NY',
    description: 'DesignHub is a creative agency specializing in UX/UI design for digital products and brands.',
    mission: 'To craft intuitive and delightful digital experiences that solve real problems.',
    logo: 'https://ui-avatars.com/api/?name=DH&background=5F3DC4&color=fff',
    socialLinks: {
      linkedin: 'https://linkedin.com/company/designhub',
      instagram: 'https://instagram.com/designhub'
    },
    benefits: [
      'Flexible work schedule',
      'Health and wellness benefits',
      'Professional development budget',
      'Modern equipment and software allowance',
      'Fun, collaborative work environment'
    ],
    culture: [
      'Creative excellence',
      'User-centered',
      'Diverse and inclusive',
      'Design thinking'
    ],
    createdAt: '2023-03-10T14:30:00Z'
  }
];

export const mockApplicantProfiles: ApplicantProfile[] = [
  {
    id: '201',
    email: 'david.johnson@example.com',
    name: 'David Johnson',
    role: 'applicant',
    avatar: 'https://ui-avatars.com/api/?name=DJ&background=2563EB&color=fff',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Frontend Developer',
    summary: 'Experienced frontend developer with 7+ years building responsive web applications using React, TypeScript, and modern JavaScript frameworks.',
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Redux', 'Webpack', 'Jest'],
    experience: [
      {
        id: 'exp1',
        title: 'Senior Frontend Developer',
        company: 'TechStart Inc.',
        location: 'San Francisco, CA',
        startDate: '2020-03-01',
        current: true,
        description: 'Leading frontend development for a SaaS platform with over 20,000 users. Implemented performance optimizations that improved page load time by 40%.',
        skills: ['React', 'TypeScript', 'GraphQL']
      },
      {
        id: 'exp2',
        title: 'Frontend Developer',
        company: 'WebApp Co',
        location: 'San Jose, CA',
        startDate: '2017-06-01',
        endDate: '2020-02-28',
        current: false,
        description: 'Developed responsive web interfaces for e-commerce applications. Collaborated with UX designers to implement pixel-perfect designs.',
        skills: ['React', 'JavaScript', 'CSS']
      }
    ],
    education: [
      {
        id: 'edu1',
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        startDate: '2013-09-01',
        endDate: '2017-05-30',
        current: false
      }
    ],
    certifications: [
      {
        id: 'cert1',
        name: 'AWS Certified Developer - Associate',
        issuingOrganization: 'Amazon Web Services',
        issueDate: '2022-01-15',
        expirationDate: '2025-01-15',
        credentialId: 'AWS-12345'
      }
    ],
    languages: [
      { name: 'English', proficiency: 'Native' },
      { name: 'Spanish', proficiency: 'Conversational' }
    ],
    portfolioUrl: 'https://davidjohnson.dev',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/davidjohnson',
      github: 'https://github.com/davidjohnson'
    },
    availability: 'Immediately',
    preferredJobTypes: ['Full-time', 'Contract'],
    preferredLocations: ['San Francisco, CA', 'Remote'],
    salaryExpectation: '$120,000 - $150,000',
    willingToRelocate: true,
    createdAt: '2023-02-15T10:30:00Z'
  },
  {
    id: '202',
    email: 'jennifer.smith@example.com',
    name: 'Jennifer Smith',
    role: 'applicant',
    avatar: 'https://ui-avatars.com/api/?name=JS&background=047857&color=fff',
    phone: '+1 (555) 987-6543',
    location: 'New York, NY',
    title: 'UX/UI Designer',
    summary: 'Creative designer with 5 years of experience creating intuitive user experiences and visually stunning interfaces for web and mobile applications.',
    skills: ['UI Design', 'UX Design', 'Figma', 'Sketch', 'Prototyping', 'User Research', 'Design Systems'],
    experience: [
      {
        id: 'exp1',
        title: 'Senior UX/UI Designer',
        company: 'CreativeWorks Agency',
        location: 'New York, NY',
        startDate: '2021-04-01',
        current: true,
        description: 'Lead designer for multiple client projects, including fintech and healthcare applications. Created and maintained a comprehensive design system.',
        skills: ['UI Design', 'UX Design', 'Figma', 'Design Systems']
      },
      {
        id: 'exp2',
        title: 'UX/UI Designer',
        company: 'Digital Products Inc.',
        location: 'Boston, MA',
        startDate: '2018-07-01',
        endDate: '2021-03-31',
        current: false,
        description: 'Designed intuitive interfaces for web and mobile applications. Conducted user research and usability testing to improve product designs.',
        skills: ['UI Design', 'UX Research', 'Sketch', 'Prototyping']
      }
    ],
    education: [
      {
        id: 'edu1',
        institution: 'Rhode Island School of Design',
        degree: 'Bachelor of Fine Arts',
        fieldOfStudy: 'Graphic Design',
        startDate: '2014-09-01',
        endDate: '2018-05-30',
        current: false
      }
    ],
    certifications: [
      {
        id: 'cert1',
        name: 'Certified User Experience Professional',
        issuingOrganization: 'Nielsen Norman Group',
        issueDate: '2020-06-10',
        credentialId: 'NNG-34567'
      }
    ],
    languages: [
      { name: 'English', proficiency: 'Native' },
      { name: 'French', proficiency: 'Proficient' }
    ],
    portfolioUrl: 'https://jennifersmith.design',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jennifersmith',
      portfolio: 'https://dribbble.com/jennifersmith'
    },
    availability: '2 weeks notice',
    preferredJobTypes: ['Full-time'],
    preferredLocations: ['New York, NY', 'Remote'],
    salaryExpectation: '$90,000 - $120,000',
    willingToRelocate: false,
    createdAt: '2023-01-20T15:45:00Z'
  }
];