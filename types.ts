export interface Project {
  title: string;
  category: string;
  tech: string[];
  description: string;
  github?: string;
  demo?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
}