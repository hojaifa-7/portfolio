import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  BookOpen, 
  Briefcase, 
  User, 
  Moon, 
  Sun,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Map, 
  Globe,
  Database,
  GraduationCap,
  FileText,
  ScrollText,
  ImageIcon,
  Maximize2
} from 'lucide-react';

/**
 * CUSTOMIZE YOUR DATA HERE
 * Update these constants to reflect your own profile.
 */
const PERSONAL_INFO = {
  name: "Hojaifa Hossain Khan",
  title: "Geospatial Analyst & Urban Planner",
  shortBio: "Experienced in geospatial database creation, management, and analysis. Skilled in designing informative and interactive maps to enhance data visualization and support decision-making.",
  email: "hojaifahossain.7@gmail.com",
  location: "Denton, TX",
  socials: {
    github: "https://github.com/", 
    linkedin: "https://linkedin.com/in/hojaifahossain",
  },
  skills: [
    "ArcGIS", "QGIS", "PostgreSQL", "Remote Sensing", 
    "Python (Jupyter)", "R", "AutoCAD", "Civil 3D", "ERDAS",
    "SPSS", "MS Excel"
  ]
};

const EDUCATION = [
  {
    id: 1,
    degree: "M.Sc. in Geography",
    school: "Texas Tech University",
    location: "Lubbock, TX",
    year: "August 2025",
    details: "CGPA: 3.66/4.00",
    awards: ["Gary Elbow Scholarship", "Templar Scholarship"]
  },
  {
    id: 2,
    degree: "Bachelor of Urban & Regional Planning",
    school: "Rajshahi University of Engineering & Technology (RUET)",
    location: "Rajshahi, Bangladesh",
    year: "July 2019",
    details: "CGPA: 3.12/4.00",
    awards: []
  }
];

const EXPERIENCE = [
  {
    id: 1,
    role: "Graduate Teaching Assistant",
    company: "Texas Tech University (Dept. of Geoscience)",
    period: "Sep 2023 - Aug 2025",
    description: "Provided guidance in labs for Intro to GIS and Remote Sensing. Assisted in spatial analysis using ArcGIS, ENVI, and PostgreSQL. Troubleshot software issues and prepared instruction manuals.",
    category: "work"
  },
  {
    id: 2,
    role: "Junior Urban Planner",
    company: "JPZ Consulting Ltd, Bangladesh",
    period: "Mar 2020 - Jul 2023",
    description: "Assisted in feasibility studies for railway lines. Maintained spatial databases ensuring accuracy. Supported Resettlement Action Plan (RAP) preparation through map development.",
    category: "work"
  },
  {
    id: 3,
    role: "Research Assistant",
    company: "Disaster Management Watch, Bangladesh",
    period: "Nov 2019 - Feb 2020",
    description: "Conducted desk reviews and designed data collection tools using GPS and KoboToolbox. Prepared and updated maps regularly to support efficient planning processes.",
    category: "work"
  }
];

const RESEARCH_EXPERIENCE = [
  {
    id: 1,
    role: "Research Assistant",
    institution: "Texas Tech University, Dept. of Geography",
    period: "Sep 2023 - Aug 2025",
    title: "Assessment of Climatic Variability on Cotton Production Using Spatial Analysis",
    advisor: "Dr. Xuantong Wang"
  },
  {
    id: 2,
    role: "Research Assistant",
    institution: "RUET, Dept. of Urban & Regional Planning",
    period: "Jul 2018 - Sep 2019",
    title: "A Study on Flood Prediction of Padma River: Identification of Flood-Prone Area and Vulnerability Assessment",
    advisor: "Anutosh Das"
  }
];

const PUBLICATIONS = [
  "Khan, H. A. & Wang, Xuantong (2025). Assessment of Climatic Variability on Cotton Production Using Cluster based Hierarchical Bayesian Model (Under Review).",
  "Shohan, A. A. A., ... Khan, H. A., et al. (2025). Spatiotemporal Analysis of Urban Expansion and Environmental Impacts in Five Saudi Arabian Cities (Under Review).",
  "Khan, H. A., Das, A., & Al-Kafy, A. (2024). A Study on Identification of Flood-Prone Area and Vulnerability on Padma River, Rajshahi (Under Review).",
  "Kafy, A. A., ... Khan, H. A., et al. (2018). Exploring The Association of Surface Water Body Change and Rapid Urbanization in Rajshahi City Corporation Area. NCWRE 2018.",
  "Faisal, A. A., & Khan, H. A. (2017). Application of GIS and Remote Sensing in Disaster Management: A Critical Review of Flood Management. International Conference on Disaster Risk Mitigation."
];

const PROJECTS = [
  {
    title: "Railway Feasibility Spatial Analysis",
    description: "Conducted spatial feasibility studies for four new railway lines. Identified and mapped topographic features, rights-of-way, and utility networks to support infrastructure planning.",
    tags: ["GIS", "AutoCAD", "Feasibility Study"],
    githubLink: null, 
    demoLink: null,
    type: "Professional",
    // IMAGES WITH CAPTIONS
    images: [
      {
        url: "https://placehold.co/1200x800/e2e8f0/1e293b?text=Railway+Route+Map",
        caption: "Proposed 45km railway alignment connecting industrial zones."
      },
      {
        url: "https://placehold.co/1200x800/e2e8f0/1e293b?text=Topography+Analysis",
        caption: "Digital Elevation Model (DEM) analysis for slope suitability."
      },
      {
        url: "https://placehold.co/1200x800/e2e8f0/1e293b?text=Utility+Network+Grid",
        caption: "Conflict mapping of existing gas and water utility lines."
      }
    ]
  },
  {
    title: "Resettlement Action Plan (RAP) Mapping",
    description: "Developed spatial databases and thematic maps to support Resettlement Action Plans. ensured data accuracy for analysis and reporting on affected infrastructures.",
    tags: ["Spatial Analysis", "Mapping", "Database"],
    githubLink: null,
    demoLink: null,
    type: "Professional",
    images: [
      {
        url: "https://placehold.co/1200x800/e2e8f0/1e293b?text=Affected+Structures+Map",
        caption: "Heatmap of structures affected by the proposed infrastructure."
      },
      {
        url: "https://placehold.co/1200x800/e2e8f0/1e293b?text=Land+Use+Overlay",
        caption: "Current land use classification overlay."
      }
    ]
  },
  {
    title: "Disaster Management Data Collection",
    description: "Designed data collection tools for field surveys using GPS devices and KoboToolbox. Reviewed and validated geographic data from aerial imagery to support agency-wide planning.",
    tags: ["GPS", "KoboToolbox", "Field Survey"],
    githubLink: null,
    demoLink: null,
    type: "Research",
    images: [
      {
        url: "https://placehold.co/1200x800/e2e8f0/1e293b?text=Field+Survey+Data",
        caption: "GPS data points collected from field surveys."
      },
      {
        url: "https://placehold.co/1200x800/e2e8f0/1e293b?text=KoboToolbox+Interface",
        caption: "Custom KoboToolbox form design for rapid data entry."
      }
    ]
  }
];

/**
 * Image Modal for Full Screen Viewing
 */
const ImageModal = ({ isOpen, onClose, imageData, onNext, onPrev, hasMultiple }) => {
  if (!isOpen || !imageData) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-200" onClick={onClose}>
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
      >
        <X size={32} />
      </button>
      
      <div className="relative flex-1 w-full max-w-7xl flex flex-col items-center justify-center min-h-0" onClick={e => e.stopPropagation()}>
        
        {/* Main Image */}
        <img 
          src={imageData.url} 
          alt={imageData.caption} 
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        
        {/* Navigation Arrows */}
        {hasMultiple && (
          <>
            <button 
              onClick={onPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-r-xl bg-black/50 text-white hover:bg-black/80 transition-all hover:pl-4 -ml-4 md:-ml-12 md:hover:pl-3"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={onNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-l-xl bg-black/50 text-white hover:bg-black/80 transition-all hover:pr-4 -mr-4 md:-mr-12 md:hover:pr-3"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          </>
        )}

        {/* Caption */}
        <div className="mt-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl max-w-3xl text-center shadow-xl">
           <p className="text-base md:text-lg font-medium">{imageData.caption}</p>
        </div>
      </div>
      
      <div className="mt-4 text-white/40 text-sm">
        Press Esc to close
      </div>
    </div>
  );
};

/**
 * Component to handle individual project card logic (slideshows)
 */
const ProjectCard = ({ project, isDarkMode, onExpand }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const currentImage = project.images && project.images[currentImageIndex];

  return (
    <div className={`group rounded-xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col h-full ${isDarkMode ? 'bg-slate-800 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-emerald-200'}`}>
      
      {/* Image Gallery Area - Clickable */}
      <div 
        className="relative w-full h-64 bg-slate-200 overflow-hidden cursor-pointer"
        onClick={() => onExpand(project, currentImageIndex)}
      >
        {currentImage ? (
          <>
            <img 
              src={currentImage.url} 
              alt={currentImage.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient on Hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
               <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-slate-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 shadow-lg mb-8">
                  <Maximize2 size={16} /> View Full Map
               </div>
            </div>

            {/* Caption Preview Overlay (Bottom Bar) */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white px-4 py-2 text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 flex items-center justify-between">
               <span className="truncate mr-2">{currentImage.caption}</span>
            </div>

            {/* Navigation Buttons (only if > 1 image) */}
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={20} />
                </button>
                {/* Dots Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            <ImageIcon size={48} />
          </div>
        )}
        
        {/* Type Badge Overlay */}
        <div className="absolute top-3 left-3 z-20">
          <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide shadow-sm ${isDarkMode ? 'bg-slate-900/90 text-emerald-400' : 'bg-white/90 text-emerald-600'}`}>
            {project.type}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:text-emerald-600 transition-colors line-clamp-2">
            {project.title}
          </h3>
          <div className="flex gap-2 flex-shrink-0 ml-2">
            {project.githubLink && (
              <a href={project.githubLink} className={`hover:text-emerald-600 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} title="View Code">
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
        
        <p className={`mb-6 leading-relaxed text-sm flex-grow ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className={`text-xs font-medium px-2 py-1 rounded ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // BUG FIX: Case insensitive comparison for "All"
  const filteredProjects = activeTab.toLowerCase() === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type.toLowerCase() === activeTab.toLowerCase());

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Modal handlers
  const openImageModal = (project, index) => {
    setSelectedProject(project);
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const nextModalImage = (e) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setSelectedImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevModalImage = (e) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setSelectedImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      <ImageModal 
        isOpen={isModalOpen}
        onClose={closeImageModal}
        imageData={selectedProject?.images?.[selectedImageIndex]}
        onNext={nextModalImage}
        onPrev={prevModalImage}
        hasMultiple={selectedProject?.images?.length > 1}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'} border-b backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl tracking-tighter flex items-center gap-2">
              <Map className="w-6 h-6 text-emerald-600" />
              <span>{PERSONAL_INFO.name.split(' ')[0]}<span className="text-emerald-600">.geo</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {['About', 'Experience', 'Education', 'Research', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`hover:text-emerald-600 px-2 py-2 rounded-md text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                  >
                    {item}
                  </button>
                ))}
                <button 
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
                >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-emerald-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-b ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['About', 'Experience', 'Education', 'Research', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-emerald-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className={`inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full ${isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
            Based in {PERSONAL_INFO.location}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="text-emerald-600">{PERSONAL_INFO.name}</span>
          </h1>
          <h2 className={`text-xl md:text-2xl mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {PERSONAL_INFO.title}
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto md:mx-0 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {PERSONAL_INFO.shortBio}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2"
            >
              View My Work <ChevronDown size={18} />
            </button>
            <a 
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-6 py-3 border rounded-lg font-medium transition-all flex items-center gap-2 ${isDarkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-50'}`}
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a 
              href="#" 
              className={`px-6 py-3 border rounded-lg font-medium transition-all flex items-center gap-2 ${isDarkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-50'}`}
            >
              <ExternalLink size={20} /> Resume
            </a>
          </div>

          <div className="mt-12">
            <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Technical Skills</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {PERSONAL_INFO.skills.map(skill => (
                <span key={skill} className={`px-3 py-1 text-sm rounded-md font-medium ${isDarkMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-white text-slate-600 border border-slate-200 shadow-sm'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Abstract shape/image placeholder */}
        <div className="flex-1 relative hidden md:block">
          <div className={`w-full aspect-square rounded-2xl relative z-10 overflow-hidden border-4 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-white shadow-2xl'}`}>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <User size={64} className={`mx-auto mb-4 ${isDarkMode ? 'text-slate-600' : 'text-slate-300'}`} />
                    <p className={`text-sm ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>Hojaifa Hossain Khan</p>
                </div>
             </div>
             <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-600/20 rounded-full blur-3xl"></div>
             <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-emerald-600 rounded-lg text-white">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </div>

          <div className="relative border-l-2 border-emerald-600/30 ml-3 md:ml-6 space-y-12 pb-4">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-emerald-600 border-emerald-600"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full w-fit mt-1 sm:mt-0 ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-700'}`}>
                    {exp.period}
                  </span>
                </div>
                
                <div className="text-lg font-medium text-emerald-600 mb-2 flex items-center gap-2">
                   <Briefcase size={16} />
                   {exp.company}
                </div>
                
                <p className={`leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section (New) */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-600 rounded-lg text-white">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <div className="grid gap-6">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className={`p-6 rounded-xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="text-blue-600 font-medium">{edu.school}</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{edu.location}</div>
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full w-fit whitespace-nowrap ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-blue-50 text-blue-700'}`}>
                  {edu.year}
                </span>
              </div>
              
              <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}>
                <p className={`font-medium mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{edu.details}</p>
                {edu.awards.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.awards.map((award, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded border ${isDarkMode ? 'border-slate-600 text-slate-400' : 'border-slate-200 text-slate-600 bg-slate-50'}`}>
                        {award}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Section (New) */}
      <section id="research" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/30' : 'bg-slate-50/50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-purple-600 rounded-lg text-white">
              <ScrollText size={24} />
            </div>
            <h2 className="text-3xl font-bold">Research & Publications</h2>
          </div>

          <div className="space-y-12">
            {/* Academic Research */}
            <div>
              <h3 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                <Database className="w-5 h-5" /> Academic Research
              </h3>
              <div className="grid gap-6">
                {RESEARCH_EXPERIENCE.map((res) => (
                  <div key={res.id} className={`p-6 rounded-xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{res.role}</h4>
                      <span className="text-sm text-slate-500">{res.period}</span>
                    </div>
                    <div className="text-purple-600 font-medium mb-3">{res.institution}</div>
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
                      <p className="font-medium italic mb-2">"{res.title}"</p>
                      <p className="text-sm text-slate-500">Advisor: {res.advisor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div>
              <h3 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                <FileText className="w-5 h-5" /> Publications & Conference Papers
              </h3>
              <div className={`rounded-xl border divide-y ${isDarkMode ? 'bg-slate-800 border-slate-700 divide-slate-700' : 'bg-white border-slate-200 divide-slate-100'}`}>
                {PUBLICATIONS.map((pub, idx) => (
                  <div key={idx} className="p-4 hover:bg-slate-50/5 dark:hover:bg-slate-700/50 transition-colors">
                    <div className="flex gap-3">
                      <span className="text-slate-400 font-mono text-sm">{idx + 1}.</span>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {pub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-600 rounded-lg text-white">
                <Globe size={24} />
              </div>
              <h2 className="text-3xl font-bold">Key Projects & Initiatives</h2>
            </div>
            <p className={`max-w-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Highlights from my academic research and professional urban planning work.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className={`flex p-1 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
            {['All', 'Professional', 'Academic', 'Research'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab.toLowerCase() === tab.toLowerCase()
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                } ${isDarkMode && activeTab.toLowerCase() === tab.toLowerCase() ? '!bg-slate-700 !text-emerald-400' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              isDarkMode={isDarkMode} 
              onExpand={openImageModal}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 text-center ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm currently based in Denton, TX and open to opportunities. Feel free to reach out!
          </p>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40"
          >
            <Mail size={20} />
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-500'}`}>
        <p className="flex items-center justify-center gap-1">
          &copy; {new Date().getFullYear()} Hojaifa Hossain Khan
        </p>
      </footer>
    </div>
  );
};

export default App;