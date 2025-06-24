import { ChevronDown, Code, Palette, Zap, Github, Linkedin, Mail } from 'lucide-react';
import MainLayout from '../layout/MainLayout';

const HomePage = () => {
  const techStack = [
    { name: 'HTML', image: '/Tech-Stack/HTML5.png' },
    { name: 'CSS', image: '/Tech-Stack/CSS3.png' },
    { name: 'JavaScript', image: '/Tech-Stack/Javascript.png' },
    { name: 'Typescript', image: '/Tech-Stack/TypeScript.png' },
    { name: 'React', image: '/Tech-Stack/React.png' },
    { name: 'Tailwind', image: '/Tech-Stack/Tailwind CSS.png' },
    { name: 'Node.js', image: '/Tech-Stack/Node.js.png' },
    { name: 'Next.js', image: '/Tech-Stack/Next.js.png' },
    { name: 'MySQL', image: '/Tech-Stack/MySQL.png' },
    { name: 'Firebase', image: '/Tech-Stack/Firebase.png' },
    { name: 'Laravel', image: '/Tech-Stack/Laravel.png' },
    { name: 'Java', image: '/Tech-Stack/Java.png' },
    { name: 'Kotlin', image: '/Tech-Stack/Kotlin.png' },
    { name: 'Python', image: '/Tech-Stack/Python.png' },
    { name: 'C#', image: '/Tech-Stack/CSharp.png' },
    { name: 'PHP', image: '/Tech-Stack/PHP.png' }
  ];

  const devTools = [
    { name: 'Visual Studio', image: '/DevTools/Visual Studio.png' },
    { name: 'VS Code', image: '/DevTools/VSCode.png' },
    { name: 'Android Studio', image: '/DevTools/Android Studio.png' },
    { name: 'Figma', image: '/DevTools/Figma.png' }
  ];

  const experiences = [
    {
      title: "Nar's School Supply",
      duration: "August - November 2024 (4 months)",
      description: "Built a comprehensive online ordering website with admin system for a school supplies store located in a rural area that previously had no online presence. This solution bridged the digital gap for the local community.",
      technologies: ["NextJS", "MySQL", "Vercel"]
    },
    {
      title: "Quest2Go",
      duration: "February - April 2025 (3 months)",
      description: "Developed a web-based online library for a capstone project featuring a network map that guides users to discover connected research topics. Includes comprehensive admin functionality. Worked 4-6 hours daily on this project.",
      technologies: ["NextJS", "MySQL", "Vercel", "NodeJS"]
    },
    {
      title: "PopFlix",
      duration: "April 2025",
      description: "Created a mobile application similar to Instagram but focused on movie sharing. Users can share, like, and save their favorite movies instead of personal photos.",
      technologies: ["ReactNative", "Android Studio", "Firebase"]
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section*/}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden elegant-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-xl md:text-6xl font-bold mb-4">
                <span className="text-foreground brand-font">ChrisTian Paete</span>
              </h1>
              <div className="text-xl md:text-2xl font-medium heading-font mb-2">
                <span className="text-foreground-secondary">I am a</span>
              </div>
              <div className="text-xl md:text-2xl gradient-text font-medium heading-font">
                <span>Full Stack Developer</span>
                <span className="mx-4 text-gold">•</span>
                <span>UI/UX Designer</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-foreground-secondary mb-12 max-w-3xl mx-auto leading-relaxed body-font">
              Crafting digital experiences that blend innovative technology with exceptional design. 
              Passionate about creating solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="primary-button min-w-[200px]">
                View My Work
              </button>
              
              <button className="secondary-button min-w-[200px]">
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-link"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-foreground-muted" />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 heading-font">Tech Stack</h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto body-font">
              Technologies and programming languages I've encountered and worked with throughout my development journey.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6 mb-16">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="elegant-card p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={tech.image} 
                  alt={tech.name}
                  className="w-12 h-12 mb-3 object-contain"
                />
                <span className="text-sm font-medium text-foreground content-font">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4 heading-font">Development Tools</h3>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto body-font">
              Essential tools that power my development workflow and design process.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {devTools.map((tool, index) => (
              <div
                key={tool.name}
                className="elegant-card p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={tool.image} 
                  alt={tool.name}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <span className="text-sm font-medium text-foreground content-font">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-surface-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 heading-font">Experiences</h2>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto body-font">
              Key projects that showcase my development journey and problem-solving capabilities.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className="elegant-card p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-0 heading-font">
                    {experience.title}
                  </h3>
                  <span className="text-primary font-medium content-font bg-primary/10 px-3 py-1 rounded-full text-sm">
                    {experience.duration}
                  </span>
                </div>
                
                <p className="text-foreground-secondary leading-relaxed mb-6 body-font">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-surface px-3 py-1 rounded-full text-sm text-foreground-secondary content-font border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;